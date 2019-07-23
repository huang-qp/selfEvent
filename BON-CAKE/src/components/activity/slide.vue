<template>
	<div class="slide">
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="(item,index) in activedd.slide" :key="index"><img :src="item.slidepic" /></mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	import {
		Swipe,
		SwipeItem
	} from 'mint-ui';
	import Vue from 'vue'
	import "mint-ui/lib/style.css"
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	export default {
		name: 'slide',
		data() {
			return {
				msg: 'slide'
			}
		},
		props: ["activedd"]
	}
</script>
<style scoped>
	.slide {
		width: 100%;
		height: 306px;
		text-align: center;
	}

	.mint-swipe-item img {
		width: 100%;
		height: 306px;
	}
</style>

