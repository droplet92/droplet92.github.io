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
						korean: "라이브/콘서트",
						english: "Music Live/Concert",
						japanese: "ライブ・コンサート参加",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/gukkasten.jpg?raw=true",
				},
				{
					title: {
						korean: "게임",
						english: "Video game",
						japanese: "ビデオゲーム",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/game.jpg?raw=true",
				},
				{
					title: {
						korean: "여행",
						english: "Trip",
						japanese: "旅行",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/trip1812.jpg?raw=true",
				},
				{
					title: {
						korean: "보드게임",
						english: "Board game",
						japanese: "ボードゲーム",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/boardgame.jpg?raw=true",
				},
			]
		},
	},
}
</script>

<style scoped>
</style>