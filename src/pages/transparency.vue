<template>
  <div class="docs">
    <a class="doc" v-for="(doc, index) in docs" :href="doc.href" target="_blank">
      <span class="doc__index">{{index + 1}}.</span>
      <span class="doc__title">{{doc.title}}</span>
      <span class="doc__icon"></span>
    </a>
  </div>
</template>

<script>
  export default {
    name: "public",
    data() {
      return {
        docs: []
      }
    },
    created() {
      this.$fetch('publicInfo')
        .then(docs => Object.assign(this.$data, {docs}))
    }
  }
</script>


<style scoped lang="scss">
  .docs {
    max-width: 600px;
    margin: 0 auto;
  }

  .doc {
    display: flex;
    align-items: center;
    padding: 8px;
    color: inherit;
    & + & {
      border-top: 1px solid #ccc;
    }
    &:hover {
      .doc__icon {
        opacity: 1;
      }
    }
    &__index {
      margin-right: 16px;
    }
    &__title {
      margin-right: 16px;
    }
    &__icon {
      display: block;
      margin-left: auto;
      width: 32px;
      height: 32px;
      flex-shrink: 0;
      transition: .2s;
      opacity: .7;
      background: url(https://lh3.google.com/u/1/d/1bEWbhyw347p0MVt19Sf_B7mC9YNl-1b3=w724-h921-iv1) center/cover;
    }
  }
</style>
