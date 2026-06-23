<script setup lang="ts">
import '../../../assets/zyneon/css/components/desktop-element-card-dynamicpanel.css';
import Card from "./Card.vue";
</script>

<template>
  <div class="dynamic-panel absolute bottom-0 right-0">
    <Card class="opacity-75 hover:opacity-100 transition-all zyn-ov-brighter-300 m-3" border="1px solid var(--zyn-ov-brighter-200)">
      <p class="cursor-pointer m-0 py-1 px-3"><strong>Zyneon</strong> Desktop [Alpha]</p>
    </Card>
  </div>
</template>