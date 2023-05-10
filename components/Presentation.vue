<template>
  <el-row id="presentation" class="width-100 height-100">
    <el-col class="presentation" :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
      <h1>Hi ! My name is <strong>Corentin</strong></h1>
      <h1>A front-end developer</h1>
      <p>I'm focused on building front-end web applications</p>
      <el-row class="icons-social-media is-flex is-align-center">
        <Icon name="akar-icons:linkedin-box-fill" />
        <Icon name="akar-icons:twitter-fill" />
        <Icon name="akar-icons:github-fill" />
      </el-row>
    </el-col>
    <el-col class="presentation-image" :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
      <img class="img-corentin" src="../assets/Corentin.png" alt="Photo de Corentin Nordmann" />
    </el-col>
  </el-row>
</template>

<style lang="scss">
  #presentation {
    height: 100vh;
    .presentation {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .presentation-image {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    h1,
    p {
      color: var(--el-text-white);
    }
    h1 > strong {
      color: var(--el-color-danger);
    }
    p {
      margin-top: 20px;
    }
    .icons-social-media {
      margin-top: 20px;
      svg {
        margin: 0 20px;
        font-size: 30px;
        color: var(--el-text-white);
        cursor: pointer;
        &:hover {
          color: var(--el-color-danger);
          transition: all 0.2s;
        }
      }
    }
    .img-corentin {
      width: 400px;
      height: 480px;
      object-fit: cover;
      border-radius: 5px;
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.572);
    }

    @media screen and (max-width: 768px) {
      height: 100vh;
      margin-bottom: 50px;
      h1 {
        font-size: var(--font-size-title-mobile);
      }

      .presentation {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: fit-content;
        padding: 0 20px;
      }

      .icons-social-media {
        width: 100%;
        justify-content: center;
      }

      .presentation-image {
        display: flex;
        align-items: center;
        height: fit-content;
      }

      .img-corentin {
        width: 330px;
        height: 380px;
        object-fit: cover;
        border-radius: 5px;
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.572);
      }
    }
  }
</style>
