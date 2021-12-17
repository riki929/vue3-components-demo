<template>
  <div>
    <div class="flex">
      <zl-trend text="营业额" type="down" downIcon="SortDown"></zl-trend>
      <zl-trend text="销售额" upIcon="SortUp"></zl-trend>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  div {
    margin-right: 10px;
  }
}
</style>