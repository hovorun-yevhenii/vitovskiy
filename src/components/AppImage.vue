<template>
  <transition name="image">
    <img v-show="loaded"
         :class="{'styled': styled}"
         :src="src"
         @error="errorHandler"
         :alt="alt"
         @load="loadHandler"
    />
  </transition>
</template>

<script>
  export default {
    name: 'AppImage',
    data() {
      return {
        loaded: false
      }
    },
    props: ['src', 'alt', 'styled'],
    methods: {
      loadHandler() {
        this.loaded = true
      },
      errorHandler(error) {
        this.$emit('imageError', error)
      }
    }
  }
</script>

<style scoped lang="scss">
  img {
    max-width: 100%;
    max-height: 100%;
    transition: .2s;
  }
  .styled {
    border-radius: 64px 16px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  }
</style>
