<template>
    <div class="footer">
      <div class="row">
        <div class="text">Відділ освіти, молоді та спорту Вітовської районної державної адміністрації <span> {{year}}</span></div>
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
    padding: 16px 0;
    background-color: #36a9e2;
    color: #f5f5f5;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.4);
  }

  .text {
    padding: 0 8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
