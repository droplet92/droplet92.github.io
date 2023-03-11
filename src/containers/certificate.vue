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
					v-for="(item, key) in certificates"
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
  name: "certificate",
	props: {
		language: String,
	},
	data: () => ({
		title: {
			korean: "자격증",
			english: "Certificates",
			japanese: "資格",
		},
	}),
	computed: {
		certificates() {
			return [
				{
					title: {
						korean: "TOPCIT 수준 3 (503/1000)",
						english: "TOPCIT Level 3 (503/1000)",
						japanese: "TOPCIT レベル 3 (503/1000)",
					}[this.language],
					timestamp: "2020. 10.",
				},
				{
					title: "JLPT N1 (159/180)",
					timestamp: "2021. 09.",
				},
				{
					title: {
						korean: "정보처리기사",
						english: "Engineer Information Processing",
						japanese: "応用情報技術者試験"
					}[this.language],
					timestamp: "2022. 06.",
				},
				{
					title: {
						korean: "리눅스마스터 2급",
						english: "Linux master Level 2",
						japanese: "Linux master レベル 2",
					}[this.language],
					timestamp: "2022. 09.",
				}
			]
		} 
	}
}
</script>

<style scoped>
</style>