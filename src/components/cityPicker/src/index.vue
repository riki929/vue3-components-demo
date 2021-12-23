<template>
  <el-popover
    v-model:visible="visible"
    placement="bottom-start"
    :width="400"
    trigger="click"
  >
    <template #reference>
      <div class="result">
        <div>{{ result }}</div>
        <div>
          <el-icon-arrowdown :class="{ rotate: visible }"></el-icon-arrowdown>
        </div>
      </div>
    </template>
    <div class="container">
      <el-row>
        <el-col :span="10">
          <el-radio-group v-model="radioValue" size="mini">
            <el-radio-button label="按城市"></el-radio-button>
            <el-radio-button label="按省份"></el-radio-button>
          </el-radio-group>
        </el-col>
        <el-col :span="14">
          <el-select
            v-model="selectValue"
            filterable
            :filter-method="filterMethod"
            placeholder="请搜索城市"
            size="mini"
            @change="changeSelect"
          >
            <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <template v-if="radioValue === '按城市'">
        <div class="city">
          <!-- <div v-for="(value, key) in cities">{{ key }}</div> -->
          <div
            class="city-item"
            v-for="(item, index) in Object.keys(cities)"
            :key="index"
            @click="clickCharAt(item)"
          >
            {{ item }}
          </div>
        </div>
        <el-scrollbar max-height="300px">
          <template v-for="(value, key) in cities" :key="key">
            <el-row style="margin-bottom: 10px" :id="key">
              <el-col :span="2">{{ key }}:</el-col>
              <el-col :span="22" class="city-name">
                <div
                  class="city-name-item"
                  v-for="(item, index) in value"
                  :key="item.id"
                  @click="clickItem(item)"
                >
                  <div>{{ item.name }}</div>
                </div>
              </el-col>
            </el-row>
          </template>
        </el-scrollbar>
      </template>
      <template v-else>
        <div class="province">
          <div
            class="province-item"
            v-for="(item, index) in Object.keys(province)"
            :key="index"
            @click="clickCharAt(item)"
          >
            {{ item }}
          </div>
        </div>
        <el-scrollbar max-height="300px">
          <template
            v-for="(item, index) in Object.values(province)"
            :key="index"
          >
            <template
              v-for="(subItem, subIndex) in item"
              :key="subIndex"
            >
              <el-row style="margin-bottom: 10px" :id="subItem.id">
                <el-col :span="3">{{ subItem.name }}:</el-col>
                <el-col :span="21" class="province-name">
                  <div
                    class="province-name-item"
                    v-for="(t, i) in subItem.data"
                    :key="i"
                    @click="clickProvince(t)"
                  >
                    <div>{{ t }}</div>
                  </div>
                </el-col>
              </el-row>
            </template>
          </template>
        </el-scrollbar>
      </template>
    </div>
  </el-popover>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import city from "../lib/city";
import province from "../lib/province.json";
import { City, Province } from "./type";

let emits = defineEmits(["changeCity", "changeProvince"]);

let result = ref<string>("请选择"); // 最终选择的结果
let visible = ref<boolean>(false); // 控制弹出层的显示
let radioValue = ref<string>("按城市"); // 单选框的值
let selectValue = ref<string>(""); // 下拉框的值
let options = ref<City[]>([]); // 下拉框显示城市的数据
let cities = ref(city.cities); // 所有的城市数据
let provinces = ref(province); // 按省份的城市数据
let searchValue = ref<string>(''); // 搜索框的值
let allCity = ref<City[]>([]); // 所有的城市数据

// 点击字母区域
let clickCharAt = (item: string) => {
  let el = document.getElementById(item);
  if (el) {
    el.scrollIntoView();
  }
};

// 点击每个城市
let clickItem = (item: City) => {
  result.value = item.name;
  visible.value = false;
  emits("changeCity", item);
};

// 点击城市（按省份）
let clickProvince = (item: string) => {
  result.value = item;
  visible.value = false;
  emits('changeProvince', item);
}

// 自定义搜索过滤
let filterMethod = (val: string) => {
  searchValue.value = val;
  let values = Object.values(cities.value).flat(2);
  if (!val) {
    options.value = values;
  } else {
    if (radioValue.value === '按城市') {
      // 中文和拼音一起过滤
      options.value = values.filter(item => {
        return item.name.includes(val) || item.spell.includes(val);
      })
    } else {
      // 中文过滤
      options.value = values.filter(item => {
        return item.name.includes(val);
      })
    }
  }
}

// 下拉框选择
let changeSelect = (val: number) => {
  let city = allCity.value.find(item => item.id === val)!;
  result.value = city.name;
  if (radioValue.value === '按城市') {
    emits('changeCity', city);
  } else {
    emits('changeProvince', city.name);
  }
}

onMounted(() => {
  // 获取下拉框的城市数据
  let values = Object.values(cities.value).flat(2);
  allCity.value = values;
  options.value = values;
})
</script>

<style lang="scss" scoped>
.result {
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
}
.rotate {
  transform: rotate(180deg);
}
svg {
  width: 1em;
  height: 1em;
  position: relative;
  top: 2px;
  margin-left: 4px;
  transition: all 0.25s linear;
}
.container {
  padding: 6px;
}
.city,
.province {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;
  .city-item,
  .province-item {
    padding: 2px 6px;
    margin-right: 8px;
    margin-bottom: 8px;
    border: 1px solid #eee;
    font-size: 10px;
    cursor: pointer;
  }
}
.city-name,
.province-name {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .city-name-item,
  .province-name-item {
    margin-right: 6px;
    margin-bottom: 6px;
    cursor: pointer;
  }
}
</style>
