<template>
	<el-card shadow="never">
		<ColumnItem
			image="https://avatars.githubusercontent.com/u/31408641?v=4"
			:name="name[language]"
			:description="greeting[language]"
		/>
	</el-card>
</template>

<script>
import ColumnItem from "../components/ColumnItem"
	
export default {
	name: "introduction",
	components: {
		ColumnItem,
	},
	props: {
		language: String,
	},
	data: () => ({
		name: {
			korean: "이한수",
			english: "이한수 (Hansu Lee)",
			japanese: "이한수 (Lee Hansu)"
		},
		greeting: {
			korean: "안녕하세요!",
			english: "Hello!",
			japanese: "こんにちは!",
		}
	})
}
</script>

<style scoped>
</style>