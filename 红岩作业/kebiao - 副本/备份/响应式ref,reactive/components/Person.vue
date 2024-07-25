<template>
  <div class="person">
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <button @click="show">查看联系方式</button>
    <button @click="changeName">改名</button>
    <button @click="changeAge">改年龄</button>
  </div>
  
  <div class="car">
    <h2>汽车信息:{{ car.brand }},价值:{{ car.price }}</h2><!-- 如果是一个对象里面的,要用xx.xx -->
    <button @click="add">点我加价</button>

    <ul>
        <li v-for="g in game" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="changeGame">点位更改第一个游戏的名字</button>
  </div>
</template>

<script lang="ts" setup  name="Person">  //setup在这里用
    import {reactive, ref} from 'vue'//别忘了引用ref和reactive

    let name=ref("小隐")//哪个是响应式,就给那个加ref
    let age=ref(19)
    let tel='0824'

    function show(){
        alert(tel)
    }
    function changeName(){
        name.value='伊莎'//注意,ref()的数据要用.value才能将变量的值改变掉
    }
    function changeAge(){
        age.value+=1
    }


    let car=reactive({brand:'奔驰',price:100}) //对象类型的响应式要用reactive
    function add(){
        car.price+=10
    }
    /* 数组对象的响应式 */
    let game=reactive([
        {id:'01',name:'蛋仔派对'},
        {id:'02',name:'王者荣耀'}
    ])
    function changeGame(){
        game[0].name='揪出捣蛋鬼'
    }

    
</script>

<style scoped>
    .person{
        background-color: rgb(111, 229, 242);
    }
    button{
        margin: 5px;
    }
    .car {
        background-color: rgb(177, 127, 224);
    }
    li{
        font-size: 50px;
    }
</style>