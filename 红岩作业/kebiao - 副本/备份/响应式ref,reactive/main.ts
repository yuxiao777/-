//从Vue这个库上引人入createApp,用于创建应用
import {createApp} from 'vue'
//引入App根组件
import App from './App.vue'
createApp(App).mount('#app')//把那个花盆挂载在id为app的容器内
//我要创建一个应用,且该应用的所有根组件都是App