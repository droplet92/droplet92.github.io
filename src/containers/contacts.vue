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
			<el-card shadow="never" style="width: 190px">
				<el-row justify="start">
					<el-icon class="item-icon">
						<Message />
					</el-icon>
					<el-link
						href="mailto:lhs1438@gmail.com"
						type="primary"
						:underline="false">
						{{email}}
					</el-link>
				</el-row>
				<el-row justify="start">
					<img
						class="item-icon"
						width="16"
						height="16"
						alt="Instagram"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Instagram.svg/512px-Instagram.svg.png">
					<el-link
						:href="instagram_url"
						type="primary"
						:underline="false">
						{{instagram}}
					</el-link>
				</el-row>
			</el-card>
		</el-row>
	</el-card>
</template>

<script>
export default {
  name: "contacts",
	props: {
		language: String,
	},
	data: () => ({
		title: {
			korean: "연락처",
			english: "Contacts",
			japanese: "連絡先",
		},
		email: "lhs1438@gmail.com",
		instagram: "@hansu.m3u8",
		instagram_url: "https://www.instagram.com/hansu.m3u8"
	}),
}
</script>

<style scoped>
.item-icon {
	margin-right: 2pt;
}

.el-link {
	font-size: 16px;
}
</style>