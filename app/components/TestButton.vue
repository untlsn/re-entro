<script setup lang="ts">
const count = ref(0)
</script>

<template>
  <button
    type="button"
    class="rounded border px-4 py-2"
    @click="count++"
  >
    {{ count }}
  </button>
  <div />
</template>

<style scoped></style>
