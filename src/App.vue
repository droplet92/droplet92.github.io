<template id="app">
  <main :style="`height: 100svh`">
    <RouterView />
  </main>
</template>

<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue';

const windowHeight = ref(window.innerHeight);
const onResize = () => windowHeight.value = window.innerHeight;

onMounted(() => nextTick(() => window.addEventListener('resize', onResize)))
onBeforeUnmount(() => window.removeEventListener('resize', onResize))
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Noto+Sans+JP:wght@700&display=swap');

html, body {
	background-color: black;
	width: 100%;
	overflow: hidden;
	margin: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: 'Do Hyeon', 'Noto Sans JP', sans-serif;
	--primary-color: #EEEEEE;
	--secondary-color: #00ADB5;
	--font-white: #CBD7DF;
	--font-white-accent: #F4CE14;
	--font-blue: #3282B8;
	--font-blue-accent: #BBE1FA;
}
.el-link {
	--el-link-text-color: var(--font-white);
	--el-link-hover-text-color: var(--font-white-accent);
}
.el-dialog {
	max-width: 720px;
}
.el-dialog__footer {
	padding: 0;
}
</style>