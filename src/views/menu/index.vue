<template>
  <div class="menu">
    <zl-menu
      class="menu1"
      :data="data1"
      defaultActive="1"
      name="a"
      index="b"
      icon="c"
      children="d"
    >
    </zl-menu>
    <zl-menu-infinite
      class="menu2"
      :data="data2"
      name="a"
      index="b"
      icon="c"
      children="d"
    >
    </zl-menu-infinite>
  </div>
</template>

<script lang="ts" setup>
let data1 = [
  {
    a: '导航1',
    b: '1',
    c: 'document'
  },
  {
    a: '导航2',
    b: '2',
    c: 'document'
  },
  {
    a: '导航3',
    b: '3',
    c: 'document',
    d: [
      {
        a: '导航3-1',
        b: '3-1',
        c: 'document'
      },
      {
        a: '导航3-2',
        b: '3-2',
        c: 'document'
      }
    ]
  },
]

let data2 = [
  {
    a: '导航1',
    b: '1',
    c: 'Document'
  },
  {
    a: '导航2',
    b: '2',
    c: 'Document'
  },
  {
    a: '导航3',
    b: '3',
    c: 'Document',
    d: [
      {
        a: '导航3-1',
        b: '3-1',
        c: 'Document',
        d: [
          {
            a: '导航3-1-1',
            b: '3-1-1',
            c: 'Document'
          },
          {
            a: '导航3-1-2',
            b: '3-1-2',
            c: 'Document',
            d: [
              {
                a: '导航3-1-2-1',
                b: '3-1-2-1',
                c: 'Document'
              },
              {
                a: '导航3-1-2-2',
                b: '3-1-2-2',
                c: 'Document',
                d: [
                  {
                    a: '导航3-1-2-2-1',
                    b: '3-1-2-2-1',
                    c: 'Document'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        a: '导航3-2',
        b: '3-2',
        c: 'Document'
      }
    ]
  },
]
</script>

<style lang="scss" scoped>
.menu {
  width: 560px;
  display: flex;
  .menu1 {
    width: 200px;
    margin-right: 100px;
  }
  .menu2 {
    width: 260px;
  }
}
</style>