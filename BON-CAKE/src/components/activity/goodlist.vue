<template>
	<div class="goodlist">
			<div class="wapper">
				<div class="singlegoods" v-for="(item,index) in activedd.goods" :key="index">
					<p><img :src="item.pic" /></p>
					<p>{{item.name}}</p>
					<span class="engname">{{item.engname}}</span>
					<img :src="item.labelpic"  class="labelpic"/>
					<span>¥{{item.price}}/{{item.size}}</span>
					<img :src="item.shopcarpic" class="shopcarpic"/>
				</div>
			</div>
		</div>
</template>

<script>

	export default {
		name: 'goodlist',
		data() {
			return {
				msg: 'goodlist'
			}
		},
		props: ["activedd"]
	}
</script>
<style scoped>
	.goodlist{
		background: white;
	}
	.slide {
		width: 100%;
		height: 306px;
		text-align: center;
	}

	.mint-swipe-item img {
		width: 100%;
		height: 306px;
	}
	
	.singlegoods img{
		width: 168px;
		height: 168px;
	}
 .engname{
		display: inline-block;
		width: 68px;
		overflow:hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.wapper{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.wapper .labelpic{
		width: 7px;
		height: 10px;
	}
	.wapper .shopcarpic{
		width: 11px;
		height: 10px;
	}
</style>

