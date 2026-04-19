<script setup lang="ts">

</script>

<template>
  <div class="h-full w-full flex">
    <div class="w-full h-full ">
      <slot name="left"></slot>
    </div>
    <div class="w-full h-full">
      <slot name="center" class="w-full"></slot>
    </div>
    <div class="w-full h-full">
      <slot name="right" class="w-full"></slot>
    </div>
  </div>
</template>

<style scoped>

</style>