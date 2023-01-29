<template>
  <div class="countdown">
    <el-card v-for="(item,index) in list" :key="index" class="box-card">
      <div>
        <div>类型:{{item.name}}</div>
        <div>内容:{{item.content}}</div>
        <div>预计花费:{{item.name}}</div>
        <div>类型:{{item.name}}</div>
      </div>
    </el-card>
  </div>
</template>

<script setup>


let list = [
  {
    name: "测试11",
    content: "11",
    type:"1",
    label:["标签1","标签2"]
  },
  {
    name: "测试22",
    content: "22",
    type:"2",
    label:["标签3","标签4"]
  },
  {
    name: "测试22",
    content: "22",
    type:"1",
    label:["标签3","标签4"]
  },
  {
    name: "测试22",
    content: "22",
    type:"1",
    label:["标签3","标签4"]
  }
]
</script>

<style scoped>
.countdown {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  /*background-color: rgb(60, 63, 65);*/
}
</style>