<!-- 正常写就是了 -->

<template>
    <div class="demo2">
        <h1>学生姓名:{{name}}</h1>
        <h1>学生年龄:{{age}}</h1>
    </div>
</template>

<script>
export default{//注意下这里,需要将数据通过export暴露出来
    data(){
        return{
            name:'小隐',
            age:19
        }
    }
}
</script>
