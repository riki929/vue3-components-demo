<template>
  <el-button @click="handleClick" type='primary'>
    <slot></slot>
  </el-button>
  <div class="choose-icon-dialog-body-height">
    <el-dialog :title="title" v-model="dialogVisible">
      <div class="container">
        <div 
          class="item"
          v-for="(item, index) in Object.keys(ElIcons)"
          :key="index"
          @click="clickItem(item)"
        >
          <div>
            <component :is="`el-icon-${camelToKebab(item)}`"></component>
          </div>
          <div class="icon">{{ item }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import * as ElIcons from '@element-plus/icons-vue'
import { watch, ref } from 'vue'
import { useCopy } from '../../hooks/useCopy'
import { camelToKebab } from '../../utils/index'
let props = defineProps<{
  // 弹出框的标题
  title: string,
  // 控制弹出框的显示隐藏
  visible: boolean
}>()
let emits = defineEmits(['update:visible'])
// 拷贝一份父组件传递过来的 visible
let dialogVisible = ref<boolean>(props.visible)

// 点击按钮显示弹出框
let handleClick = () => {
  // 需要修改父组件的数据
  emits('update:visible', !props.visible)
}

// 点击图标复制
let clickItem = (item: string) => {
  let text = `<el-icon-${camelToKebab(item)} />`;
  useCopy(text);
  dialogVisible.value = false;
}

// 监听 visible 的变化
watch(() => props.visible, val=> {
  dialogVisible.value = val
})

// 监听 dialogVisible 的变化
watch(() => dialogVisible.value, val=> {
  emits('update:visible', val)
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .item {
    margin: 10px 0;
    width: 25%;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .icon {
      flex: 1;
    }
  }
}

svg {
  width: 2em;
  height: 2em;
}
</style>