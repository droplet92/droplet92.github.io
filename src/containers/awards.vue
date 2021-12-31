<template>
	<el-card shadow="never">
		<el-row
			justify="center"
		>
			<h1>
				수상이력
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
	computed: {
		awards() {
			return [
				{
					title: {
						korean: "광운대X국민대 SW 경진대회",
						english: "Kwangwoon Univ. X Kookmin Univ. SW Compatition",
						japanese: "Kwangwoon Univ. X Kookmin Univ. SW Compatition",
					}[this.language],
					timestamp: "2017. 06.",
				},
				{
					title: {
						korean: "광운대학교 공학설계입문 장려상",
						english: "Kwangwoon Univ. 공학설계입문 장려상",
						japanese: "Kwangwoon Univ. 공학설계입문 장려상",
					}[this.language],
					timestamp: "2017. 06.",
				},
				{
					title: {
						korean: "광운대학교 IoT 스마트소프트웨어(SW) 경진대회",
						english: "Kwangwoon Univ. IoT Smart Software Compatition",
						japanese: "Kwangwoon Univ. IoT Smart Software Compatition",
					}[this.language],
					timestamp: "2017. 12.",
				},
				{
					title: {
						korean: "2021 한국컴퓨터종합학술대회(KCC2021) 학부생/주니어 논문경진대회 우수상",
						english: "2021 KCC2021 undergraduate/junior paper compatition 우수상",
						japanese: "2021 KCC2021 undergraduate/junior paper compatition 우수상",
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