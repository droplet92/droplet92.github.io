<template>
	<el-row
		justify="center"
		:gutter="20"
	>
		<el-col
			:md="24" :lg="12" :xl="8"
			v-for="(item,key) in list"
			v-bind:key="key"
		>
			<RowItem
				:image="item.image"
				:title="item.title"
				:url="item.url"
				:begin="item.begin"
				:end="item.end"
			/>
		</el-col>
	</el-row>
</template>

<script>
import RowItem from "./RowItem"

export default {
  name: "lhs-grid",
	components: {
		RowItem,
	},
	props: {
		list: Array,
	},
}
</script>

<style scoped>
.item-image {
	width: 100%;
	height: 320px;
	object-fit: cover;
}
</style>