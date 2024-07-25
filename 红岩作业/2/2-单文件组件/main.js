/* 注意:我们所有的组件都是要用到一个vm对象中的,而且我们不能在.vue文件中创建vm对象,所以我们要创建一个.js文件,创建vm对象 */


import App from './App.vue' //首先还是将暴露的app组件引入,(因为App.vue包含了Studen.vue和School.vue,所以我们只用把App.vue引入就行了)

new Vue({   //正常创建组件
	el:'#root',
	template:`<App></App>`, /* 我们的html代码就是用这个最大的组件App.vue啊 */
	components:{App}, /* 别忘了注册组件哦 */
})