<script setup lang="ts">
import '../../assets/zyneon/css/components/desktop-side-menu.css';
</script>

<template>
  <div class="desktop-side-menu">

    <div class="top">
      <slot name="top">

      </slot>
    </div>

    <div class="center">
      <slot name="center">
        <button class="btn" onclick="this.parentElement.parentElement.classList.toggle('active')">
          <i class="bi bi-list"></i>
          <span>Toggle menu</span>
        </button>
      </slot>
    </div>

    <div class="bottom">
      <slot name="bottom">

      </slot>
    </div>

  </div>
</template>