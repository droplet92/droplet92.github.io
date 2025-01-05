<template id="app">
	<el-row
		:style="{'height': `${windowHeight*0.8}px`, 'margin-bottom': `${windowHeight* -0.1}px`}"
		justify="center"
		align="middle"
	>
			<video
				ref="videoPlayer"
				width="600" height="400"
				playsinline autoplay loop muted @dragstart.prevent @contextmenu.prevent
			>
				<source src="../public/hello.mp4" type="video/mp4">
				Your browser does not support the video tag.
			</video>
	</el-row>
	<el-row justify="center">
		<el-row
			justify="space-around"
			:gutter="40"
		>
			<div>
				<el-col
					:span="6"
					v-for="(component,key) in items"
					v-bind:key="key"
				>
					<a
						class="link"
						:href="component.link"
						target="_blank"
					>
						<component
							class="icon"
							:is="component.icon"
						/>
					</a>
				</el-col>
			</div>
		</el-row>
	</el-row>
	<el-row justify="center">
		<p>
			<a
				class="mail"
				href="mailto:lhs1438@gmail.com"
			>
				lhs1438@gmail.com
			</a>
		</p>
	</el-row>
</template>

<script>
export default {
	data() {
		return {
			windowHeight: window.innerHeight
		}
	},
	mounted() {
		this.$nextTick(() => {
			window.addEventListener('resize', this.onResize);
		})
	},
	beforeUnmount() { 
		window.removeEventListener('resize', this.onResize); 
	},
	methods: {  
		onResize() {
			this.windowHeight = window.innerHeight
		}
	}
}
</script>

<script setup>
import { AkLinkedinBoxFill } from "@kalimahapps/vue-icons";
import { AkGithubFill } from "@kalimahapps/vue-icons";
import { SiTistory } from "@kalimahapps/vue-icons";

const items = [
	{
		icon: AkLinkedinBoxFill,
		link: "https://www.linkedin.com/in/hansu-lee-4b6553170",
	},
	{
		icon: AkGithubFill,
		link: "https://github.com/droplet92",
	},
	{
		icon: <img src="/logo.webp" width="32" height="32" />,
		link: "https://overtone.kr",
	},
	{
		icon: SiTistory,
		link: "https://droplet92.tistory.com",
	},
]
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Noto+Sans+JP:wght@700&display=swap');

html {
	max-width: 100%;
	overflow-x: hidden;
}

body {
	background-color: black;
	max-width: 100%;
	overflow-x: hidden;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 32px;
  font-family: 'Do Hyeon', 'Noto Sans JP', sans-serif;
	--lhs-primary-color: #7586A6;
	--lhs-secondary-color: #383C6D;
	--lhs-font-color: #CBD7DF;
}

.link {
	color: white;
}
.link .icon {
	color: inherit;
	font-size: 2rem;
}

.mail {
	color: white;
	text-decoration: none;
}
</style>