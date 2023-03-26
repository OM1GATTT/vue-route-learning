<template>
  <div class="main">
    <div class="container">
      <Article id="0"></Article>
      <Article id="1"></Article>
      <Article id="2"></Article>
    </div>
    <div class="right-container">
      <img src="../assets/主页右边栏.png" alt="">
    </div>
  </div>
</template>

<script setup>
import Article from '../components/Article.vue';
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  float: left;
  margin-right: 15px;
  margin-left: 335px;
  padding-left: 15px;
  padding-right: 5px;
  padding-top: 20px;
}

.right-container {
  float: right;
  margin-left: 5px;
  margin-right: 320px;
  margin-top: 20px;
}

.right-container img {
  width: 280px;
}
</style>
