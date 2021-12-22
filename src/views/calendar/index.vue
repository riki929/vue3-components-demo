<template>
  <zl-calendar
    :events="events"
    :eventContent="eventContent"
    displayEventEnd
    @dateClick="dateClick"
    @eventClick="eventClick"
  ></zl-calendar>
</template>

<script lang="ts" setup>
import { EventClickArg, EventContentArg } from "@fullcalendar/core";
import { DateClickArg } from "@fullcalendar/interaction";
import { EventItem } from "../../components/calendar/src/types";
import { ref } from 'vue';

let events = ref<EventItem[]>([
  {
    title: '购物',
    start: '2021-12-12 08:00',
    end: '2021-12-12 12:00',
    editable: true
  },
  {
    title: '看节目',
    start: '2021-12-22 18:00',
    end: '2021-12-22 19:00'
  },
])

let dateClick = (info: DateClickArg) => {
  events.value.push({
    start: info.dateStr + ' 12:00',
    end: info.dateStr + ' 18:00',
    title: '学习'
  })
  console.log(info);
}

let eventClick = (info: EventClickArg) => {
  console.log(info);
}

let eventContent = (arg: EventContentArg) => {
  let el = document.createElement('div');
  let timeTextArr = arg.timeText.split('-');
  let start = timeTextArr[0]
    .replace('上午', '')
    .replace('下午', '')
    .replace('时', '');
  let end = timeTextArr[1]
    .replace('上午', '')
    .replace('下午', '')
    .replace('时', '');
  el.innerHTML = `
    <div>开始时间: ${start}</div>
    <div>结束时间: ${end}</div>
    <div>标题: ${arg.event._def.title}</div>
  `
  return {
    domNodes: [el]
  }
}
</script>

<style lang="scss" scoped>

</style>