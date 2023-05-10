<template>
  <div id="about" class="flex flex-col">
    <h1>About</h1>
    <el-row class="flex items-center">
      <el-col :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
        <img class="img-corentin-rocher" src="../assets/Photo.png" alt="Photo de Corentin Nordmann" />
      </el-col>
      <el-col :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
        <p>
          Je me suis spécialisé dans le développement front-end d'application web.
          <br /><br />
          Je suis passionné par le développement web et son apprentissage.
          <br /><br />
          J'adore découvrir de nouvelle manière de travailler et de développer afin d'améliorer mon code.
          <br /><br />
          Je serais ravi de pouvoir travailler avec vous sur vos projets et naviguer sur de vers de nouveaux horizons.
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
  #about {
    height: 100%;
    margin: 0 20px;
    margin-bottom: 250px;
    h1 {
      font-size: var(--font-size-title);
      color: var(--el-text-white);
      margin-bottom: 20px;
    }
    p {
      color: var(--el-text-white);
    }

    .img-corentin-rocher {
      width: 550px;
      height: 250px;
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

      .img-corentin-rocher {
        width: 500px;
        height: 180px;
        object-fit: cover;
        border-radius: 5px;
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.572);
        margin-bottom: 20px;
      }
    }
  }
</style>
