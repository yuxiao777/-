<template>
  <ul class="news-list">
    <li>编号：{{ query.id }}</li><!-- 路由的参数query -->
    <li>标题：{{ query.title }}</li>
    <li>内容：{{ query.content }}</li>
  </ul>
</template>

<script setup lang="ts" name="About">
  import {toRefs} from 'vue'
  import {useRoute} from 'vue-router'//hooks
  let route = useRoute()//我们要route,我们就用useRoute()就可以得到
  let {query} = toRefs(route)//从route的身上结构query
</script>

<style scoped>
  .news-list {
    list-style: none;
    padding-left: 20px;
  }

  .news-list>li {
    line-height: 30px;
  }
</style>