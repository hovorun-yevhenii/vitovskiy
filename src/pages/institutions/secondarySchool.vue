<template>
  <div class="docs">
    <a class="doc" v-for="(doc, index) in docs" :href="doc.href" target="_blank">
      <span class="doc__title">{{doc.title}}</span>
      <span class="doc__icon" :class="[doc['extension']]"></span>
    </a>
  </div>
</template>

<script>
    import fetchAndLoad from '../../mixins/fetchAndLoad';

    export default {
        name: "secondarySchool",
        mixins: [fetchAndLoad],
        data() {
            return {
                docs: []
            }
        },
        created() {
            this.$fetch('secondarySchool').then(docs => Object.assign(this.$data, {docs}));
        }
    }
</script>

<style lang="scss" scoped>
  .docs {
    max-width: 600px;
    margin: 64px auto;
  }

  .doc {
    display: flex;
    align-items: center;
    padding: 8px;
    color: inherit;
    cursor: pointer;
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
      background: url(https://lh3.google.com/u/1/d/1bEWbhyw347p0MVt19Sf_B7mC9YNl-1b3=w724-h921-iv1) center/cover; /*pdf*/
      &.doc {
        background: url(https://lh3.google.com/u/2/d/1031U-V6pBx8O8nDchhxYLImqmo70L3dU=w1920-h888-iv1) center/cover; /*doc*/
      }
      &.excel {
        background: url(https://lh3.google.com/u/2/d/1QzR1aWmDKEeBSwpENce3kuf-7kEQQMsz=w711-h872-iv1) center/cover; /*excel*/
      }
      &.pdf {
        background: url(https://lh3.google.com/u/1/d/1bEWbhyw347p0MVt19Sf_B7mC9YNl-1b3=w724-h921-iv1) center/cover; /*pdf*/
      }
    }
  }
</style>
