<template>
  <div>
    <zl-notification :value="50">
      <template #default>
        <zl-pop-list :list="list" :actions="actions"></zl-pop-list>
      </template>
    </zl-notification>
    <!-- <br />
    <br />
    <notification :value="50" :max="30"></notification>
    <br />
    <br />
    <notification :value="50" isDot></notification>
    <br />
    <br />
    <notification icon="Message" :value="50"></notification> -->
  </div>
</template>

<script lang="ts" setup>
import { list, actions } from './data'
</script>

<style lang="scss" scoped>

</style>