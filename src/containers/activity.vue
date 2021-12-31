<template>
	<el-card shadow="never">
		<el-row
			justify="center"
		>
			<h1>
				활동
			</h1>
		</el-row>
		<el-row>
			<List v-bind:list="activities" />
		</el-row>
	</el-card>
</template>

<script>
import List from "../components/List"

export default {
  name: "activity",
	components: {
		List,
	},
	props: {
		language: String,
	},
	computed: {
		activities() {
			return [
				{
					title: {
						korean: "화정고등학교 컴퓨터 동아리",
						english: "Hwajung High School Computer Club",
						japanese: "Hwajung High School Computer Club",
					}[this.language],
					image: "https://cdn.britannica.com/79/191679-050-C7114D2B/Adult-capybara.jpg",
					url: "https://hwajung.hs.kr/",
					begin: "2015. 03.",
					end: "2016. 12.",
				},
				{
					title: {
						korean: "광운대학교 중앙 컴퓨터 동아리 COM's",
						english: "Kwangwoon University Computer Club COM's",
						japanese: "Kwangwoon University Computer Club COM's",
					}[this.language],
					image: "https://chico.ca.us/sites/main/files/imagecache/lightbox/main-images/dog_license.jpg",
					url: "https://coms.kw.ac.kr",
					begin: "2017. 03.",
					end: "2024. 02.",
				},
				{
					title: {
						korean: "광운대학교 중앙 만화 동아리 CIA",
						english: "Kwangwoon University Cartoon Club CIA",
						japanese: "Kwangwoon University Cartoon Club CIA",
					}[this.language],
					image: "https://natashaskitchen.com/wp-content/uploads/2020/05/Vanilla-Cupcakes-3.jpg",
					url: "https://cartoonisart.duckdns.org",
					begin: "2017. 03.",
					end: "2024. 02.",
				},
				{
					title: {
						korean: "광운대학교 겨울방학 튜터링",
						english: "Kwangwoon University Winter Vacation Tutoring",
						japanese: "Kwangwoon University Winter Vacation Tutoring",
					}[this.language],
					image: "https://www.nintendo.com//content/dam/noa/en_US/games/switch/s/splatoon-2-switch/splatoon-2-switch-hero.jpg",
					url: "",
					begin: "2017. 12.",
					end: "2017. 12.",
				},
				{
					title: {
						korean: "자료구조 튜터링",
						english: "Kwangwoon University Data Structure Tutoring",
						japanese: "Kwangwoon University Data Structure Tutoring",
					}[this.language],
					image: "https://www.nintendo.com//content/dam/noa/en_US/games/switch/s/splatoon-2-switch/splatoon-2-switch-hero.jpg",
					url: "",
					begin: "2018. 09.",
					end: "2018. 12.",
				},
			]
		}
	}
}
</script>

<style scoped>
</style>