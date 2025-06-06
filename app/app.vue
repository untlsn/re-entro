<script setup lang="ts">
const { $orpc } = useNuxtApp();

const { data } = useAsyncData(...asyncDataOptions($orpc.consoles.getAll));
</script>

<template>
  <div class="min-h-screen grid place-items-center">
    <TestButton />
    {{ data }}
  </div>
</template>
