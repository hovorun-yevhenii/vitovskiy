<template>
  <div>
    <p class="headline small">4.12.2019 р. у відділі освіти, молоді та спорту Вітовської РДА відбувся І етап
      Всеукраїнського конкурсу-захисту науково-дослідницьких робіт учнів-членів МАН.</p>
    <ul>
      <li class="text">
        У секції українська мова перемогла <span class="caption">Згеря Діна</span> (М-Погорілівська ЗОШ І-ІІІ ст.).
      </li>
      <li class="text">Переможцями у секції історія України стали: <span class="caption">Тіллаєв Хікматулла</span> (Білозірська ЗОШ І-ІІІ ст.) та
        <span class="caption">Денисенко Лоліта</span> (М-Погорілівська ЗОШ І-ІІІ ст.).</li>
      <li class="text">
        У секції англійська мова переможницею стала <span class="caption">Сиванич Софія</span> (Білозірська ЗОШ І-ІІІ ст.).
      </li>
    </ul>

    <div class="docs">
      <a class="doc" v-for="(doc, index) in docs" :href="doc.href" target="_blank">
        <span class="doc__index">{{index + 1}}.</span>
        <span class="doc__title">{{doc.title}}</span>
        <span class="doc__icon"></span>
      </a>
    </div>
  </div>
</template>

<script>
  import fetchAndLoad from '../../mixins/fetchAndLoad';

  export default {
    name: "man",
    mixins: [fetchAndLoad],
    data() {
      return {
        docs: []
      }
    },
    created() {
      this.$fetch('man')
        .then(docs => Object.assign(this.$data, {docs}))
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
     background: url(https://lh3.google.com/u/2/d/1031U-V6pBx8O8nDchhxYLImqmo70L3dU=w1853-h949-iv1) center/cover;
   }
  }
</style>
