<script setup lang="ts">
import '../../../assets/zyneon/css/components/desktop-element-card.css';
import DesktopElement from "./DesktopElement.vue";
defineProps<{
  background?: string
  border?: string
}>()
</script>

<template>
<div class="card zyn-br-md shadow-lg" :style="{background: background, border: border}">
    <DesktopElement>
      <div class="header px-3 pt-2">
        <slot name="header"></slot>
      </div>
      <div class="content px-3 py-2">
        <slot name="content"></slot>
      </div>
      <div class="footer px-3 pb-2">
        <slot name="footer"></slot>
      </div>
    </DesktopElement>
  </div>
</template>