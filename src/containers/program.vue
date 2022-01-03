<template>
	<el-card shadow="never">
		<el-row
			justify="center"
		>
			<h1>
				프로그램
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
	computed: {
		programs() {
			return [
				{
					title: "reversi",
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/reversi.gif?raw=true",
					url: "https://github.com/droplet92/reversi",
					begin: "2019. 07.",
					end: "2019. 11.",
					tags: [ "Game", "C++17", "Sqlite", "SFML" ],
				},
				{
					title: "devichat",
					image: "https://github.com/droplet92/devichat/blob/master/2020-07-15-20-50-47.png?raw=true",
					url: "https://github.com/droplet92/devichat",
					begin: "2020. 10.",
					end: "2020. 10.",
					tags: [ "Socket", "C" ],
				},
				{
					title: {
						korean: "CIA 동아리 게시판",
						english: "CIA Club Homepage",
						japanese: "CIA 同好会 ホームページ",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/cia.gif?raw=true",
					url: "https://github.com/CartoonIsArt",
					begin: "2017. 09.",
					end: "2021. 10.",
					tags: [ "Web", "React", "JavaScript", "TypeScript", "TypeORM", "AWS", "Docker", "koa", "antd", "NSFWjs" ],
				},
				{
					title: {
						korean: "KKLIM 게임 개발팀",
						english: "KKLIM Game Dev Team",
						japanese: "KKLIMゲーム開発チーム",
					}[this.language],
					image: "https://github.com/droplet92/droplet92.github.io/blob/master/public/images/dev.jpg?raw=true",
					url: "https://bitbucket.org",
					begin: "2021",
					end: "2023",
					tags: [ "Game", "Unity", "C#" ],
				},
			]
		} 
	}
}
</script>

<style scoped>
</style>