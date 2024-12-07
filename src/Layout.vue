<template>
  <div class="layout">
    <page-header />
    <router-view />
  </div>
</template>

<script setup lang="ts">
  import PageHeader from './components/layouts/PageHeader.vue'
</script>

<style lang="scss" scoped>
  .layout {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
</style>
