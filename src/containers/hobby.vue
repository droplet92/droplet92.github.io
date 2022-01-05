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
						korean: "보드게임",
						english: "Playing board game",
						japanese: "ボードゲーム",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/boardgame.jpg?raw=true",
				},
				{
					title: {
						korean: "게임",
						english: "Plaing video game",
						japanese: "ビデオゲーム",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/game.jpg?raw=true",
				},
				{
					title: {
						korean: "강원도",
						english: "Kangwon",
						japanese: "カンウォンド",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/trip.jpg?raw=true",
				},
				{
					title: {
						korean: "연희동",
						english: "Yeonhui-dong",
						japanese: "ヨンヒドン",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/trip2.jpg?raw=true",
				},
				{
					title: {
						korean: "시즈오카",
						english: "Sizuoka",
						japanese: "静岡",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/trip1801_1.jpg?raw=true",
				},
				{
					title: {
						korean: "교토",
						english: "Kyoto",
						japanese: "京都",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/trip1801_2.jpg?raw=true",
				},
				{
					title: {
						korean: "강원도",
						english: "Kangwon",
						japanese: "カンウォンド",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/trip1808.jpg?raw=true",
				},
				{
					title: {
						korean: "삿포로",
						english: "Sapporo",
						japanese: "札幌",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/trip1812.jpg?raw=true",
				},
				{
					title: {
						korean: "오타루",
						english: "Otaru",
						japanese: "小樽",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/trip1912.jpg?raw=true",
				},
				{
					title: {
						korean: "2018년 광운대학교 축제",
						english: "2018 Kwangwoon Univ. Festival",
						japanese: "2018 光云大学校フェスティバル",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/fes.jpg?raw=true",
				},
				{
					title: {
						korean: "IGC 2019",
						english: "IGC 2019",
						japanese: "IGC 2019",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/igc.jpg?raw=true",
				},
				{
					title: {
						korean: "국카스텐 열정도 공연",
						english: "Gukkasten Yeoljeongdo concert",
						japanese: "Gukkastenコンサート",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/gukkasten.jpg?raw=true",
				},
			]
		},
	},
}
</script>

<style scoped>
</style>