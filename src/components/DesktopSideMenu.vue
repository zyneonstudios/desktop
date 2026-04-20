<script setup lang="ts">

</script>

<template>
  <div class="desktop-side-menu">

    <div class="top">
      <slot name="top">
        <button class="btn" onclick="this.parentElement.parentElement.classList.toggle('active')">
          <i class="bi bi-list"></i>
          <span>Toggle menu</span>
        </button>
      </slot>
    </div>

    <div class="center">
      <slot name="center">
        <button class="btn" onclick="this.parentElement.classList.toggle('active')">
          <i class="bi bi-github"></i>
          <span>Show repository</span>
        </button>
        <button class="btn" onclick="this.parentElement.classList.toggle('active')">
          <i class="bi bi-download"></i>
          <span>Download</span>
        </button>
        <button class="btn" onclick="this.parentElement.classList.toggle('active')">
          <i class="bi bi-star"></i>
          <span>Subscribe</span>
        </button>
      </slot>
    </div>

    <div class="bottom">
      <slot name="bottom">
        <button class="btn" onclick="this.parentElement.classList.toggle('active')">
          <i class="bi bi-list"></i>
          <span>Toggle menu</span>
        </button>
        <button class="btn" onclick="this.parentElement.classList.toggle('active')">
          <i class="bi bi-list"></i>
          <span>Toggle menu</span>
        </button>
      </slot>
    </div>

  </div>
</template>

<style scoped>
.desktop-side-menu {
  display: flex;
  flex-direction: column;

  transition: var(--zyn-transition);
  position: relative;
  width: 3rem;
  overflow: hidden;
  overflow-y: auto;

  .top, .center, .bottom {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--zyn-ov-brighter-200);
  }

  .center, .bottom {
    padding-top: 0.5rem;
  }

  .bottom {
    border-bottom: none;
  }

  button {
    width: 2rem;
    height: 2rem;
    overflow: hidden;
    margin: 0 0.5rem 0.5rem 0.5rem;

    span {
      display: none;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}

.desktop-side-menu.active {
  width: 20rem;

  button {
    width: 15rem;

    span {
      display: inline;
    }
  }
}
</style>