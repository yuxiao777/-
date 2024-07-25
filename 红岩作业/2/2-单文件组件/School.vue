<template>
    <div id="root">
        <div class="sc">学校名称:{{name}}</div>
        <div>学校地址:{{a}}</div>
        <button @click="show">kissm</button>
    </div>
    
</template>

<script>
    export default {//注意下这里,需要将数据通过export暴露出来
        data(){
            return{
                name:'sgg',
                a:'bj'
            }
        },
        methods:{
            show(){
                alert('hehe')
            }
        }
    }
</script>

<style>
    .sc{
        background-color: pink ;
    }
</style>