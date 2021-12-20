<template>
  <zl-progress :percentage="60" isAnimation></zl-progress>
  <br />
  <zl-progress
    :percentage="80"
    isAnimation
    :text-inside="true"
    :stroke-width="20"
    status="exception"
  >
  </zl-progress>
  <br />
  <zl-progress
    :percentage="80"
    isAnimation
    type="circle"
  >
  </zl-progress>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>

</style>