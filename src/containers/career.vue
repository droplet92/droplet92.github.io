<template>
	<el-card shadow="never">
		<el-row
			justify="center"
		>
			<h1>
				경력
			</h1>
		</el-row>
		<el-row justify="center">
			<el-timeline class="timeline">
				<el-timeline-item
					v-for="(item, key) in career"
					:key="key"
					:timestamp="item.timestamp"
				>
					<p>
						{{item.title}}
					</p>
				</el-timeline-item>
			</el-timeline>
		</el-row>
	</el-card>
</template>

<script>
export default {
  name: "career",
	props: {
		language: String,
	},
	computed: {
		career() {
			return [
				{
					title: {
						korean: "f1 security (KISA 프로젝트 용역)",
						english: "f1 security (KISA Project)",
						japanese: "f1 security (KISAプロジェクト参加)",
					}[this.language],
					timestamp: "2019. 06. ~ 2019. 12.",
				},
				{
					title: {
						korean: "해군 정보보호병",
						english: "ROK Navy Information Security",
						japanese: "海軍 情報セキュリティ兵",
					}[this.language],
					timestamp: "2021. 10. ~ 2023. 06.",
				},
				{
					title: {
						korean: "광운대학교 컴퓨터정보공학부 (4.19/4.5, GPA 3.72)",
						english: "Kwangwoon University Computer Information Engineering (4.19/4.5, GPA 3.72)",
						japanese: "Kwangwoon University Computer Information Engineering (4.19/4.5, GPA 3.72)",
					}[this.language],
					timestamp: "2017. 03. ~ 2024. 02.",
				},
			]
		}
	}
}
</script>

<style scoped>
</style>