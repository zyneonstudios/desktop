<script setup lang="ts">
import DesktopElement from "./DesktopElement.vue";
import '../../../assets/zyneon/css/components/desktop-element-input.css';
defineProps<{
  background: string
  placeholder?: string
}>()
</script>

<template>
  <DesktopElement>
    <div class="input-element badge px-0 py-0 zyn-br-sm flex" style="font-size: 0.8rem" :style="{ backgroundColor: background }">
      <slot name="start"></slot>
      <slot name="center">
        <input type="text" class="input" :placeholder="placeholder"/>
      </slot>
      <slot name="end"></slot>
    </div>
  </DesktopElement>
</template>