<script setup lang="ts">
  definePageMeta({
    layout: '404',
  });
</script>

<template>
  <div id="not-found-page" class="flex flex-col justify-center items-center">
    <h1>404</h1>
    <p>Page not found</p>
    <NuxtLink to="/" class="animated-link">Go back to home</NuxtLink>
  </div>
</template>

<style lang="scss">
  #not-found-page {
    height: 100vh;
    h1 {
      font-size: 100px;
      color: var(--el-text-white);
      margin-right: 20px;
    }
    p {
      font-size: 30px;
      color: var(--el-text-white);
    }
    a {
      margin-top: 20px;
      color: #fff;
      text-decoration: none;
      &:hover {
        color: var(--el-color-danger);
        transition: all 0.2s;
      }
    }

    .animated-link {
      cursor: pointer;
      position: relative;
      text-decoration: none;
      font-size: var(--font-size-lg);
    }

    .animated-link:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 1.5px;
      bottom: -3px;
      left: 0;
      transform-origin: bottom right;
      transition: transform 0.3s ease-out;
      background-color: var(--el-color-danger);
    }

    .animated-link:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
</style>
