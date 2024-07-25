<template>
  <div class="app">
    <Header/>
    <!-- 导航区 -->
    <div class="navigate">
      <!-- <a href="#">首页</a> 原来是这样,为了能够实现路由切换,需要变成RouterLink-->
      <RouterLink to="/home" active-class="love">首页</RouterLink>
      <!-- 下面这两种:to=" "是对象类型的写法 -->
      <RouterLink :to="{name:'xinwen'}" active-class="love">新闻</RouterLink>
      <RouterLink :to="{path:'/about'}" active-class="love">关于</RouterLink>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <RouterView></RouterView><!-- 把我们引入的组件(home.vue那三个)放在这一块 -->
    </div>
  </div>
</template>

<script lang="ts" setup name="App">
  import {RouterView,RouterLink} from 'vue-router'
  import Header from './components/Header.vue'
</script>

<style>
    /* App */
  .title {
    text-align: center;
    word-spacing: 5px;
    margin: 30px 0;
    height: 70px;
    line-height: 70px;
    background-image: linear-gradient(45deg, gray, white);
    border-radius: 10px;
    box-shadow: 0 0 2px;
    font-size: 30px;
  }
  .navigate {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
  }
  .navigate a {
    display: block;
    text-align: center;
    width: 90px;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    background-color: gray;
    text-decoration: none;
    color: white;
    font-size: 18px;
    letter-spacing: 5px;
  }
  .navigate a.love {
    background-color: #64967E;
    color: #ffc268;
    font-weight: 900;
    text-shadow: 0 0 1px black;
    font-family: 微软雅黑;
  }
  .main-content {
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 10px;
    width: 90%;
    height: 400px;
    border: 1px solid;
  }
  .active {
    background-color: #64967E;
  }
</style>