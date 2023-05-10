<script setup lang="ts">
  const isMobile = ref(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      isMobile.value = true;
    } else {
      isMobile.value = false;
    }
  };

  onMounted(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  });
</script>

<template>
  <div id="skills">
    <h1>Compétences</h1>
    <Swiper
      class="carousel"
      :modules="[SwiperAutoplay, SwiperPagination]"
      :slides-per-view="isMobile ? 3 : 6"
      :space-between="0"
      :loop="true"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
    >
      <swiper-slide>
        <Icon name="skill-icons:vuejs-light" />
      </swiper-slide>
      <swiper-slide>
        <Icon name="skill-icons:typescript" />
      </swiper-slide>
      <swiper-slide>
        <Icon name="skill-icons:sass" />
      </swiper-slide>
      <swiper-slide>
        <Icon name="skill-icons:html" />
      </swiper-slide>
      <swiper-slide>
        <Icon name="skill-icons:css" />
      </swiper-slide>
      <swiper-slide>
        <Icon name="skill-icons:javascript" />
      </swiper-slide>
      <swiper-slide>
        <Icon name="skill-icons:nodejs-light" />
      </swiper-slide>
      <swiper-slide>
        <Icon name="skill-icons:git" />
      </swiper-slide>
      <swiper-slide>
        <Icon name="skill-icons:github-light" />
      </swiper-slide>
      <swiper-slide>
        <Icon name="skill-icons:docker" />
      </swiper-slide>
      <swiper-slide>
        <Icon name="skill-icons:figma-light" />
      </swiper-slide>
      <swiper-slide>
        <Icon name="skill-icons:tailwindcss-light" />
      </swiper-slide>
    </Swiper>
  </div>
</template>

<style lang="scss">
  #skills {
    height: 100%;
    margin: 0 20px;
    margin-bottom: 250px;
    h1 {
      font-size: var(--font-size-title);
      color: var(--el-text-white);
      margin-bottom: 40px;
    }
    .carousel {
      height: 140px;
      .swiper-slide {
        justify-content: center;
        display: flex;
      }
      svg {
        font-size: 100px;
        &:hover {
          transform: scale(0.95);
          transition: all 0.2s;
        }
      }
    }

    @media screen and (max-width: 768px) {
      height: 100%;
      margin-bottom: 50px;
      h1 {
        font-size: var(--font-size-title-mobile);
      }

      .carousel {
        svg {
          font-size: 70px;
        }
      }
    }
  }
</style>
