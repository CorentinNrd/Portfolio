<template>
  <div id="default">
    <HeaderInfoProject />
    <div class="content">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
  #default {
    .content {
      margin-bottom: 30px;
    }
  }
</style>
