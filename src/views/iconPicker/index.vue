<template>
  <div>
    <zl-icon-picker title="选择图标" v-model:visible="visible">
      选择图标
    </zl-icon-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

let visible = ref<boolean>(false);
</script>

<style lang="scss" scoped></style>
