<template>
	<div id="about">
		<div>
			<h1>Hansu Lee</h1>
			<h3>South Korea</h3>
			<h3>Game Developer, Web Programmer</h3>
			<div>
				<el-row
					justify="space-around"
					:gutter="24"
				>
					<div>
						<el-col
							v-for="(component,key) in items"
							v-bind:key="key"
						>
							<el-link
								target="_blank"
								:href="component.link"
								:underline="false"
							>
								<component
									class="icon"
									:is="component.icon"
								/>
							</el-link>
						</el-col>
					</div>
				</el-row>
			</div>
			<div>
				<el-link
					href="mailto:lhs1438@gmail.com"
					:underline="false"
				>
					lhs1438@gmail.com
				</el-link>
			</div>
		</div>
	</div>
	<div id="guide">
		<el-link
			href="/"
			:underline="false"
		>
			BACK
		</el-link>
	</div>
</template>

<script setup>
import { AkLinkedinBoxFill } from "@kalimahapps/vue-icons";
import { AkGithubFill } from "@kalimahapps/vue-icons";
import IconOvertone from "../IconOvertone.vue";

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
		icon: IconOvertone,
		link: "https://overtone.kr",
	},
]
</script>

<style scoped>
#about {
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	h1 {
		color: var(--primary-color);
	}
	h3, h4 {
		color: var(--secondary-color);
	}
	.el-link {
		margin-top: 32px;
		font-size: 16px;
		.icon {
			color: inherit;
			font-size: 2rem;
		}
	}
}
#guide {
	position: fixed;
	bottom: 60px;
	width: 100%;
	display: flex;
	justify-content: center;
	.el-link {
		font-size: 24px;
	}
}
</style>