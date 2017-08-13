<template>
	<div class="image-slider">
		<div class="slides" :style="{left: scrollPosition}">
			<picture class="slide" v-for="url in images" :key="url">
				<img :src="url" alt="">
			</picture>
		</div>
		<button class="prev" @click="prev"></button>
		<button class="next" @click="next"></button>
	</div>
</template>

<style src="./image-slider.css"></style>

<script>
export default {
	props: {
		images: Array
	},
	data() {
		return {
			index: 0
		};
	},
	computed: {
		scrollPosition() {
			const left = this.index * 100;
			const unit = '%';
			return -left + unit;
		},
		canGoPrev() {
			return this.index > 0;
		},
		canGoNext() {
			return this.index < this.images.length - 1;
		}
	},
	methods: {
		next() {
			if (!this.canGoNext) return;
			this.index += 1;
		},
		prev() {
			if (!this.canGoPrev) return;
			this.index -= 1;
		},
		goTo(index) {
			this.index = index;
		}
	}
};
</script>

