<template>
  <div id="root">
    <h1>你好啊</h1>
    <Person/>
  </div>
</template>

<script lang="ts">
  import Person from '../响应式ref,reactive/components/Person.vue'//得让根和枝叶认识
          /* 枝叶 */
  export default {
    name:'App',//组件名
    components:{Person}
  }
</script>

<style>
#root{
    background-color: pink;
}
</style>
<!-- ../components/Person.vue -->