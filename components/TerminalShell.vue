<script setup>
import { ref, nextTick, onMounted, onUnmounted } from 'vue'
import { filesystem, commands, progressiveCommands } from '../data/shellData.js'
import { XMarkIcon, MinusIcon } from '@heroicons/vue/24/outline'

const isOpen = ref(false)
const isMinimized = ref(false)
const terminalInput = ref('')
const terminalOutput = ref([])
const inputRef = ref(null)
const outputRef = ref(null)
const currentPath = ref('/home/guest')
const commandHistory = ref([])
const historyIndex = ref(-1)
const isProcessing = ref(false)

// Run progressive command with typewriter effect
const runProgressiveCommand = async (steps) => {
  isProcessing.value = true
  for (const step of steps) {
    await new Promise(resolve => setTimeout(resolve, step.delay))
    terminalOutput.value.push({
      type: 'output',
      content: step.text
    })
    scrollToBottom()
  }
  isProcessing.value = false
}

// Add initial welcome message
onMounted(() => {
  terminalOutput.value.push({
    type: 'output',
    content: commands.help().split('\n').slice(0, 5).join('\n') + '\n\nType "help" for all commands, or "cat README.md" to get started.'
  })
})

const focusInput = () => {
  nextTick(() => {
    inputRef.value?.focus()
  })
}

const scrollToBottom = () => {
  nextTick(() => {
    if (outputRef.value) {
      outputRef.value.scrollTop = outputRef.value.scrollHeight
    }
  })
}

const resolvePath = (path) => {
  if (path.startsWith('/')) {
    return path
  }
  if (path === '..') {
    const parts = currentPath.value.split('/').filter(Boolean)
    parts.pop()
    return '/' + parts.join('/')
  }
  if (path === '.') {
    return currentPath.value
  }
  if (path === '~') {
    return '/home/guest'
  }
  
  let resolved = currentPath.value === '/' ? '' : currentPath.value
  resolved += '/' + path
  return resolved.replace(/\/+/g, '/')
}

const executeCommand = (input) => {
  const trimmed = input.trim()
  if (!trimmed) return

  // Add to history
  commandHistory.value.push(trimmed)
  historyIndex.value = commandHistory.value.length

  // Display the command
  terminalOutput.value.push({
    type: 'command',
    path: currentPath.value,
    content: trimmed
  })

  const parts = trimmed.split(' ')
  const cmd = parts[0].toLowerCase()
  const args = parts.slice(1)

  let output = ''

  switch (cmd) {
    case 'help':
      output = commands.help()
      break

    case 'clear':
      terminalOutput.value = []
      terminalInput.value = ''
      scrollToBottom()
      return

    case 'ls':
      const showHidden = args.includes('-la') || args.includes('-a') || args.includes('-al')
      const lsPath = args.filter(a => !a.startsWith('-'))[0] || currentPath.value
      const resolved = resolvePath(lsPath)
      const dir = filesystem[resolved]
      
      if (!dir) {
        output = `ls: cannot access '${lsPath}': No such file or directory`
      } else if (dir.type !== 'dir') {
        output = lsPath
      } else {
        let contents = dir.contents || []
        if (!showHidden) {
          contents = contents.filter(f => !f.startsWith('.'))
        }
        if (contents.length === 0) {
          output = '(empty directory)'
        } else {
          output = contents.map(f => {
            const fullPath = resolved === '/' ? '/' + f : resolved + '/' + f
            const item = filesystem[fullPath]
            if (item?.type === 'dir') {
              return `\x1b[1;34m${f}/\x1b[0m`  // Blue for directories
            }
            if (f.endsWith('.txt') || f.endsWith('.md')) {
              return `\x1b[0;32m${f}\x1b[0m`  // Green for text files
            }
            if (f.startsWith('.')) {
              return `\x1b[0;90m${f}\x1b[0m`  // Gray for hidden
            }
            return f
          }).join('  ')
        }
      }
      break

    case 'cd':
      if (!args[0] || args[0] === '~') {
        currentPath.value = '/home/guest'
        output = ''
      } else {
        const targetPath = resolvePath(args[0])
        const target = filesystem[targetPath]
        if (!target) {
          output = `cd: ${args[0]}: No such file or directory`
        } else if (target.type !== 'dir') {
          output = `cd: ${args[0]}: Not a directory`
        } else {
          currentPath.value = targetPath || '/'
          output = ''
        }
      }
      break

    case 'pwd':
      output = currentPath.value
      break

    case 'cat':
      if (!args[0]) {
        output = 'cat: missing file operand'
      } else {
        const filePath = resolvePath(args[0])
        const file = filesystem[filePath]
        if (!file) {
          output = `cat: ${args[0]}: No such file or directory`
        } else if (file.type === 'dir') {
          output = `cat: ${args[0]}: Is a directory`
        } else {
          output = file.content
        }
      }
      break

    case 'whoami':
      output = 'guest'
      break

    case 'hostname':
      output = 'zicofarry-portfolio'
      break

    case 'date':
      output = new Date().toString()
      break

    case 'echo':
      output = args.join(' ')
      break

    case 'history':
      output = commandHistory.value.map((cmd, i) => `  ${i + 1}  ${cmd}`).join('\n')
      break

    case 'neofetch':
      output = commands.neofetch()
      break

    case './hack':
    case 'hack':
      runProgressiveCommand(progressiveCommands.hack)
      terminalInput.value = ''
      scrollToBottom()
      return

    case 'sudo':
      output = `[sudo] password for guest: 
Sorry, user 'guest' is not in the sudoers file. This incident will be reported.

Just kidding... but you don't have sudo access here! 😄`
      break

    case 'rm':
      if (args.includes('-rf') && (args.includes('/') || args.includes('/*'))) {
        output = `Nice try! 😏
You almost deleted everything... but this is a read-only filesystem.
No files were harmed in the making of this portfolio.`
      } else {
        output = `rm: cannot remove '${args[0] || ''}': Read-only file system`
      }
      break

    case 'exit':
      isOpen.value = false
      return

    case 'id':
      output = 'uid=1000(guest) gid=1000(guest) groups=1000(guest),27(sudo)'
      break

    case 'uname':
      if (args.includes('-a')) {
        output = 'PortfolioOS 5.15.0-generic x86_64 GNU/Linux'
      } else {
        output = 'PortfolioOS'
      }
      break

    case 'ping':
      runProgressiveCommand(progressiveCommands.ping(args[0]))
      terminalInput.value = ''
      scrollToBottom()
      return

    case 'curl':
      if (args[0]?.includes('ifconfig.me')) {
        output = '192.168.1.337'
      } else {
        output = `curl: (7) Failed to connect to ${args[0] || 'unknown'}: Connection refused`
      }
      break

    case 'nmap':
      runProgressiveCommand(progressiveCommands.nmap(args.find(a => !a.startsWith('-')) || 'localhost'))
      terminalInput.value = ''
      scrollToBottom()
      return

    case 'git':
      if (args[0] === 'status') {
        output = `On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean`
      } else {
        output = `git: '${args[0] || ''}' is not a git command.`
      }
      break

    default:
      output = `Command not found: ${cmd}
Type 'help' for available commands.`
  }

  if (output) {
    terminalOutput.value.push({
      type: 'output',
      content: output
    })
  }

  terminalInput.value = ''
  scrollToBottom()
}

const handleKeydown = (e) => {
  if (isProcessing.value) return // Block input during progressive output
  if (e.key === 'Enter') {
    executeCommand(terminalInput.value)
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    if (historyIndex.value > 0) {
      historyIndex.value--
      terminalInput.value = commandHistory.value[historyIndex.value]
    }
  } else if (e.key === 'ArrowDown') {
    e.preventDefault()
    if (historyIndex.value < commandHistory.value.length - 1) {
      historyIndex.value++
      terminalInput.value = commandHistory.value[historyIndex.value]
    } else {
      historyIndex.value = commandHistory.value.length
      terminalInput.value = ''
    }
  } else if (e.key === 'Tab') {
    e.preventDefault()
    // Simple tab completion for current directory
    const parts = terminalInput.value.split(' ')
    const lastPart = parts[parts.length - 1]
    if (lastPart) {
      const dir = filesystem[currentPath.value]
      if (dir?.contents) {
        const match = dir.contents.find(f => f.startsWith(lastPart))
        if (match) {
          parts[parts.length - 1] = match
          terminalInput.value = parts.join(' ')
        }
      }
    }
  } else if (e.key === 'l' && e.ctrlKey) {
    e.preventDefault()
    terminalOutput.value = []
  }
}

// Global keyboard shortcut to toggle terminal
const handleGlobalKeydown = (e) => {
  if (e.key === '`' && e.ctrlKey) {
    e.preventDefault()
    isOpen.value = !isOpen.value
    if (isOpen.value) {
      focusInput()
    }
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleGlobalKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleGlobalKeydown)
})

const formatOutput = (text) => {
  // Simple ANSI color parsing
  return text
    .replace(/\x1b\[1;34m/g, '<span class="text-blue-400 font-bold">')
    .replace(/\x1b\[0;32m/g, '<span class="text-green-400">')
    .replace(/\x1b\[0;90m/g, '<span class="text-gray-500">')
    .replace(/\x1b\[0m/g, '</span>')
}
</script>

<template>
  <!-- Terminal Toggle Button -->
  <button
    v-if="!isOpen"
    @click="isOpen = true; focusInput()"
    class="fixed bottom-6 right-6 z-50 hidden lg:flex items-center gap-2 px-4 py-3 bg-zico-dark border border-zico-primary/50 rounded-lg text-zico-primary hover:bg-zico-primary/10 hover:border-zico-primary transition-all duration-300 shadow-lg shadow-zico-primary/20 group"
  >
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    <span class="text-sm font-mono">Terminal</span>
    <span class="text-xs text-gray-500 group-hover:text-gray-400">Ctrl+`</span>
  </button>

  <!-- Terminal Window -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <div
        v-if="isOpen"
        class="fixed bottom-6 right-6 z-50 hidden lg:block"
        :class="isMinimized ? 'w-80' : 'w-[600px]'"
      >
        <div
          class="bg-[#0d1117] border border-gray-700 rounded-lg shadow-2xl shadow-black/50 overflow-hidden"
          :class="{ 'h-auto': isMinimized }"
        >
          <!-- Title Bar -->
          <div class="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-gray-700">
            <div class="flex items-center gap-2">
              <div class="flex gap-1.5">
                <button @click="isOpen = false" class="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400"></button>
                <button @click="isMinimized = !isMinimized" class="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400"></button>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span class="ml-2 text-xs text-gray-400 font-mono">guest@zicofarry:{{ currentPath }}</span>
            </div>
            <div class="flex items-center gap-2">
              <button @click="isMinimized = !isMinimized" class="text-gray-500 hover:text-white">
                <MinusIcon class="w-4 h-4" />
              </button>
              <button @click="isOpen = false" class="text-gray-500 hover:text-white">
                <XMarkIcon class="w-4 h-4" />
              </button>
            </div>
          </div>

          <!-- Terminal Body -->
          <div v-if="!isMinimized" class="h-[400px] flex flex-col">
            <!-- Output Area -->
            <div
              ref="outputRef"
              class="flex-1 p-4 overflow-y-auto font-mono text-sm leading-relaxed"
              @click="focusInput"
            >
              <div v-for="(line, i) in terminalOutput" :key="i" class="mb-1">
                <template v-if="line.type === 'command'">
                  <span class="text-green-400">guest@zicofarry</span>
                  <span class="text-gray-500">:</span>
                  <span class="text-blue-400">{{ line.path }}</span>
                  <span class="text-gray-500">$ </span>
                  <span class="text-white">{{ line.content }}</span>
                </template>
                <template v-else>
                  <pre class="whitespace-pre-wrap text-gray-300" v-html="formatOutput(line.content)"></pre>
                </template>
              </div>

              <!-- Current Input Line -->
              <div class="flex items-center">
                <span class="text-green-400">guest@zicofarry</span>
                <span class="text-gray-500">:</span>
                <span class="text-blue-400">{{ currentPath }}</span>
                <span class="text-gray-500">$ </span>
                <input
                  ref="inputRef"
                  v-model="terminalInput"
                  @keydown="handleKeydown"
                  type="text"
                  class="flex-1 bg-transparent text-white outline-none font-mono caret-green-400"
                  spellcheck="false"
                  autocomplete="off"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Custom scrollbar for terminal */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #0d1117;
}
::-webkit-scrollbar-thumb {
  background: #30363d;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #484f58;
}
</style>
