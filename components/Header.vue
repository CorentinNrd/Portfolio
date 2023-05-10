<script setup lang="ts">
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 0) {
      nav?.classList.add('nav-sticky');
    } else {
      nav?.classList.remove('nav-sticky');
    }
  };
</script>

<template>
  <nav id="nav">
    <div class="nav">
      <ul>
        <li>
          <NuxtLink to="#about" class="animated-link">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#projects" class="animated-link">Projects</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#contact" class="animated-link">Contact</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">
  #nav {
    position: sticky;
    top: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;

    .animated-link {
      cursor: pointer;
      position: relative;
      text-decoration: none;
      font-size: var(--font-size-lg);
    }

    .nav {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 50px;
      width: 100%;
      transition: all 0.4s;
      background-color: #111827;
      a {
        color: #fff;
        text-decoration: none;
      }

      .animated-link:after {
        background-color: #fff;
      }
    }

    .nav-sticky {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 50px;
      width: 95%;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      margin-top: 8px;
      transition: all 0.4s;
      background-color: var(--el-color-danger);
      a {
        color: #fff;
        text-decoration: none;
      }

      .animated-link:after {
        background-color: #fff;
      }
    }

    ul {
      display: flex;
      list-style: none;
      gap: 15px;

      li {
        margin-right: 1rem;
      }
    }

    .animated-link:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 1.5px;
      bottom: -3px;
      left: 0;
      transform-origin: bottom right;
      transition: transform 0.3s ease-out;
    }

    .animated-link:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
</style>
