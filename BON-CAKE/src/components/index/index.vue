<template>
	<div class="index">
		<!-- 引入轮播图组件 -->
		<div class="slideshow">
			<slideshow :slide="slide"></slideshow>
		</div>
		<!-- 今日特惠模块组件 -->
		<div class="preference">
			<preference :preference="preference"></preference>
		</div>
		<!-- top热卖清单组件 -->
		<div class="top">
			<top :top="top"></top>
		</div>
		<!-- 主厨推荐组件 -->
		<div class="chef">
			<chef :chef="chef"></chef>
		</div>
	</div>
</template>

<script>
	import slideshow from "@/components/slideshow/slideshow"
	
	import preference from "@/components/index/preference"
	import top from "@/components/index/top"
	import chef from "@/components/index/chef"
	
	export default {
		name: 'index',
		data() {
			return {
				msg: 'index'
			}
		},
		props: ["slide","preference","top","chef"],
		components: {
			slideshow,
			preference,
			top,
			chef
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
