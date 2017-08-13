<template>
	<body>
		<image-slider class="slider" :images="images"></image-slider>
	</body>
</template>

<style>
.slider {
	height: 300px;
}
</style>

<script>
import ImageSlider from './components/image-slider/image-slider.vue';

export default {
	components: { ImageSlider },
	data() {
		return {
			images: [
				'http://res.cloudinary.com/constgen/image/upload/w_1920,h_570,c_fill/Cars/1411800820_nissangt-r_wm_carreveal_week6_forzahorizon21.jpg',
				'http://res.cloudinary.com/constgen/image/upload/w_1920,h_570,c_fill/Cars/ChevroletCorvetteZO6_MayDLC_ForzaHorizon2_01_WM.jpg',
				'http://res.cloudinary.com/constgen/image/upload/w_1920,h_570,c_fill/Cars/14442c5e-1063-48d9-9850-537615e0333a.jpg.jpg'
			]
		};
	}
};
</script>