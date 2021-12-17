<template>
  <div>
    <div class="flex">
      <trend text="营业额" type="down" downIcon="SortDown"></trend>
      <trend text="销售额" upIcon="SortUp"></trend>
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