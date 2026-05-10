<template>
  <button @click="openInVSCode" class="vscode-button">
    Open in VS Code
  </button>
</template>

<script setup>
const props = defineProps({
  path: {
    type: String,
    required: true
  }
})

const papersDir = ref(null)

onMounted(async () => {
  try {
    const data = await $fetch('/api/system/homedir')
    papersDir.value = data.papersDir
  } catch (e) {
    console.error('Failed to get papers directory:', e)
  }
})

const openInVSCode = () => {
  if (!papersDir.value) {
    alert('Unable to determine papers directory')
    return
  }

  const expandedPath = props.path.replace('${PAPERS_DIR}', papersDir.value)
  window.location.href = `vscode://file${expandedPath}`
}
</script>

<style scoped>
.vscode-button {
  padding: 0.5rem 1rem;
  background: #007acc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s;
}

.vscode-button:hover {
  background: #005a9e;
}
</style>
