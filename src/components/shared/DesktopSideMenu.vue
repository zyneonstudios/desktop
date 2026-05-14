<script setup lang="ts">
import '../../assets/zyneon/css/components/desktop-side-menu.css';
</script>

<template>
  <div class="desktop-side-menu" data-tauri-drag-region>

    <div class="top" data-tauri-drag-region>
      <slot name="top" data-tauri-drag-region>

      </slot>
    </div>

    <div class="center" data-tauri-drag-region>
      <slot name="center" data-tauri-drag-region>
        <button class="btn" onclick="this.parentElement.parentElement.classList.toggle('active')">
          <i class="bi bi-list"></i>
          <span>Toggle menu</span>
        </button>
      </slot>
    </div>

    <div class="bottom" data-tauri-drag-region>
      <slot name="bottom" data-tauri-drag-region>

      </slot>
    </div>

  </div>
</template>