<template>
  <div>
    <el-select clearable placeholder="请选择省份" v-model="province">
      <el-option
        v-for="item in areas"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      >
      </el-option>
    </el-select>
    <el-select clearable :disabled="!province" placeholder="请选择城市" v-model="city">
      <el-option
        v-for="item in selectCity"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      >
      </el-option>
    </el-select>
    <el-select clearable :disabled="!province || !city" placeholder="请选择区域" v-model="area">
      <el-option
        v-for="item in selectArea"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import allAreas from '../lib/pca-code.json';

export interface AreaItem {
  name: string,
  code: string,
  children?: AreaItem[]
}

export interface Data {
  name: string,
  code: string
}

let province = ref<string>('');  // 省份
let city = ref<string>('');      // 城市
let area = ref<string>('');      // 区域
let areas = ref(allAreas);       // 省市区列表获取
let selectCity = ref<AreaItem[]>([]);   // 城市下拉框的所有值
let selectArea = ref<AreaItem[]>([]);   // 区域下拉框的所有值

// 分发时间给父组件
let emits = defineEmits(['change']);

// 监听省份下拉框变化
watch(() => province.value, val => {
  if (val)  {
    let cities = areas.value.find(item => item.code === province.value)!.children!;
    selectCity.value = cities;
  }
  city.value = '';
  area.value = '';
})

// 监听城市下拉框变化
watch(() => city.value, val => {
  if (val)  {
    let area = selectCity.value.find(item => item.code === city.value)!.children!;
    selectArea.value = area;
  }
  area.value = '';
})

// 监听区域下拉框变化
watch(() => area.value, val => {
  if (val) {
    let provinceData: Data = {
      code: province.value,
      name: province.value && allAreas.find(item => item.code === province.value)!.name
    };
    let cityData: Data = {
      code: city.value,
      name: city.value && selectCity.value.find(item => item.code === city.value)!.name
    };
    let areaData: Data = {
      code: val,
      name: val && selectArea.value.find(item => item.code === val)!.name
    };
    emits('change', {
      province: provinceData,
      city: cityData,
      area: areaData
    })
  }
})
</script>

<style lang="scss" scoped>

</style>