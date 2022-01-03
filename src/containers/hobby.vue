<template>
	<el-card shadow="never">
		<el-row
			justify="center"
		>
			<h1>
				취미
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
	computed: {
		hobbies() {
			return [
				{
					title: {
						korean: "보드게임",
						english: "Playing board game",
						japanese: "Playing board game",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/boardgame.jpg?raw=true",
				},
				{
					title: {
						korean: "게임",
						english: "Plaing video game",
						japanese: "Plaing video game",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/game.jpg?raw=true",
				},
				{
					title: {
						korean: "강원도 여행",
						english: "Trip",
						japanese: "Trip",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/trip.jpg?raw=true",
				},
				{
					title: {
						korean: "연희동",
						english: "Trip",
						japanese: "Trip",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/trip2.jpg?raw=true",
				},
			]
		},
	},
}
</script>

<style scoped>
</style>