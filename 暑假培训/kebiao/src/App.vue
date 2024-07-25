<template>
	<div id="app">
		<div class="date-info">
			当前周数：{{ weekNumber }}
			<br>
			当前时间：{{ currentTime }}
		</div>
		<!-- 使用 v-if 控制 Back 组件的显示 -->
		<Back v-if="!showClassTable" @toggle-view="toggleView" />
		<!-- 使用 v-show 和 transition 控制 ClassTable 组件的显示，并添加过渡效果 -->
		<div class="bot" v-show="showClassTable">
			<transition name="slide-fade" @after-enter="afterEnter">
				<div class="class-table-container" v-if="showClassTable">
					<ClassTable />
				</div>
			</transition>
		</div>
	</div>
</template>

<script setup>
import axios from 'axios';
import ClassTable from './components/ClassTable.vue';
import Back from './components/back.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const weekNumber = ref(12);
const currentTime = ref(new Date().toLocaleString());
const showClassTable = ref(false); // 控制 ClassTable 是否显示
let currentTimeInterval;

const toggleView = () => {
	// 切换 showClassTable 的值来控制 ClassTable 的显示
	showClassTable.value = !showClassTable.value;
};

const updateCurrentTime = () => {
	currentTime.value = new Date().toLocaleString();
};

const afterEnter = () => {
	console.log('Animation finished');
};

onMounted(() => {
	currentTimeInterval = setInterval(updateCurrentTime, 1000);
});

onUnmounted(() => {
	clearInterval(currentTimeInterval);
});

function created() {
	axios.get('/api/news').then(res => {
		console.log(res);
	});
}
</script>

<style>
.top {
	height: 752px;
}

#app {
	position: relative;
	overflow: hidden;
	padding-top: 50px;
	overflow: hidden;
}

.date-info {
	top: 0;
	left: 0;
	right: 0;
	padding: 10px;
	background-color: rgba(242, 187, 187, 0.9);
	z-index: 10;
	text-align: center;
	font-size: 20px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.class-table-container {
	margin-top: 30px;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
	transition: all 2s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateY(100%);
	opacity: 0;
}/* 升上来的动画 */
</style>