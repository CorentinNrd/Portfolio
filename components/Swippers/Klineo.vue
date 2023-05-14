<template>
  <Swiper
    id="klineo-swiper"
    class="carousel"
    :modules="[SwiperAutoplay, SwiperPagination]"
    :slides-per-view="1"
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
      <img src="~/assets/klineo/LoginKlineo.png" alt="image" />
    </swiper-slide>
    <swiper-slide>
      <img src="~/assets/klineo/AccountKlineo.png" alt="image" />
    </swiper-slide>
    <swiper-slide>
      <img src="~/assets/klineo/FAQKlineo.png" alt="image" />
    </swiper-slide>
    <swiper-slide>
      <img src="~/assets/klineo/ResultsKlineo.png" alt="image" />
    </swiper-slide>
    <swiper-slide>
      <img src="~/assets/klineo/SearchKlineo.png" alt="image" />
    </swiper-slide>
  </Swiper>
</template>

<style lang="scss">
  #klineo-swiper {
    width: 1000px;
    height: 500px;
    .swiper-wrapper {
      position: relative;
    }
    .swiper-pagination {
      position: absolute;
      bottom: 0;
      background: #111827;
    }
    .swiper-pagination-bullet {
      background: white;
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background: var(--el-color-danger);
    }
    img {
      aspect-ratio: 16/9;
      width: 100%;
      object-fit: contain;
    }
  }
</style>
