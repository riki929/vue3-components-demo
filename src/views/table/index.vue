<template>
  <zl-table
    :data="tableData"
    :options="options"
    elementLoadingText="加载中..."
    :elementLoadingSvg='svg'
    elementLoadingSvgViewBox="-10, -10, 50, 50"
    isEditRow    
    pagination
    stripe
    border
    :total="total"
    :currentPage="current"
    :pageSize="pageSize"
    paginationAlign="center"
    v-model:editRowIndex="editRowIndex"
    @confirm="confirm"
    @size-change="sizeChange"
    @current-change="currentChange"
  >
    <template #date="{ scope }">
      <el-icon-timer></el-icon-timer>
      {{ scope.row.date }}
    </template>
    <template #name="{ scope }">
      <el-popover effect="light" trigger="hover" placement="top">
        <template #default>
          <div style="padding: 8px;">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
          </div>
        </template>
        <template #reference>
          <div class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </template>
      </el-popover>
    </template>
    <template #action="{ scope }">
      <el-button size="mini" type="primary" @click="edit(scope)"
        >编辑</el-button>
      <el-button size="mini" type="danger">删除</el-button>
    </template>
    <template #editRow>
      <el-button size="mini" type="primary">确认</el-button>
      <el-button size="mini" type="danger">取消</el-button>
    </template>
    <!-- <template #editCell="{ scope }">
      <div style="display: flex">
        <el-button size="mini" type="primary">确认</el-button>
        <el-button size="mini">取消</el-button>
      </div>
    </template> -->
  </zl-table>
</template>

<script lang="ts" setup>
import { TableOptions } from "../../components/table/src/types";
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface TabelData {
  date: string,
  name: string,
  address: string
}

// 表格数据
let tableData = ref<TabelData[]>([]);
let editRowIndex = ref<string>('');

let current = ref<number>(1);
let pageSize = ref<number>(10);
let total = ref<number>(0);

let svg = `
  <path class="path" d="
    M 30 15
    L 28 17
    M 25.61 25.61
    A 15 15, 0, 0, 1, 15 30
    A 15 15, 0, 1, 1, 27.99 7.5
    L 15 15
  " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
`

// 表格配置
let options: TableOptions[] = [
  {
    label: "日期",
    prop: "date",
    align: "center",
    width: 240,
    slot: "date",
    editable: true
  },
  {
    label: "姓名",
    prop: "name",
    align: "center",
    width: 240,
    slot: "name",
  },
  {
    label: "地址",
    prop: "address",
    align: "center",
    editable: true
  },
  {
    label: "操作",
    prop: '',
    align: "center",
    action: true,
  },
];

// 点击编辑图标
let edit = (scope: any) => {
  console.log('edit=>', scope);
  editRowIndex.value = 'edit';
};

// 点击勾√
let confirm = (scope: any) => {
  console.log('confirm=>', scope);
}

// 点击叉×
let cancel = (scope: any) => {
  console.log('cancel=>', scope);
}

let getData = () => {
  axios.post('/api/list', {
    current: current.value,
    pageSize: pageSize.value
  }).then((res: any) => {
    console.log(res);
    if (res.data.code === '200') {
      tableData.value = res.data.data.rows;
      total.value = res.data.data.total;
    }
  })
}

let sizeChange = (val: number) => {
  pageSize.value = val;
  getData();
}

let currentChange = (val: number) => {
  current.value = val;
  getData();
}

onMounted(() => {
  getData();
})
</script>

<style lang="scss" scoped>
svg {
  width: 1em;
  height: 1em;
}
</style>
