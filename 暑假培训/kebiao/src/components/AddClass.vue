<template>
    <div class="add-class-modal" v-if="visible">
        <div class="modal-content">
            <h1>添加课程</h1>
            <form @submit.prevent="submitForm">
                <label for="className">课程名称:</label>
                <input type="text" id="className" v-model="className"><br>
                <label for="classroom">教室:</label>
                <input type="text" id="classroom" v-model="classroom"><br>
                <label for="begin">开始时间:</label>
                <input type="number" id="begin" v-model="begin"><br>
                <button type="submit">提交</button>
            </form>
            <button @click="$emit('close-modal')">返回</button>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
    day: String,
    time: String
});

const emit = defineEmits(['add-course', 'close-modal']);
const className = ref('');
const classroom = ref('');
const begin = ref('');
let visible = ref(true);

function submitForm() {
    const course = {
        day: props.day,
        time: props.time,
        className: className.value,
        classroom: classroom.value,
        begin: parseInt(begin.value)
    };
    emit('add-course', course); // 发出添加课程事件
    visible.value = false; 
}
</script>

<style scoped>
.add-class-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    height: 100%;
    width: 100%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.modal-content {
    background-color: white;
    font-size: 30px;
    padding-left: 60px;
}

input[type=text],[type=number]{
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
button {
    width: 100%;
    background-color: #2003ff;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 20px;
}
</style>