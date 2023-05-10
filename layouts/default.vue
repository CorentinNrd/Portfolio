<template>
  <div id="default">
    <Header />
    <div class="content">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
  #default {
    // height: 100%;
    .content {
      // height: 100%;
      margin-bottom: 30px;
    }
  }
</style>
