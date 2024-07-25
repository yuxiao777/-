#名称:课表
主要功能有: - 页面的拖拽 - 日期的显示 - 显示课表 - 点击课程显示详细信息 - 支持自定义添加课表或者活动

# 目录结构描述

kebiao_now/
├── src/
│ ├── components/
│ │ ├── AddClass.vue # 添加课程组件
│ │ ├── back.vue # 背景组件
│ │ ├── ClassTable.vue # 课程表组件
│ │ └── DetailsModal.vue # 课程详情模态框组件
│ ├── types/ # 接口获得信息
│ ├── App.vue  
│ ├── main.ts

# hello_vue3

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
