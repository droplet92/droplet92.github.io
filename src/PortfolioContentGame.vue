<template>
	<div id="content">
		<div id="iframe-wrapper">
			<div id="iframe-container">
				<iframe
					width="100%"
					height="100%"
					:src="props.src"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen=""
				/>
			</div>
		</div>
		<em>{{ props.message }}</em>
		<el-row justify="center">
			<el-col :span="4">
				<el-link
					target="_blank"
					:href="props.link.play"
					:underline="false"
				>
					PLAY
				</el-link>
			</el-col>
			<el-col :span="4" v-if="props.link.code">
				<el-link
					target="_blank"
					:href="props.link.code"
					:underline="false"
				>
					CODE
				</el-link>
			</el-col>
		</el-row>
	</div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
	title: String,
	src: String,
	message: String,
	link: {
		play: String,
		code: String,
	},
})
</script>

<style scoped>
#content {
	max-width: 720px;
	#iframe-wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
		#iframe-container {
			width: 100%;
			max-width: 640px;
			max-height: 360px;
			aspect-ratio: 16/9;
			display: block;
		}
	}
	.el-row {
		margin-top: 32px;
		.el-link {
			--el-link-text-color: var(--font-blue);
			--el-link-hover-text-color: var(--font-blue-accent);
			font-size: 20px;
		}
	}
}
</style>