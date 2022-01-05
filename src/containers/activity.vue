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
				:list="activities"
			/>
		</el-row>
	</el-card>
</template>

<script>
import Grid from "../components/Grid"

export default {
  name: "activity",
	components: {
		Grid,
	},
	props: {
		language: String,
	},
	data: () => ({
		title: {
			korean: "활동",
			english: "Activities",
			japanese: "活動",
		},
	}),
	computed: {
		activities() {
			return [
				{
					title: {
						korean: "광운대 X 국민대 SW Challenge",
						english: "Kwangwoon Univ. X Kookmin Univ. SW Challenge",
						japanese: "光云大 X 國民大 SWチャレンジ",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/swchallenge.jpg?raw=true",
					timestamp: "2017. 06.",
				},
				{
					title: {
						korean: "광운대학교 공학설계입문대회",
						english: "Kwangwoon Univ. Engineering Design Competition",
						japanese: "光云大学校 工学設計入門大会",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/engineering_design.jpg?raw=true",
					timestamp: "2017. 06.",
				},
				{
					title: {
						korean: "광운대학교 2017 IoT 스마트소프트웨어(SW) 경진대회",
						english: "Kwangwoon Univ. 2017 IoT Smart Software Competition",
						japanese: "光云大学校 2017 IoT スマートソフトウェアコンペ",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/iotswconf.jpg?raw=true",
					timestamp: "2017. 11.",
				},
				{
					title: {
						korean: "자료구조 튜터링",
						english: "Kwangwoon University Data Structure Tutoring",
						japanese: "光云大学校 データストラクチャチュータリング",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/tutoring.jpg?raw=true",
					timestamp: "2017. 06.",
				},
			]
		}
	}
}
</script>

<style scoped>
</style>