<template>
  <transition name="page">
    <div class="loader">
      <!-- nado dumat -->
    </div>
  </transition>
</template>

<script>
  export default {
    name: "AppLoader"
  }
</script>

<style lang="scss" scoped>
  .loader {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #ffaa0050;
    font-size: 64px;
    color: #fff;
    text-align: center;
  }
</style>
