<template>
  <div>
    <div class="headline">
      Центр позашкільної роботи
    </div>
    <app-person v-for="person in persons" :person="person" :key="person.order"/>
  </div>
</template>

<script>
    import fetchAndLoad from '../../mixins/fetchAndLoad';
    import AppPerson from '../../components/AppPerson';

    export default {
        name: "cpo",
        mixins: [fetchAndLoad],
        components: {AppPerson},
        data() {
            return {
                persons: []
            }
        },
        created() {
            this.$fetch('structureCpo').then(persons => Object.assign(this.$data, {persons}))
        }
    }
</script>
