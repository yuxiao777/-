<template>

    <div class="back_all">
        掌上重邮
        <button @click="toggleClassTable">查看课表</button>
    </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue';

// 定义 emit 事件
const emit = defineEmits(['toggle-view']);

// 定义 toggleClassTable 函数
function toggleClassTable() {
    emit('toggle-view'); // 触发父组件的事件
}
</script>

<style>
.back_all {
    background-color: rgb(186, 216, 216);
    height: 1000px;
    width: 100%;
    padding: 0;
    font-size: 100px;
}
</style>