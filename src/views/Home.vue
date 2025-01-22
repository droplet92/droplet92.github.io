<template>
	<div id="cv">
		<el-link
			target="_blank"
			href="cv.pdf"
			:underline="false"
		>
			CV
		</el-link>
	</div>
	<div id="home">
		<video
			width="600" height="400"
			playsinline autoplay loop muted
			@dragstart.prevent @contextmenu.prevent
		>
			<source
				src="../../public/hello.mp4"
				type="video/mp4"
			/>
			Your browser does not support the video tag.
		</video>
	</div>
	<div id="guides">
		<el-row justify="center">
			<el-col
				class="col"
				:span="8"
			>
				<el-link
					class="link"
					href="/portfolio"
					:underline="false"
				>
					PORTFOLIO
				</el-link>
			</el-col>
			<el-col
				class="col"
				:span="8"
			>
				<el-link
					href="/about"
					:underline="false"
				>
					ABOUT
				</el-link>
			</el-col>
		</el-row>
	</div>
</template>

<style scoped>
#cv {
	position: fixed;
	top: 60px;
	width: 100%;
	display: flex;
	justify-content: center;
	.el-link {
		--el-link-text-color: var(--font-white);
		--el-link-hover-text-color: var(--font-white-accent);
		font-size: 24px;
	}
}
#home {
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	video {
		display: block;
	}
}
#guides {
	position: fixed;
	bottom: 60px;
	width: 100%;
	display: flex;
	justify-content: center;
	.el-row {
		width: 600px;
		.el-link {
			--el-link-text-color: var(--font-white);
			--el-link-hover-text-color: var(--font-white-accent);
			font-size: 24px;
		}
	}
}
</style>