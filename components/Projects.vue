<script setup lang="ts">
  import AccueilPreviously from '@/assets/PreviouslyOn/accueil.png';
  import SearchKlineo from '@/assets/klineo/SearchKlineo.png';
  import HeaderLanding from '@/assets/KlineoLandingPortfolio/Header.png';
  import AccueilMentor from '@/assets/MentorScreens/Accueil.png';

  const myobj = reactive([
    {
      title: 'Previously On',
      url: AccueilPreviously,
    },
    {
      title: 'Klineo',
      url: SearchKlineo,
    },
    {
      title: 'Klineo Landing Page',
      url: HeaderLanding,
    },
    {
      title: 'Mentor',
      url: AccueilMentor,
    },
  ]);
</script>

<template>
  <div id="projects">
    <h1>Projects</h1>
    <el-row :gutter="16">
      <el-col v-for="(v, k) in myobj" :key="k" :xl="12" :lg="12" :md="12" :sm="24" :xs="24" class="mt-2">
        <ProjectsCards :title="v.title" :url="v.url" />
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
  #projects {
    height: 100%;
    margin: 0 20px;
    h1 {
      font-size: var(--font-size-title);
      color: var(--el-text-white);
    }

    @media screen and (max-width: 768px) {
      margin-bottom: 50px;
      h1 {
        font-size: var(--font-size-title-mobile);
      }
    }
  }
</style>
