<template>
  <zl-choose-area @change="changeArea"></zl-choose-area>
</template>

<script lang="ts" setup>
let changeArea = (val: any) => {
  console.log(val);
}
</script>

<style lang="scss" scoped>

</style>