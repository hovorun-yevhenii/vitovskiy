<template>
  <div>
    <div class="headline">
      Комунальна установа "Вітовський методичний кабінет"
    </div>
    <app-person v-for="person in persons" :person="person" :key="person.order"/>
  </div>
</template>

<script>
  import fetchAndLoad from '../../mixins/fetchAndLoad';
  import AppPerson from '../../components/AppPerson';

  export default {
    name: "kuVmk",
    mixins: [fetchAndLoad],
    components: {AppPerson},
    data() {
      return {
        persons: []
      }
    },
    created() {
      this.$fetch('structureVMK').then(persons => Object.assign(this.$data, {persons}))
    }
  }
</script>

<style lang="scss" scoped>
</style>
