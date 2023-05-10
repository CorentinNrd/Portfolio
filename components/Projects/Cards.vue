<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  });

  const { title, url } = toRefs(props);

  const goTo = (title: string) => {
    navigateTo(`/${title}`);
  };
</script>

<template>
  <el-card id="cards" @click="goTo(title)">
    <template #default>
      <div class="container-img">
        <h3>{{ title }}</h3>
        <img class="img" :src="url" alt="image" />
      </div>
    </template>
  </el-card>
</template>

<style lang="scss">
  #cards {
    background: transparent;
    border: none;
    .el-card__body {
      .container-img {
        position: relative;
        h3 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: var(--el-text-white);
          font-size: var(--font-size-title-mobile);
          font-weight: 600;
          text-align: center;
          opacity: 0;
        }
        .img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.572);
        }

        &:hover {
          cursor: pointer;
          h3 {
            opacity: 1;
            transition: all 0.2s;
            z-index: 1;
            width: 100%;
          }
          .img {
            filter: brightness(0.3);
            transition: all 0.2s;
          }
        }
      }
    }

    @media screen and (max-width: 768px) {
      h1 {
        font-size: var(--font-size-title-mobile);
      }

      .el-card__body {
        padding: 10px 5px;
        .container-img {
          position: relative;
          h3 {
            opacity: 1;
            z-index: 1;
            width: 100%;
          }
          .img {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.572);
            filter: brightness(0.3);
          }
        }
      }
    }
  }
</style>
