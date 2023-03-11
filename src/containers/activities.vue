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
			<List
				v-bind:list="programs"
			/>
		</el-row>
	</el-card>
</template>

<script>
import List from "../components/List"

export default {
  name: "program",
	components: {
		List,
	},
	props: {
		language: String,
	},
	data: () => ({
		title: {
			korean: "활동",
			english: "Activies",
			japanese: "活動",
		},
	}),
	computed: {
		programs() {
			return [
				{
					title: {
						korean: "CIA 동아리 게시판",
						english: "Club CIA Homepage",
						japanese: "サークル CIA ホームページ",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/cia.gif?raw=true",
					url: "https://github.com/CartoonIsArt",
					begin: "2017. 09.",
					end: "2021. 10.",
					tags: [ "Web", "React", "JavaScript", "TypeScript", "TypeORM", "AWS", "Docker", "koa", "antd", "NSFWjs" ],
				},
				{
					title: {
						korean: "HCI KOREA 2022 학술대회",
						english: "HCI KOREA 2022 Conference",
						japanese: "HCI KOREA 2022 学術大会",
					}[this.language],
					image: "https://img.youtube.com/vi/BwWbenk8UsU/maxresdefault.jpg",
					url: "https://www.youtube.com/watch?v=BwWbenk8UsU",
					begin: "2021. 03.",
					end: "2022. 02.",
					tags: [ "HCI", "VR", "Unity", "C#" ],
				},
				{
					title: {
						korean: "COM's 동아리 회지 - MPU6050을 이용한 모션 캡처",
						english: "Club COM's Article - Motion Capture Using MPU6050",
						japanese: "サークル COM's 会誌 - MPU6050を使ったモーションキャプチャー",
					}[this.language],
					image: "https://img.youtube.com/vi/86nRW5NOb_c/maxresdefault.jpg",
					url: "https://github.com/droplet92/mpu6050_mocap",
					begin: "2020. 07.",
					end: "2020. 09.",
					tags: [ "Motion Capture", "OpenGL", "C++17", "MPU6050" ],
				},
				{
					title: "reversi",
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/reversi.gif?raw=true",
					url: "https://github.com/droplet92/reversi",
					begin: "2019. 07.",
					end: "2019. 11.",
					tags: [ "Game", "C++17", "SFML", "Minimax" ],
				},
				{
					title: "devichat",
					image: "https://github.com/droplet92/devichat/blob/master/2020-07-15-20-50-47.png?raw=true",
					url: "https://github.com/droplet92/devichat",
					begin: "2020. 10.",
					end: "2020. 10.",
					tags: [ "Socket", "C", "FreeBSD" ],
				},
			]
		} 
	}
}
</script>

<style scoped>
</style>