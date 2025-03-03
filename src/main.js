import { createApp } from 'vue'

// 全局样式会应用于 所有子应用, 建议页面样式使用 scoped 进行隔离
// 全局样式文件可以使用特定的css前缀,例如 : main-app-title 代替 title

import './style.css'
import App from './App.vue'

import router from './router';

import microApp from '@micro-zoe/micro-app'

microApp.start({
    lifeCycles: {
        created() {
            console.log('基座： created 全局监听')
        },
        beforemount() {
            console.log('基座：beforemount 全局监听')
        },
        mounted() {
            console.log('基座：mounted 全局监听')
        },
        unmount() {
            console.log('基座：unmount 全局监听')
        },
        error() {
            console.log('基座：error 全局监听')
        }
    },
})

createApp(App).use(router).mount('#app')

// 预加载vite子应用
microApp.preFetch([
    { name: 'my-app', url: 'http://localhost:3000/', iframe: true },
  ])
  

microApp.addDataListener('my-app', (data) => {
    console.log('来自子应用my-app的数据', data)

    return '返回值1'
})

// 解绑监听my-app子应用的函数
// microApp.removeDataListener('my-app', dataListener)

// 清空所有监听my-app子应用的函数
// microApp.clearDataListener('my-app')