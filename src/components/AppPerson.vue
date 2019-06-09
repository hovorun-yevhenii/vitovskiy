<template>
  <div class="person">
    <app-image class="photo" :src="person['photo']" :aly="person.name" :styled="true"/>
    <div class="about">
      <div class="headline small">{{person.name}}</div>
      <div class="text">{{person.position}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AppPerson",
    props: ["person"]
  }
</script>

<style lang="scss" scoped>
  .person {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    min-height: 312px;
    margin: 64px 0;

    .photo {
      width: 280px;
      margin: 0 32px 32px 0;
    }

    .about {
      flex-grow: 1;
    }

    .headline.small {
      text-align: left;
    }

    .text {
      max-width: 350px;
    }
  }
</style>
