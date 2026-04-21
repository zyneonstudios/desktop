<script setup lang="ts">
import DesktopElement from "./DesktopElement.vue";
defineProps<{
  background: string
}>()
</script>

<template>
  <DesktopElement>
    <div class="badge px-2 py-0 zyn-br-sm" style="font-size: 0.8rem" :style="{ backgroundColor: background }">
      <slot></slot>
    </div>
  </DesktopElement>
</template>