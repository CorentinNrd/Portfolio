<script setup lang="ts">
  //   const isMobile = ref(false);

  //   const handleResize = () => {
  //     if (window.innerWidth <= 768) {
  //       isMobile.value = true;
  //     } else {
  //       isMobile.value = false;
  //     }
  //   };

  //   onMounted(() => {
  //     handleResize();
  //     window.addEventListener('resize', handleResize);
  //   });
</script>

<template>
  <div id="contact">
    <h1>Contact</h1>
  </div>
</template>

<style lang="scss">
  #contact {
    height: 100%;
    margin: 0 20px;
    margin-bottom: 250px;
    h1 {
      font-size: var(--font-size-title);
      color: var(--el-text-white);
      margin-bottom: 40px;
    }

    @media screen and (max-width: 768px) {
      height: 100%;
      margin-bottom: 50px;
      h1 {
        font-size: var(--font-size-title-mobile);
      }
    }
  }
</style>
