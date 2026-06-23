<script setup lang="ts">
import '../../../assets/zyneon/css/components/desktop-element-input-commandbar.css';
import InputBar from "./InputBar.vue";
</script>

<template>
  <div class="command-bar">
    <InputBar background="var(--zyn-ov-darker-500)">
      <template #start>
        <div class="left-0 top-0 h-6 w-6 relative">
          <i class="icon-terminal absolute top-0 left-0" style="padding: 0.175rem 0.5rem"></i>
        </div>
      </template>
      <template #center>
          <input type="text" class="input cursor-not-allowed text-gray-400 hover:text-red-200" value="Input command..." disabled/>
      </template>
    </InputBar>
  </div>
</template>