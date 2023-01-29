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
    <el-menu-item index="json">Processing Center</el-menu-item>
    <el-menu-item index="test">Info</el-menu-item>
    <el-menu-item index="3">Orders</el-menu-item>
  </el-menu>
</template>

<script setup>
import {ref} from "vue";
const activeIndex = ref('1')
</script>

<style scoped>

</style>