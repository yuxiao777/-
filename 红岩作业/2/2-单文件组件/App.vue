<!-- 我们需要一个老大,来管理我们写的Vue(比如Student.vue,Shool.vue) -->

<template>
    <div id="root"><!-- 切记,不要忘了我们的root盒子啊 -->
        <School></School>
        <Student></Student>
    </div>  
</template>

<script>
    import School from '/School'     /* 我们将我们刚才暴露的组件引入进来用import xx from 'xxx' */
    import Student from '/Student'

    export default {  /* 同样的,关于数据这部分,还是要用export将其暴露出来 */
        components:{ /* 注册组件要用到components:{}哦 */
            School,
            Student
        }
    }
</script>

