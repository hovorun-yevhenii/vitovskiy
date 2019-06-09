<template>
  <div>
    <div class="headline">
      Відділ освіти, молоді та спорту Вітовської районної державної адміністрації
    </div>
    <app-person v-for="person in persons" :person="person" :key="person.order"/>
  </div>
</template>

<script>
  import fetchAndLoad from '../../mixins/fetchAndLoad';
  import AppPerson from '../../components/AppPerson';

  export default {
    name: "department",
    mixins: [fetchAndLoad],
    components: {AppPerson},
    data() {
      return {
        persons: []
      }
    },
    created() {
      this.$fetch('structureDepartment').then(persons => Object.assign(this.$data, {persons}))
    }
  }
</script>

<style lang="scss" scoped>

</style>
