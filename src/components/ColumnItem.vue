<template>
	<el-card class="item-card" shadow="always">
		<el-row justify="center">
			<el-col :span="12">
				<el-row justify="center">
					<el-image
						class="noselect item-image"
						:src="image"
						fit="cover"
						lazy
					/>
				</el-row>
				<el-row justify="center">
					<h1 class="noselect">
						{{name}}
					</h1>
				</el-row>
				<el-row justify="center">
					<span>
						{{description}}
					</span>
				</el-row>
			</el-col>
		</el-row>
	</el-card>
</template>

<script>
export default {
  name: "lhs-column-item",
	props: {
		image: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
}
</script>

<style scoped>
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
	
.item-card {
	background-color: var(--lhs-primary-color);
	margin-top: 10vh;
	margin-bottom: 20vh;
}

.item-image {
	width: 260px;
	height: 260px;
	margin-top: 25vh;
}
</style>