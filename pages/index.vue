<script setup lang="ts">
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    history.pushState('', document.title, window.location.pathname);
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    const nav = document.querySelector('.btn-backToTop');
    if (window.scrollY > 0) {
      nav?.classList.add('show-btn');
    } else {
      nav?.classList.remove('show-btn');
    }
  };

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
    <el-button class="btn-backToTop" @click="backToTop">
      <Icon name="eva:arrow-upward-outline" />
    </el-button>
  </div>
</template>

<style lang="scss">
  #index {
    max-width: 1200px;
    margin: 0 auto;
    margin-top: -52px;

    .btn-backToTop {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      background-color: var(--el-text-white);
      border: none;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.572);
      transition: all 0.2s;
      opacity: 0;

      &:hover {
        background-color: var(--el-text-white);
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.572);
      }

      svg {
        font-size: 20px;
        color: var(--el-color-danger);
      }
    }

    .show-btn {
      opacity: 1;
      transition: all 0.2s;
    }

    @media screen and (max-width: 768px) {
      margin-top: 20px;
    }
  }
</style>
