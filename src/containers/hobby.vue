<template>
	<el-card shadow="never">
		<el-row
			justify="center"
		>
			<h1>
				{{title[language]}}
			</h1>
		</el-row>
		<el-row>
			<Grid
				:list="hobbies"
			/>
		</el-row>
	</el-card>
</template>

<script>
import Grid from "../components/Grid"
	
export default {
  name: "hobby",
	components: {
		Grid,
	},
	props: {
		language: String,
	},
	data: () => ({
		title: {
			korean: "취미",
			english: "Hobbies",
			japanese: "趣味",
		},
	}),
	computed: {
		hobbies() {
			return [
				{
					title: {
						korean: "음악 리뷰",
						english: "Music Review",
						japanese: "音楽レビュー",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/gukkasten.jpg?raw=true",
				},
				{
					title: {
						korean: "여행",
						english: "Trip",
						japanese: "旅行",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/trip1812.jpg?raw=true",
				},
			]
		},
	},
}
</script>

<style scoped>
</style>