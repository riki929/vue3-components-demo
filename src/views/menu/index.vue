<template>
  <div style="width: 200px;">
    <zl-menu :data="data1"></zl-menu>
  </div>
</template>

<script lang="ts" setup>
let data1 = [
  {
    name: '导航1',
    index: '1',
    icon: 'document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'document'
  },
  {
    name: '导航3',
    index: '3',
    icon: 'document',
    children: [
      {
        name: '导航3-1',
        index: '3-1',
        icon: 'document'
      },
      {
        name: '导航3-2',
        index: '3-2',
        icon: 'document'
      }
    ]
  },
]
</script>

<style lang="scss" scoped>

</style>