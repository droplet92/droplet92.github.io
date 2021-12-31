<template id="app">
			<el-affix class="app-affix-wrapper" target="#app" :offset="60">
				<el-dropdown @command="change_dictionary">
				<el-button
					class="app-btn"
					color="#383C6D"
					:icon="SetUp"
					circle
				/>
					<template #dropdown>
						<el-dropdown-menu>
							<el-dropdown-item command="korean">한국어</el-dropdown-item>
							<el-dropdown-item command="english">English</el-dropdown-item>
							<el-dropdown-item command="japanese">日本語</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</el-affix>
	<el-row
		justify="center"
	>
		<div id="main">
			<el-col>
				<div
					v-for="(component,key) in components"
					v-bind:key="key"
				>
					<component
						v-bind:is="component"
						:language="language"
					/>
				</div>
			</el-col>
		</div>
	</el-row>
</template>

<script setup>
import { SetUp } from "@element-plus/icons-vue"
</script>

<script>
import Activity from "./containers/activity"
import Awards from "./containers/awards"
import Career from "./containers/career"
import Certificate from "./containers/certificate"
import Hobby from "./containers/hobby"
import Introduction from "./containers/introduction"
import Paper from "./containers/paper"
import Program from "./containers/program"
import Thankyou from "./containers/thankyou"
	
const languages = {
	korean: "korean",
	english: "english",
	japanese: "japanese",
}

export default {
  name: 'App',
	data: () => ({
		components: [
			Introduction,
			Program,
			Hobby,
			Activity,
			Paper,
			Career,
			Awards,
			Certificate,
			Thankyou,
		],
		language: languages.korean,
	}),
	methods: {
		change_dictionary: function (command) {
			this.language = languages[command]
		}
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Noto+Sans+JP:wght@700&display=swap');
	
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-family: 'Do Hyeon', 'Noto Sans JP', sans-serif;
	--lhs-primary-color: #7586A6;
	--lhs-secondary-color: #383C6D;
	--lhs-font-color: #CBD7DF;
}
	
#main {
	max-width: 1080px;
}
.timeline {
	max-width: 720px;
	width: 100%;
}

.el-card {
	border: 0px;
}
	
.app-affix-wrapper {
	position: absolute;
	right: 60px;
}

.app-btn {
	color: white;
}
	
.el-timeline {
	text-align: left;
}
</style>