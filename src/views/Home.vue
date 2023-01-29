<template>
  <div class="home">
    <el-container>
      <el-header>
        <common-header/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>

</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter();
import CommonHeader from "../components/menu/CommonHeader";

</script>

<style scoped>
/*.home{*/
/*  width: 100%;*/
/*  height: 100vh;*/
/*  margin: 0;*/
/*  padding: 0;*/
/*}*/
</style>