<template>
  <div class="home">
    <common-header/>
    <router-view/>
  </div>

</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter();
import CommonHeader from "../components/menu/CommonHeader";

</script>

<style scoped>
.home{
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
</style>