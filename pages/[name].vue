<script setup lang="ts">
  const isKlineo = ref(false);
  const isKlineoLandingPortfolio = ref(false);
  const isMentor = ref(false);
  const isPreviouslyOn = ref(false);

  onMounted(() => {
    const route = useRoute();
    const name = route.params.name;

    switch (name) {
      case 'Klineo':
        isKlineo.value = true;
        break;
      case 'Klineo Landing Page':
        isKlineoLandingPortfolio.value = true;
        break;
      case 'Mentor':
        isMentor.value = true;
        break;
      case 'Previously On':
        isPreviouslyOn.value = true;
        break;
    }
  });

  definePageMeta({
    layout: 'infoproject',
  });
</script>

<template>
  <div id="info-project">
    <SwippersLanding v-if="isKlineoLandingPortfolio" />
    <SwippersMentor v-if="isMentor" />
    <SwippersKlineo v-if="isKlineo" />
    <SwippersPreviously v-if="isPreviouslyOn" />
    <div v-if="isKlineoLandingPortfolio">
      <p>Landing page</p>
    </div>
    <div v-if="isKlineo">
      <p>Klineo</p>
    </div>
    <div v-if="isMentor">
      <p>Mentor</p>
    </div>
    <div v-if="isPreviouslyOn">
      <p>Previously On</p>
    </div>
  </div>
</template>

<style lang="scss">
  #info-project {
  }
</style>
