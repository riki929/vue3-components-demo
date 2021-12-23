<template>
  <zl-time-picker
    @startChange="startChange"
    @endChange="endChange"  
  >
  </zl-time-picker>
  <!-- <zl-time-picker
    :startOptions = "startOptions"
    @startChange="startChange"
    @endChange="endChange"  
  >
  </zl-time-picker> -->
  <br />
  <zl-date-picker
    @startChange="dateStartChange"
    @endChange="dateEndChange"
  >
  </zl-date-picker>
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