<template>
	<el-card shadow="never">
		<p>
			{{message[language]}}
		</p>
	</el-card>
</template>

<script>
export default {
  name: "thankyou",
	props: {
		language: String,
	},
	data: () => ({
		message: {
			korean: "감사합니다",
			english: "Thank you",
			japanese: "ありがとうございます",
		},
	}),
}
</script>

<style scoped>
</style>