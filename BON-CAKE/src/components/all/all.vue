<template>
	<div class="all">
		<!-- {{msg}} -->
		<ul class="allSeries-wrapper">
			<li class="allSeries-item" id="cat_33" v-for = "(item,index) in bigpic" :key = "index">
				<!-- <a href="/index.php/wap/gallery-33.html"> -->
					<div class="allSeries-pic-wrapper">
						<img class="allSeries-pic" :src="item.picsingle" />
					</div>
				<!-- </a> -->
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'all',
		data() {
			return {
				msg: 'all'
			}
		},
		props:["navpic","bigpic"]
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
ul{
	width: 100%;
}
li{
	width: 100%;
	height: 285px;
	list-style: none;
}
li img{
	width: 375px;
	height: 282px;
}
</style>
