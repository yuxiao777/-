# 课表

## 简介

本项目仿照掌上重邮,是一个动态课表

## 功能

- 课表显示时动画效果。
- 用户可以通过点击按钮查看课表。
- 用户可以点击课程显示详细信息
- 展示当前周数，当前时间日月星期以及时间
- 支持自定义添加课表或者活动

## 技术栈

- Vue 3
- TypeScript
- Axios (用于 API 请求)

## 使用说明

- 打开浏览器访问 `http://localhost:5173/` 来查看
- 点击“查看课表”按钮,课表通过动画升上来
- 查看课表: 提供了一个课表视图，显示一周内每天的课程安排
- 课程详细信息: 点击某一天某一时间段的单元格，如果该时段有课程，会显示课程的详细信息
- 添加课程: 如果点击的单元格没有课程安排，可以添加新课程

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
