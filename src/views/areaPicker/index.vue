<template>
  <zl-area-picker @change="changeArea"></zl-area-picker>
</template>

<script lang="ts" setup>
let changeArea = (val: any) => {
  console.log(val);
}
</script>

<style lang="scss" scoped>

</style>