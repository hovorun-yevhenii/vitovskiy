<template>
<div>
  <div class="headline">Радимо відвідати</div>
  <div class="cards">
    <div v-for="link in links" class="card">
      <a :href="link.href" target="_blank">
        <div class="image">
          <app-image :src="link.img" :alt="link.title" />
        </div>
        <p>{{link.title}}</p>
      </a>
    </div>
  </div>
</div>
</template>

<script>
  import fetchAndLoad from '../mixins/fetchAndLoad';

  export default {
    name: "ExternalAdvice",
    mixins: [fetchAndLoad],
    data() {
      return {
        links: []
      }
    },
    created() {
      this.$fetch('adviseToVisit')
        .then(links => Object.assign(this.$data, { links }))
    }
  }
</script>

<style scoped lang="scss">
  .cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 16px;
    font-weight: 300;
    font-size: 12px;
  }

  .card {
    width: 141px;
    margin: 8px;
    line-height: 1.3;
    text-align: center;
    cursor: pointer;
    transition: .2s;
    &:hover {
      color: #111;
      img {
        -webkit-filter: drop-shadow(1px 1px 3px rgba(0,0,0,.3));
                filter: drop-shadow(1px 1px 3px rgba(0,0,0,.3));
      }
    }

    .image {
      margin-bottom: 16px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      color: inherit;
    }
  }
</style>
