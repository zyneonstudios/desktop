<script setup lang="ts">
import '../../../assets/zyneon/css/components/desktop-element-card-structured.css';
import CardElement from "./CardElement.vue";
defineProps<{
  background?: string
  border?: string
}>()
</script>

<template>
  <CardElement :background="background" :border="border">
    <div class="structured-card flex flex-col h-full">
      <div class="header px-3 pt-2">
        <slot name="header"></slot>
      </div>
      <div class="content px-3 py-2">
        <slot name="content"></slot>
      </div>
      <div class="footer mt-auto px-3 pb-2 pt-2 flex">
        <slot name="footer"></slot>
      </div>
    </div>
  </CardElement>
</template>