<template>
  <div class="home">
    <div class="greeting">
      <div class="headline">Раді Вас вітати на офіційному сайті відділу освіти, молоді та спорту Вітовської районної
        державної адміністрації!
      </div>
      <div class="text">Даний сайт створено з метою освітлення діяльності та головних новин у сфері освіти Вітовського
        краю. Тут ви зможете отримати методичну допомогу, інформацію про заходи щодо реалізації Концепції "Нова
        українська
        школа", про сучасні освітні технології та їх впровадження в закладах освіти, познайомитися з досягненнями учнів
        та
        педагогічних працівників Вітовщини. Ми завжди готові до співпраці та спілкування!
      </div>
      <div class="text caption">З повагою, начальник відділу освіти <span class="graph">Р. КРАЙНІК</span></div>
    </div>
    <external-advice/>
  </div>
</template>

<script>
  import ExternalAdvice from '../components/ExternalAdvice'

  export default {
    name: "home",
    components: {
      ExternalAdvice
    }
  }
</script>

<style scoped lang="scss">
  .greeting {
    margin-bottom: 128px;
  }

  .text {
    text-indent: 32px;
    margin-bottom: 16px;
  }

  .caption {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
