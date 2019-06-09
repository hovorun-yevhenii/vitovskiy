<template>
  <div class="news">
    <div class="item" v-for="(item, index) in news" :class="{'item--odd': index % 2}">
      <div class="heading">
        <div class="headline">{{item.title}}</div>
        <div class="caption">{{item.caption}}</div>
      </div>
      <div v-if="item.img" class="image">
        <app-image :src="item.img" :alt="item.title"/>
      </div>
      <div class="text" v-html="item.text"></div>

      <div class="caption">{{item.author}} - {{item.date}}</div>
    </div>
  </div>
</template>

<script>
  import fetchAndLoad from '../mixins/fetchAndLoad';

  export default {
    name: "news",
    mixins: [fetchAndLoad],
    data() {
      return {
        news: []
      }
    },
    created() {
      this.$fetch('news').then(news => Object.assign(this.$data, {news}))
    }
  }
</script>

<style lang="scss" scoped>
  .news {
    .item + .item {
      margin-top: 128px;
    }

    .heading {
      margin-bottom: 32px;

      .caption {
        text-align: center;
      }
    }

    .text {
      text-indent: 16px;
      margin-bottom: 32px;
    }

    .image {
      width: 280px;
      height: 190px;
      float: left;
      margin: 0 16px 16px 0;
    }

    .item--odd {
      .image {
        float: right;
        margin: 0 0 16px 16px;
      }
    }


  }
</style>
