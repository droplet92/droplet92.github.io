<template>
	<div id="portfolio">
		<el-row
			justify="center"
			:gutter="24"
		>
			<div 
				class="item"
				v-for="(item, key) in items"
				v-bind:key="key"
				@click="dialogVisible[key] = true"
			>
				<el-col>
					<img
						:src="item.image"
						width="128"
						height="128"
					/>
				</el-col>
				<el-dialog
					v-model="dialogVisible[key]"
					width="100%"
					:title="item.title"
				>
					<PortfolioContentGame
						:src="item.video"
						:message="item.message"
						:link="item.link"
					/>
				</el-dialog>
			</div>
			<div
				class="item"
				@click="dialogVisible[3] = true"
			>
				<el-col>
					<img
						src="../../public/paper.png"
						width="128"
						height="128"
					/>
				</el-col>
				<el-dialog
					v-model="dialogVisible[3]"
					width="100%"
					title="Publications"
				>
					<PortfolioContentPublications />
				</el-dialog>
			</div>
		</el-row>
	</div>
	<div id="guide">
		<el-link
			href="/"
			:underline="false"
		>
			BACK
		</el-link>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import PortfolioContentGame from '../PortfolioContentGame.vue';
import PortfolioContentPublications from '../PortfolioContentPublications.vue';

const dialogVisible = ref([false, false, false, false]);
const items = [
	{
		image: "abyss.png",
		title: "Abyss Together",
		video: "https://www.youtube.com/embed/IPYLkwYqR6g",
		message: "play password: flamenco",
		link: {
			play: "https://droplet92.itch.io/abyss-together",
			code: undefined,
		},
	},
	{
		image: "art.png",
		title: "Art Auction",
		video: "https://www.youtube.com/embed/m1WwZTX6lhI",
		message: undefined,
		link: {
			play: "https://droplet92.itch.io/art-auction",
			code: "https://github.com/droplet92/ArtAuction",
		},
	},
	{
		image: "yothello.png",
		title: "Yothello",
		video: "https://www.youtube.com/embed/-tg0h3MVXTs",
		message: "Due to copyright issues, some resources in the provided files differ from those in the video.",
		link: {
			play: "https://github.com/droplet92/reversi/releases/download/v1.0.0/reversi-1.0.0.zip",
			code: "https://github.com/droplet92/reversi",
		},
	},
]
</script>

<style scoped>
#portfolio {
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	.item {
		margin: 12px 0;
	}
	.el-col {
		cursor: pointer;
	}
}
#guide {
	position: fixed;
	bottom: 60px;
	width: 100%;
	display: flex;
	justify-content: center;
	.el-link {
		font-size: 24px;
	}
}
</style>