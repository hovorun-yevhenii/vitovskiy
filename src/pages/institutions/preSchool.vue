<template>
  <div>
    <template v-for="article in info">
      <app-image class="image" :src="article.img" :styled="true"/>
      <div class="text" v-html="article.text"></div>
    </template>
  </div>
</template>

<script>
  import fetchAndLoad from '../../mixins/fetchAndLoad';

  export default {
    name: "preSchool",
    mixins: [fetchAndLoad],
    data() {
      return {
        info: []
      }
    },
    created() {
      this.$fetch('preSchool').then(info => Object.assign(this.$data, {info}))
    }
  }
</script>

<style lang="scss" scoped>
  .text {
    text-indent: 16px;
    margin-bottom: 32px;
  }

  .image {
    max-width: 480px;
    width: 100%;
    height: auto;
    float: left;
    margin: 0 16px 16px 0;
  }
</style>
