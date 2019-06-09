<template>
  <div>
    <div class="headline">
      Комунальна установа "Вітовський районний центр фінансово-господарського обслуговування закладів та установ освіти"
    </div>
    <app-person v-for="person in persons" :person="person" :key="person.order"/>
  </div>
</template>

<script>
  import fetchAndLoad from '../../mixins/fetchAndLoad';
  import AppPerson from '../../components/AppPerson';

  export default {
    name: "kuVrc",
    mixins: [fetchAndLoad],
    components: {AppPerson},
    data() {
      return {
        persons: []
      }
    },
    created() {
      this.$fetch('structureVRC').then(persons => Object.assign(this.$data, {persons}))
    }
  }
</script>

<style lang="scss" scoped>
</style>
