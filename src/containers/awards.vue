<template>
	<el-card shadow="never">
		<el-row
			justify="center"
		>
			<h1>
				{{title[language]}}
			</h1>
		</el-row>
		<el-row justify="center">
			<el-timeline class="timeline">
				<el-timeline-item
					v-for="(award, key) in awards"
					:key="key"
					:timestamp="award.timestamp"
				>
					<p>
						{{award.title}}
					</p>
				</el-timeline-item>
			</el-timeline>
		</el-row>
	</el-card>
</template>

<script>
export default {
  name: "awards",
	props: {
		language: String,
	},
	data: () => ({
		title: {
			korean: "수상이력",
			english: "Awards",
			japanese: "受賞歴",
		},
	}),
	computed: {
		awards() {
			return [
				{
					title: {
						korean: "광운대 X 국민대 SW Challenge 3등",
						english: "Kwangwoon Univ. X Kookmin Univ. SW Challenge 3rd.",
						japanese: "光云大 X 國民大 SWチャレンジ 3rd.",
					}[this.language],
					timestamp: "2017. 06.",
				},
				{
					title: {
						korean: "광운대학교 공학설계입문 장려상",
						english: "Kwangwoon Univ. Engineering Design Competition participation prize",
						japanese: "光云大学校 工学設計入門大会 奬勵賞",
					}[this.language],
					timestamp: "2017. 06.",
				},
				{
					title: {
						korean: "광운대학교 2017 IoT 스마트소프트웨어(SW) 경진대회 우수상",
						english: "Kwangwoon Univ. 2017 IoT Smart Software Competition excellence award",
						japanese: "光云大学校 2017 IoT スマートソフトウェアコンペティション優秀賞",
					}[this.language],
					timestamp: "2017. 11.",
				},
				{
					title: {
						korean: "2021 한국컴퓨터종합학술대회(KCC2021) 학부생/주니어 논문경진대회 우수상",
						english: "2021 KCC2021 Undergraduate/Junior Paper Competition excellence award",
						japanese: "2021 KCC2021 学部生/ジュニア 論文コンペティション優秀賞",
					}[this.language],
					timestamp: "2021. 07.",
				},
			]
		} 
	}
}
</script>

<style scoped>
</style>