<template>
	<div id="content">
		<el-row justify="start">
			<div
				id="item"
				v-for="(item, key) in items"
				v-bind:key="key"
			>
				<h3>{{item.title}}</h3>
				<p>{{item.authors}}</p>
				<p>{{item.paper}}</p>
				<el-row>
					<el-col :span="5">
						<el-link
							target="_blank"
							:href="item.link.db"
							:underline="false"
						>
							DBpia
						</el-link>
					</el-col>
					<el-col :span="5">
						<el-link
							target="_blank"
							:href="item.link.pdf"
							:underline="false"
						>
							PDF
						</el-link>
					</el-col>
					<el-col :span="5" v-if="item.link.code">
						<el-link
							target="_blank"
							:href="item.link.code"
							:underline="false"
						>
							CODE
						</el-link>
					</el-col>
				</el-row>
			</div>
		</el-row>
	</div>
</template>

<script setup>
const items = [
	{
		title: "1인칭 메타버스 게임의 HUD UI와 공간 UI가 사용자 경험에 미치는 효과",
		authors: "김명지, 김효리, 박유림, 이영현, 이한수, 정범영, 송원철, 정동훈",
		paper: "PROCEEDINGS OF HCI KOREA 2022 학술대회 발표 논문집 403-409",
		link: {
			db: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11043849",
			pdf: "metaverse.pdf",
			code: undefined,
		},
	},
	{
		title: "랜섬웨어 대응 및 데이터 유출 보호를 위한 파일 접근 로그 기반 파일 접근 제어 시스템",
		authors: "이한수, 김동주, 이혁준, 황동혁",
		paper: "한국정보과학회 2021 학술발표논문집 2054-2056",
		link: {
			db: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE10583527",
			pdf: "ransomware.pdf",
			code: "https://github.com/UHD-TERUTEN",
		},
	},
]
</script>

<style scoped>
#content {
	max-width: 720px;
	text-align: start;
	#item {
		width: 100%;
		padding: 16px 16px;
		h3, p {
			margin-block-start: 0.5em;
			margin-block-end: 0.5em;
		}
		.el-link {
			--el-link-text-color: var(--font-blue);
			--el-link-hover-text-color: var(--font-blue-accent);
			font-size: 20px;
		}
	}
}
</style>