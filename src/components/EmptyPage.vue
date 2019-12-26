<template>
  <div class="wrapper">
    <img class="image" src="https://lh3.google.com/u/2/d/1I0G8INPZS7clk8nBXfPCOpJ55bXzsHB3=w1853-h900-iv1" alt="">

    <div class="headline small">
      На цю сторінку контент ще не завантажено
    </div>
  </div>
</template>

<script>
  export default {
    name: "EmptyPage"
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: .8;

    .image {
      width: 300px;
      margin: 64px 0;
      animation: image 2s ease-in-out alternate infinite;
    }

    .headline {
      width: 300px;
    }
  }

  @keyframes image {
    from {
      transform: translateY(-4%);
    }
    to {
      transform: translateY(4%);
    }
  }
</style>
