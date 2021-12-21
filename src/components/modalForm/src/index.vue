<template>
  <div :class="{'choose-icon-dialog-body-height': isScroll}">
    <el-dialog
      v-model="dialogVisible"
      v-bind="$attrs"
    >
      <template #default>
        <zl-form
          label-width="70px"
          ref="form"
          :options="options"
          @on-preview="onPreview"
          @on-remove="onRemove"
          @on-success="onSuccess"
          @on-error="onError"
          @on-progress="onProgress"
          @on-change="onChange"
          @before-remove="beforeRemove"
          @before-upload="beforeUpload"
          @on-exceed="onExceed"
        >
          <template #uploadArea>
            <slot name="uploadArea"></slot>
          </template>
          <template #uploadTip>
            <slot name="uploadTip"></slot>
          </template>
        </zl-form>
      </template>
      <template #footer>
        <slot name="footer" :form="form"></slot>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { PropType, ref, watch } from 'vue';
import { FormInstance, FormOptions } from '../../form/src/types/types';

let props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  },
  // 只在屏幕区域内滚动
  isScroll: {
    type: Boolean,
    default: false
  },
  // 以下处理上传事件
  onPreview: {
    type: Function
  },
  onRemove: {
    type: Function
  },
  onSuccess: {
    type: Function
  },
  onError: {
    type: Function
  },
  onProgress: {
    type: Function
  },
  onChange: {
    type: Function
  },
  beforeRemove: {
    type: Function
  },
  beforeUpload: {
    type: Function
  },
  onExceed: {
    type: Function
  },
})

let emits = defineEmits(['update:visible']);

// 表单实例
let form = ref<FormInstance | null>();

// 弹出框的显示与隐藏
let dialogVisible = ref<boolean>(props.visible);

watch(() => props.visible, val => {
  dialogVisible.value = val;
})

watch(() => dialogVisible.value, val => {
  emits('update:visible', val);
})
</script>

<style lang="scss" scoped>

</style>