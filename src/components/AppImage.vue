<template>
  <transition name="image">
    <img v-show="loaded"
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
    props: ['src', 'alt'],
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
</style>
