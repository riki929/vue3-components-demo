<template>
  <zl-menu
    :collapse="collapse"
    :data="data"
    router
    :defaultActive='$route.path'
  >
  </zl-menu>
</template>

<script lang="ts" setup>
let props = defineProps<{
  collapse: boolean;
}>();

let data = [
  {
    icon: 'HomeFilled',
    name: '首页',
    index: '/'
  },
  {
    icon: 'PictureRounded',
    name: '图标选择器',
    index: '/chooseIcon'
  },
  {
    icon: 'Location',
    name: '省市区选择',
    index: '/chooseArea'
  },
  {
    icon: 'DataLine',
    name: '趋势标记',
    index: '/trend'
  },
  {
    icon: 'AlarmClock',
    name: '时间选择',
    index: '/chooseTime'
  },
  {
    icon: 'Notification',
    name: '通知菜单',
    index: '/notification'
  },
  {
    icon: 'AddLocation',
    name: '城市选择',
    index: '/chooseCity'
  },
  {
    icon: 'TurnOff',
    name: '进度条',
    index: '/progress'
  },
  {
    icon: 'Calendar',
    name: '日历',
    index: '/calendar'
  },
  {
    icon: 'Menu',
    name: '导航菜单',
    index: '/menu'
  },
  {
    icon: 'List',
    name: '表单',
    index: '/form'
  },
  {
    icon: 'Grid',
    name: '表格',
    index: '/table'
  },
]
</script>

<style lang="scss" scoped>

</style>
