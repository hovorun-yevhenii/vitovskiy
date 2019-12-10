<template>
  <div>
    <p class="headline"></p>

    <div class="docs">
      <a class="doc" href="https://drive.google.com/file/d/1ITT2Sk9yba47olIIam7gfPVOnoXDTGaF/view" target="_blank">
        <span class="doc__title headline">Про конкурс на посаду педагогічних працівників ІРЦ</span>
        <span class="doc__icon"></span>
      </a>
      <a class="doc" href="https://drive.google.com/file/d/1aMTs0uR79XQOQ0lgJwU7QoAjXPawMnJl/view" target="_blank">
        <span class="doc__title headline">Про конкурс на посаду практичного психолога комунальної установи «Інклюзивно – ресурсний центр» Вітовської районної ради</span>
        <span class="doc__icon"></span>
      </a>
    </div>
  </div>
  <!--  -->
</template>

<script>
  export default {
    name: "announce"
  }
</script>

<style lang="scss" scoped>
  .docs {
    max-width: 600px;
    margin: 0 auto;
  }

  .doc {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    color: inherit;

    & + & {
      margin-top: 32px;
      padding-top: 32px;
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
      width: 64px;
      height: 64px;
      flex-shrink: 0;
      transition: .2s;
      opacity: .7;
      background: url(https://lh3.google.com/u/1/d/1bEWbhyw347p0MVt19Sf_B7mC9YNl-1b3=w724-h921-iv1) center/cover;
    }
  }
</style>
