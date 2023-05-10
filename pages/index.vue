<script setup lang="ts">
  definePageMeta({
    layout: 'default',
  });
</script>

<template>
  <div id="index">
    <Presentation />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </div>
</template>

<style lang="scss">
  #index {
    max-width: 1200px;
    margin: 0 auto;
    margin-top: -52px;

    @media screen and (max-width: 768px) {
      margin-top: 20px;
    }
  }
</style>
