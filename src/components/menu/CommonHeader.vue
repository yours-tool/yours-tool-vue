<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
  >
    <el-menu-item v-for="(menuItem,menuIndex) in menuList" :index="menuItem.index" :key="menuIndex">
      {{ menuItem.name }}
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import {ref} from "vue";

const activeIndex = ref('1')
const menuList = [
  {
    name: "倒计时",
    index: "countdown"
  },
  {
    name: "Json转换",
    index: "json"
  }

]
</script>

<style scoped>

</style>