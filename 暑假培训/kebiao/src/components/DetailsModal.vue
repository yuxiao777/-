<template>
      <div class="modal" v-if="day && time && courseInfo">
            <div class="fon">
                  <button class="close-button" @click="$emit('close-modal')">返回</button>
                  <h3>课程详情</h3>
                  <div class="modal-content">
                        <p>星期: {{ day }}</p>
                        <p>课程名称: {{ courseInfo.className }}</p>
                        <p>教室: {{ courseInfo.classroom }}</p>
                        <p>开始时间: {{ courseInfo.begin }}</p>
                      </div>
                </div>
          </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
    day: String,
    time: String,
    courseInfo: Object
});

defineEmits(['close-modal']); // 声明一个关闭模态框的事件

</script>

<style scoped>
.modal {
    justify-content: center;
    align-items: center;
    position: fixed;
    /* position: relative; */
    bottom: 0;
    left: 0;
    width: 100%;
    height: 55%;
    background-color: rgb(217, 181, 181);
    border-radius: 5%;
}

.fon {
    padding-left: 60px;
    font-size: 30px;
}

button {
    width: 170px;
    height: 70px;
    font-size: 30px;
    background-color: rgb(217, 181, 181);
    border: none;
}
</style>