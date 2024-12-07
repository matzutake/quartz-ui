<template>
  <div class="page-header">
    <div class="page-header__wrapper">
      <div class="page-header__logo">
        <img src="/quartz.svg" alt="Quartz UI" width="40" height="40" />
        <h1>Quartz UI</h1>
      </div>

      <div class="page-header__social">
        <img src="/src/assets/svg/telegram.svg" alt="Github" width="28" height="28" />
        <img src="/src/assets/svg/figma.svg" alt="Github" width="28" height="28" />
        <img src="/src/assets/svg/github.svg" alt="Github" width="24" height="24" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .page-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &__wrapper {
      display: flex;
      justify-content: space-between;
      width: 50%;
    }

    &__logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      h1 {
        font-size: 1.6rem;
        font-weight: 400;
        color: #f5f5f5;
      }
    }

    &__social {
      display: flex;
      gap: 0.75rem;
      align-items: center;
    }
  }

  @media screen and (max-width: 768px) {
    .page-header__wrapper {
      width: 100%;
      padding: 0 1rem;
    }
  }
</style>
