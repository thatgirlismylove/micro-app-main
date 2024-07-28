<script setup>

</script>

<template>
  <div>
    <p class="title">Vite + Vue 主应用</p>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <router-view></router-view>
</template>

<script>
import { ref } from "vue";

const data = ref({ from: "来自基座的初始化数据" });

function created() {
  console.log('子应用： micro-app元素被创建')
}
function beforemount() {
  console.log('子应用： 即将渲染')
}
function mounted() {
  console.log('子应用： 已经渲染完成')
}
function unmount() {
  console.log('子应用： 已经卸载')
}
function error() {
  console.log('子应用： 加载出错')
}

</script>

<style scoped>
.title {
  font-weight: 600;
  font-size: 20px;
  color: red;
}
</style>
