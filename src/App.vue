<template>
  <div id="app">
    <div class="icon" :key="$route.path"></div>
    <app-nav @fadeContent="fadeContent" @toggleMobileMenu="toggleMobileMenu"/>
    <div class="row content" :class="{'faded': isContentFaded, 'hidden': isMobileMenuOpen}">
     <transition name="page" :key="$route.path">
       <router-view />
     </transition>
    </div>
    <app-footer />
  </div>
</template>

<script>
  import AppNav from './components/AppNav'
  import AppFooter from './components/AppFooter'

  export default {
    name: 'app',
    components: {
      AppNav,
      AppFooter
    },
    data() {
      return {
        isContentFaded: false,
        isMobileMenuOpen: false,
          icons : [
              'url(https://image.flaticon.com/icons/svg/864/864102.svg)',
              'url(https://image.flaticon.com/icons/svg/43/43007.svg)',
              'url(https://image.flaticon.com/icons/svg/243/243278.svg)',
              'url(https://image.flaticon.com/icons/svg/1651/1651689.svg)',
              'url(https://image.flaticon.com/icons/svg/2056/2056632.svg)',
              'url(https://image.flaticon.com/icons/svg/2081/2081509.svg)',
          ]
      }
    },
    watch: {
      $route() {
          const index = Math.round(Math.random() * 5);

          document.documentElement.style.setProperty('--icon', this.icons[index]);
      }
    },
    methods: {
      fadeContent(fade) {
        this.isContentFaded = fade
      },
      toggleMobileMenu(open) {
        this.isMobileMenuOpen = open
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,500,600,800,900|Roboto:100,300,300i,400,500,700,900&display=swap&subset=cyrillic');
  html {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #444;
    background-color: #f5f5f5;
    --icon: url(https://image.flaticon.com/icons/svg/864/864102.svg);

    &, & * {
      margin: 0;
      padding: 0;
      text-decoration: none;
      box-sizing: border-box;
      &::selection {
        background-color: rgba(255,255,0,.5);
      }
    }
  }

  [id='app'] {
    display: flex;
    flex-direction: column;
    min-height: 101vh;
    .icon {
      content: '';
      position: absolute;
      opacity: .05;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: -1;
      pointer-events: none;
      background: var(--icon) 105% 90%/45vmax no-repeat;
    }
  }

  .row {
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    &.content {
      flex-grow: 1;
      padding: 32px 8px;
      transition: opacity .2s;
      &.faded {
        opacity: .5;
      }
      &.hidden {
        display: none;
      }
    }
  }

  .headline {
    max-width: 600px;
    margin: 0 auto 24px;
    font-family: Montserrat,sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.5;
    text-align: center;
    &.small {
      font-size: 20px;
    }
  }

  .text {
    font-weight: 300;
    font-size: 16px;
    line-height: 1.5;
    font-family: Roboto,sans-serif;
  }

  .caption {
    font-style: italic;
  }

  @media (max-width: 760px) {
    .headline {
      font-size: 20px;
    }
    .text {
      font-size: 14px;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: 0.2s;
    transform: translateY(0);
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transition: 75ms;
    transform: translateY(-10px);
  }

  .menu-enter-active,
  .menu-leave-active {
    transition: 0.5s;
    transform: translateY(0);
  }
  .menu-enter,
  .menu-leave-to {
    opacity: 0;
    transition: .5s;
    transform: translateY(-20px);
  }

  .page-enter-active,
  .page-leave-active {
    opacity: 0;
    transition: 0.3s;
    transform: translateY(20px);
  }
  .page-enter,
  .page-leave-to {
    opacity: 0;
    transition: .3s;
    transform: translateY(-20px);
  }
  .image-enter,
  .page-enter-active {
    opacity: 0;
    transition: .3s;
    transform: scale(.7);
  }
</style>
