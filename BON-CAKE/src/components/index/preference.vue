<template>
	<div class="preference">
		<!-- {{preference}} -->
		<div class="preference-left">
			<p><span><img :src="preference.star" /></span><span>今日特惠</span></p>
			<p>距离结束还有</p>
			<p>3天</p>
			<p v-for="(item,i) in preference.preferencegoods" :key="item.i">¥{{item.price}}/{{item.size}} <span>原价 : ¥{{item.original_price}}</span></p>
		</div>
		<div class="preference-right">
			<img :src="preference.preferencepic" />
		</div>
	</div>
</template>

<script>
	export default {
		name: 'preference',
		props: ["preference"],
		data() {
			return {
				data: {}
			}
		},
	}
</script>

<style scoped>
	.preference {
		display: flex;
		justify-content: space-around;
		/* border: solid 1px; */
		background: white;
		font-size: 12px;
		padding-top:13px ;
		padding-bottom: 13px;
	}

	.preference-right img {
		width: 125px;
		height: 125px;
	}
	
	.preference-left img{
		width: 13px;
		height: 13px;
	}
	.preference-left p:nth-child(4){
		font-size: 14px;
		color: red;
	}
	.preference-left p:nth-child(4) span{
		font-size: 13px;
		color: #ccc;
		text-decoration: line-through;
	}
</style>
