<template>
  <Swiper
    id="previously-swiper"
    class="carousel"
    :modules="[SwiperAutoplay, SwiperPagination]"
    :slides-per-view="1"
    :space-between="0"
    :loop="true"
    :autoplay="{
      delay: 10000,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
  >
    <swiper-slide>
      <img src="~/assets/PreviouslyOn/accueil.png" alt="image" />
    </swiper-slide>
    <swiper-slide>
      <img src="~/assets/PreviouslyOn/episodes.png" alt="image" />
    </swiper-slide>
    <swiper-slide>
      <img src="~/assets/PreviouslyOn/home.png" alt="image" />
    </swiper-slide>
    <swiper-slide>
      <img src="~/assets/PreviouslyOn/liste.png" alt="image" />
    </swiper-slide>
    <swiper-slide>
      <img src="~/assets/PreviouslyOn/notif.png" alt="image" />
    </swiper-slide>
    <swiper-slide>
      <img src="~/assets/PreviouslyOn/profil.png" alt="image" />
    </swiper-slide>
    <swiper-slide>
      <img src="~/assets/PreviouslyOn/search.png" alt="image" />
    </swiper-slide>
    <swiper-slide>
      <img src="~/assets/PreviouslyOn/serie.png" alt="image" />
    </swiper-slide>
  </Swiper>
</template>

<style lang="scss">
  #previously-swiper {
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
