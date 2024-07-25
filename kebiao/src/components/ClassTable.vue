<template>
      <div class="schedule">
            <div class="tuo">查看课表</div>
            <button>返回本周</button>
            <table>
                  <thead>
                        <tr>
                              <th>时间</th>
                              <th v-for="day in days" :key="day" class="lie">{{ day }}</th>
                            </tr>
                      </thead>
                  <tbody>
                        <tr v-for="time in times" :key="time">
                              <th>{{ time }}</th>
                              <td v-for="day in days" :key="day" class="cell"
                        :class="{ 'has-data': hasCourse(day, time) }"            
                        @click="handleCellClick(day, time)">
                                    <div v-if="getCourse(day, time)">
                                          {{ getCourse(day, time).className }}
                                          {{ getCourse(day, time).classroom }}
                                        </div>
                                  </td>
                            </tr>
                      </tbody>
                </table>
            <details-modal v-if="selectedDay && selectedTime" :day="selectedDay" :time="selectedTime"      
            :course-info="selectedCourse" @close-modal="closeDetailsModal" />
            <add-class-modal v-if="isAdding" :day="selectedDay" :time="selectedTime" @add-course="addCourse"    
              @close-modal="stopAdding" />
          </div>
</template>

<script setup>


import DetailsModal from './DetailsModal.vue';
import AddClassModal from './AddClass.vue';

import { ref, onMounted } from 'vue';

const days = ref(['周一', '周二', '周三', '周四', '周五', '周六', '周日']);
const times = ref(['1', '2', '3', '4', '5', '6']);
const courses = ref([
    {
        day: '周一',
        className: '运筹学',
        classroom: '4212',
        begin: 4,
    },
    {
        day: '周二',
        className: '数据结构',
        classroom: 'B101',
        begin: 2,
    },
    {
        day: '周二',
        className: '英语',
        classroom: 'B101',
        begin: 3,
    },
    {
        day: '周三',
        className: '高数',
        classroom: 'B201',
        begin: 1,
    },
    {
        day: '周三',
        className: '思政',
        classroom: 'B201',
        begin: 6,
    },
    {
        day: '周五',
        className: '英语',
        classroom: 'B201',
        begin: 1,
    },
    {
        day: '周四',
        className: '思想道德与法治',
        classroom: 'B201',
        begin: 2,
    },
    {
        day: '周五',
        className: '体育',
        classroom: 'B201',
        begin: 4,
    },
    {
        day: '周二',
        className: '体育',
        classroom: 'B201',
        begin: 5,
    },
]);
const selectedDay = ref(null);
const selectedTime = ref(null);
const selectedCourse = ref(null);
const isAdding = ref(false);

function getCourse(day, time) {
    const courseInfo = courses.value.find(c => c.day === day && c.begin.toString() === time);
    return courseInfo ? {
        className: courseInfo.className,
        classroom: courseInfo.classroom,
        begin: courseInfo.begin
    } : null;
}

function hasCourse(day, time) {
    return !!courses.value.find(c => c.day === day && c.begin.toString() === time);
}

function showDetails(day, time) {
    const hasData = hasCourse(day, time);
    if (hasData) {
        selectedDay.value = day;
        selectedTime.value = time;
        const courseInfo = getCourse(day, time);
        selectedCourse.value = courseInfo;
    }
}

function handleCellClick(day, time) {
    const hasData = hasCourse(day, time);
    if (hasData) {
        showDetails(day, time);
    } else {
        selectedDay.value = day;
        selectedTime.value = time;
        isAdding.value = true;
    }
}

function addCourse(course) {
    courses.value.push(course);
    isAdding.value = false;
}

function stopAdding() {
    isAdding.value = false;
}

function closeDetailsModal() {
    selectedDay.value = null;
    selectedTime.value = null;
    selectedCourse.value = null;
}
</script>

<style scoped>
button{
    width: 30%;
    background-color: #2003ff;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 20px;
}
.tuo {
    text-align: center;
    font-size: 30px;
}
.schedule {
    background-color: white ;
}

.schedule table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
}

.schedule td {
    border: 1px #ede5e5;
    padding: 8px;
    text-align: left;
    width: 50px;
    height: 180px;
    border-radius: 20%;
    font-size: 20px;
}

.lie {
    background-color: rgb(172, 195, 44);
    border-radius: 30%;
    height: 80px;
    font-size: 30px;
}

.schedule .cell.has-data {
    cursor: pointer;
    background-color: rgb(234, 239, 209);
}
</style>