<template>
  <div class="footer">
    <div class="row">
      <a class="link" href="https://www.facebook.com/people/Osvita-Vitovska/100014420987872" target="_blank">
        <app-image src="https://lh3.google.com/u/2/d/1nZ2CSz_ffQmoC_EfZwKwkRMbXRBSqFlw=w1285-h976-iv1"/>
        <span class="text">Відділ освіти, молоді та спорту Вітовської районної державної адміністрації</span>
      </a>

      <div>{{year}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AppFooter",
    computed: {
      year() {
        const date = new Date();
        return date.getFullYear()
      }
    }
  }
</script>

<style scoped lang="scss">
  .footer {
    padding: 16px 8px;
    background-color: #36a9e2;
    color: #f5f5f5;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.4);
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .link {
    display: flex;
    align-items: center;
    color: inherit;
    img {
      margin-right: 8px;
      width: 32px;
      height: 32px;
    }
  }

  .text {
    padding: 0 8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
