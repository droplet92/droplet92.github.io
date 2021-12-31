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
						korean: "노래",
						english: "Music Listening & Singing",
						japanese: "歌",
					}[this.language],
					image: "https://cdn.britannica.com/79/191679-050-C7114D2B/Adult-capybara.jpg",
					begin: "2021. 12.",
					end: "2022. 12.",
				},
				{
					title: {
						korean: "사진",
						english: "Pictures",
						japanese: "写真撮影",
					}[this.language],
					image: "https://chico.ca.us/sites/main/files/imagecache/lightbox/main-images/dog_license.jpg",
					begin: "2021. 12.",
					end: "2022. 12.",
				},
				{
					title: {
						korean: "그림",
						english: "Painting",
						japanese: "絵描き",
					}[this.language],
					image: "https://natashaskitchen.com/wp-content/uploads/2020/05/Vanilla-Cupcakes-3.jpg",
					begin: "2021. 12.",
					end: "2022. 12.",
				},
				{
					title: {
						korean: "패션",
						english: "fashion",
						japanese: "ファッション",
					}[this.language],
					image: "https://www.nintendo.com//content/dam/noa/en_US/games/switch/s/splatoon-2-switch/splatoon-2-switch-hero.jpg",
					begin: "2021. 12.",
					end: "2022. 12.",
				},
			]
		},
	},
}
</script>

<style scoped>
</style>