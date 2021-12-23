<template>
  <el-popover
    popper-class="notification-popper-class"
    placement="bottom"
    :width="300"
    trigger="click"
  >
    <template #default>
      <slot></slot>
    </template>
    <template #reference>
      <el-badge :value="value" :max="max" :is-dot="isDot">
        <component class="noti-icon" :is="`el-icon-${camelToKebab(icon)}`"></component>
      </el-badge>
    </template>
  </el-popover>
</template>

<script lang="ts" setup>
import { camelToKebab } from '../../utils/index';

let props = defineProps({
  // 显示的图标
  icon: {
    type: String,
    default: 'Bell'
  },
  // 通知数量
  value: {
    type: [String, Number],
    default: ''
  },
  // 最大值
  max: {
    type: Number
  },
  // 是否显示小圆点
  isDot: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.noti-icon {
  cursor: pointer;
}

svg {
  width: 1.25em;
  height: 1.25em;
}
</style>