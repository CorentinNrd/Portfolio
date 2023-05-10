<template>
  <footer id="footer" class="text-white">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-center md:text-left">
          <p class="text-sm">© {{ new Date().getFullYear() }} - All rights reserved</p>
        </div>
        <div class="text-center md:text-right">
          <p class="text-sm">
            Made with ❤️ by
            <a href="https://github.com/CorentinNrd" target="_blank" class="text-indigo-700"> Corentin Nordmann </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
  #footer {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    background-color: #111827;
  }
</style>
