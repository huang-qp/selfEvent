<template>
	<div class="slideshow">
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="(item,index) in slide" :key="index"><img :src="item" /></mt-swipe-item>
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
		name: 'slideshow',
		data() {
			return {
				msg: 'slideshow'
			}
		},
		props: ["slide"]
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.slideshow {
		width: 100%;
		height: 306px;
		text-align: center;
	}

	.mint-swipe-item img {
		width: 100%;
		height: 306px;
	}
</style>
