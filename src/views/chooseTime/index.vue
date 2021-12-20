<template>
  <zl-choose-time
    @startChange="startChange"
    @endChange="endChange"  
  >
  </zl-choose-time>
  <!-- <zl-choose-time
    :startOptions = "startOptions"
    @startChange="startChange"
    @endChange="endChange"  
  >
  </zl-choose-time> -->
  <br />
  <zl-choose-date
    @startChange="dateStartChange"
    @endChange="dateEndChange"
  >
  </zl-choose-date>
</template>

<script lang="ts" setup>
interface endValue {
  startTime: string,
  endTime: string
}
interface dateEndValue {
  startDate: Date,
  endDate: Date
}
let startChange = (val: string) => {
  console.log(val);
}
let endChange = (val: endValue) => {
  console.log(val);
}
let dateStartChange = (val: Date) => {
  console.log(val);
}
let dateEndChange =(val: dateEndValue) => {
  console.log(val);
}
// let startOptions = {
//   size: 'mini',
//   clearable: false
// }
</script>

<style lang="scss" scoped>

</style>