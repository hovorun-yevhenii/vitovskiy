<template>
  <div>
    <div class="headline">
      Комунальна установа "Вітовський методичний кабінет"
    </div>
    <div class="employee" v-for="employee in employees" :key="employee.order">
      <app-image class="photo" :src="employee.photo" :aly="employee.name"/>
      <div class="name">
        <div class="headline small">{{employee.name}}</div>
        <div class="text">{{employee.position}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import fetchAndLoad from '../../mixins/fetchAndLoad';

  export default {
    name: "ku-vmk",
    mixins: [fetchAndLoad],
    data() {
      return {
        employees: []
      }
    },
    created() {
      this.$fetch('structureVMK').then(employees => Object.assign(this.$data, {employees}))
    }
  }
</script>

<style lang="scss" scoped>
  .employee {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    min-height: 312px;
    margin: 64px 0;

    .photo {
      width: 280px;
      margin: 0 32px 32px 0;
      border-radius: 16px 64px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    }

    .headline.small {
      text-align: left;
    }
  }
</style>
