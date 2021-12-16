<template>
  <choose-area @change="changeArea"></choose-area>
</template>

<script lang="ts" setup>
import ChooseArea from "../../components/chooseArea/src/index.vue";

let changeArea = (val: any) => {
  console.log(val);
}
</script>

<style lang="scss" scoped>

</style>