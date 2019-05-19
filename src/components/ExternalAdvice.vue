<template>
  <div class="advice">
    <div class="link" v-for="link in links">
      <a :href="link.href" :style="'background-image: src(../assets/' + link.img + '.png)'"></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ExternalAdvice",
    data() {
      return {
        links: [
          {
            href: 'http://oblosvita.mk.gov.ua/ua/home/',
            img: 'деп_осв_наук_мик_ода'
          },
          {
            href: 'http://vitovska.mk.gov.ua/ua/home/',
            img: 'віт_рай_рада_віт_рда'
          },
          {
            href: 'http://www.moippo.mk.ua/',
            img: 'моіппо'
          },
          {
            href: 'http://nus.org.ua/',
            img: 'нуш'
          },
          {
            href: 'http://khersontest.org.ua/',
            img: 'херсон'
          },
          {
            href: 'https://mon.gov.ua/ua',
            img: 'мін_осв'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
.advice {
  display: flex;
}
  .link {
    display: block;
    width: 100px;
    height: 100px;
  }
</style>
