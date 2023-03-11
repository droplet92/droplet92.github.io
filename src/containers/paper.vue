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
					<p>
						{{ paper.writer }}<br />
						{{ paper.title }}<br />
						{{ paper.journal }}
					</p>
					<div>
						<el-icon color="#409EFC">
							<Link />
						</el-icon>
						<el-link :href="paper.url" type="primary">
							한국어(DBpia)
						</el-link>
					</div>
					<div>
						<el-icon color="#409EFC">
							<Link />
						</el-icon>
						<el-link
							:disabled="paper.japanese === undefined"
							:href="paper.japanese"
							type="primary"
						>
							日本語(PDF, Self-translation)
						</el-link>
					</div>
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
					writer: "이한수, 김동주, 이혁준, 황동혁",
					title: {
						korean: "랜섬웨어 대응 및 데이터 유출 보호를 위한 파일 접근 로그 기반 파일 접근 제어 시스템",
						english: "A File Access Control System Based on File Access Logs for Ransomware Response and Data Loss Prevention System",
						japanese: "ランサムウェア対策及び情報漏洩防止のためにファイルアクセスログに基づくファイルアクセス制御システム",
					}[this.language],
					journal: "한국정보과학회 2021 학술발표논문집 2054-2056",
					timestamp: "2021. 06.",
					url: "https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE10583527",
					japanese: "https://github.com/droplet92/droplet92.github.io/blob/master/public/ransomware.pdf",
				},
				{
					writer: "김명지, 김효리, 박유림, 이영현, 이한수, 정범영, 송원철, 정동훈",
					title: {
						korean: "1인칭 메타버스 게임의 HUD UI와 공간 UI가 사용자 경험에 미치는 효과",
						english: "How HUD UI and Spatial UI Affect User Experience in First-Person Metaverse Game",
						japanese: "1人称視点メタバースゲームのHUD UIと空間UIがユーザーエクスペリエンスに及ぼす効果",
					}[this.language],
					journal: "PROCEEDINGS OF HCI KOREA 2022 학술대회 발표 논문집 403-409",
					timestamp: '2022. 02.',
					url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11043849",
					japanese: "https://github.com/droplet92/droplet92.github.io/blob/master/public/metaverse.pdf",
				},
			]
		} 
	}
}
</script>

<style>
</style>