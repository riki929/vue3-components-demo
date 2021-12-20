<template>
  <div class="list-tabs-item">
    <el-tabs>
      <el-tab-pane
        v-for="(item, index) in list"
        :key="index"
        :label="item.title"
      >
      <el-scrollbar max-height="220px">
        <div
          class="container"
          v-for="(subItem, subIndex) in item.content"
          :key="subIndex"
          @click="clickItem(subItem, subIndex)"
        >
          <div class="avatar" v-if="subItem.avatar">
            <el-avatar size="small" :src="subItem.avatar"></el-avatar>
          </div>
          <div class="content">
            <div class="title" v-if="subItem.title">
              <div>{{ subItem.title }}</div>
              <el-tag v-if="subItem.tag" size="mini" :type="subItem.tagType">{{ subItem.tag }}</el-tag>
            </div>
            <div class="text-grey" v-if="subItem.desc">{{ subItem.desc }}</div>
            <div class="text-grey" v-if="subItem.time">{{ subItem.time }}</div>
          </div>
        </div>
      </el-scrollbar>
      <div class="actions">
        <div
          class="a-item"
          :class="{'border': index !== actions.length}"
          v-for="(action, index) in actions"
          :key="index"
          @click="clickAction(action, index)"
        >
          <div class="a-icon" v-if="action.icon">
            <component :is="`el-icon-${camelToKebab(action.icon)}`"></component>
          </div>
          <div class="a-text">{{ action.text }}</div>
        </div>
      </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { ListOptions, ActionsOptions, ListItem } from './types';
import { camelToKebab } from '../../../utils/index';

let props = defineProps({
  // 列表的内容
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true
  },
  // 操作的内容
  actions: {
    type: Array as PropType<ActionsOptions[]>,
    default: () => []
  }
})

let emits = defineEmits(['clickItem', 'clickAction']);

let clickItem = (item: ListItem, index: number) => {
  emits('clickItem', {item, index});
}

let clickAction = (action: ActionsOptions, index: number) => {
  emits('clickAction', {action, index});
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  &:hover {
    background: #e6f6ff;
  }
  .avatar {
    flex: 1;
  }
  .content {
    flex: 3;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .text-grey {
      font-size: 12px;
      color: #999;
      margin-top: 4px;
    }
  }
}

.actions {
  height: 50px;
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
  cursor: pointer;
  .a-item {
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    .a-icon {
      margin-right: 4px;
      position: relative;
      top: 2px;
    }
  }
}

.border {
  border-right: 1px solid #eee;
}

svg {
  width: 1em;
  height: 1em;
}
</style>