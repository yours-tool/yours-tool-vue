<template>
  <div class="jsontest">111111</div>
</template>

<script setup >
import { ref } from 'vue'
import {useRouter} from "vue-router";
const router = useRouter();
const activeIndex = ref('1')
</script>

<style scoped>
.jsontest{
  width: 1000px;
  height: 1000px;
  background-color: #0b0c0e;
}
</style>