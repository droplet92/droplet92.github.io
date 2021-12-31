<template>
	<el-card shadow="always">
		<el-row>
			<el-image
				class="noselect item-image"
				:src="image"
				fit="cover"
				lazy
			/>
		</el-row>
		<el-row>
			<el-link
				v-if="url"
				:href="url"
				type="primary"
			>
				<h1
					class="noselect item-title"
				>
					{{title}}
				</h1>
			</el-link>
			<h1
				v-else
				class="noselect item-title"
			>
				{{title}}
			</h1>
		</el-row>
		<el-row class='item-period'>
			<span>
				{{period}}	
			</span>
		</el-row>
		<el-row>
			<el-space wrap>
				<el-tag
					class="noselect"
					v-for="(tag,key) in tags"
					v-bind:key="key"
					:type="color[key % 5]"
				>
					<span>{{tag}}</span>
				</el-tag>
			</el-space>
		</el-row>
	</el-card>
</template>

<script>
import moment from "moment"
import * as tags from "../tags"

export default {
  name: "lhs-row-item",
	props: {
		image: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		url: String,
		begin: {
			type: String,
			required: true,
			validator(value) {
				return moment(value).isValid()
			},
		},
		end: {
			type: String,
			required: true,
			validator(value) {
				return moment(value).isValid()
			},
		},
		tags: {
			type: Array,
			validator(value) {
				return value.every((elem) => tags.languages.includes(elem)
						|| tags.techstacks.includes(elem)
						|| tags.concepts.includes(elem)
					)
			},
		},
	},
	data: () => ({
		color: [ "", "success", "info", "warning", "danger" ],
	}),
	computed: {
		period() {
			return (!this.begin)
				? ""
				: `${this.begin} ~ ${this.end}`
		} 
	}
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
	
.item-image {
	width: 100%;
	height: 320px;
}
	
.item-title {
	margin: 4px 0px;	
}
	
.item-period {
	margin-bottom: 8px;
}
</style>