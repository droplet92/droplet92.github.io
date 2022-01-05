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
					v-for="(paper, key) in papers"
					:key="key"
					:timestamp="paper.timestamp"
				>
					<el-link :href="paper.url" type="primary">
						{{ paper.cite }}
					</el-link>
				</el-timeline-item>
			</el-timeline>
		</el-row>
  </el-card>
</template>

<script>
export default {
  name: "paper",
	props: {
		language: String
	},
	data: () => ({
		title: {
			korean: "논문",
			english: "Papers",
			japanese: "論文",
		},
	}),
	computed: {
		papers() {
			return [
				{
					cite: {
						korean: '이한수, 김동주, 이혁준, 황동혁. "랜섬웨어 대응 및 데이터 유출 보호를 위한 파일 접근 로그 기반 파일 접근 제어 시스템" 한국정보과학회 학술발표논문집, (2021) : 2054-2056.',
						english: '이한수, 김동주, 이혁준, 황동혁. "랜섬웨어 대응 및 데이터 유출 보호를 위한 파일 접근 로그 기반 파일 접근 제어 시스템" 한국정보과학회 학술발표논문집, (2021) : 2054-2056.',
						japanese: '이한수, 김동주, 이혁준, 황동혁. "랜섬웨어 대응 및 데이터 유출 보호를 위한 파일 접근 로그 기반 파일 접근 제어 시스템" 한국정보과학회 학술발표논문집, (2021) : 2054-2056.',
					}[this.language],
					timestamp: "2021. 06.",
					url: "https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE10583527",
				},
				{
					cite: {
						korean: '김명지, 김효리, 박유림, 이영현, 이한수, 정범영, 송원철, 정동훈. "1인칭 메타버스 게임의 HUD UI와 공간 UI가 사용자 경험에 미치는 효과" 한국HCI학회 학술대회, (2022)',
						english: '김명지, 김효리, 박유림, 이영현, 이한수, 정범영, 송원철, 정동훈. "1인칭 메타버스 게임의 HUD UI와 공간 UI가 사용자 경험에 미치는 효과" 한국HCI학회 학술대회, (2022)',
						japanese: '김명지, 김효리, 박유림, 이영현, 이한수, 정범영, 송원철, 정동훈. "1인칭 메타버스 게임의 HUD UI와 공간 UI가 사용자 경험에 미치는 효과" 한국HCI학회 학술대회, (2022)',
					}[this.language],
					timestamp: '2022. 02.',
					url: "http://hcikorea.org/",
				},
			]
		} 
	}
}
</script>

<style>
</style>