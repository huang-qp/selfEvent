<template>
	<div class="chef">
		<!-- {{chef}} -->
		<div class="cheftitle">
			主厨推荐
		</div>
		<div class="chefpic">
			<img :src="chef.chefpic" />
		</div>
		<div class="chefgoods" ref="chefgoods">
			<div class="wapper" ref="wapper">
				<div class="singlegoods" v-for="(item,index) in chef.chefgoods" :key="index">
					<p><img :src="item.pic" /></p>
					<p>{{item.name}}</p>
					<p>{{item.engname}}</p>
					<p>{{item.price}}/{{item.size}}</p>
				</div>
			</div>
		</div>
		<div class="moregoods">
			全部蛋糕>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name: 'chef',
		props: ["chef"],
		data() {
			return {

			}
		},
		mounted() {
			//等到內容將div撑开之后，在对better-scroll的实例初始化
			//初始化的时机很重要
			this.$nextTick(() => {
				this.scrollx(); //商家实景的横向滚动
			});
		},
		methods: {
			scrollx() {
				let width = 151 * 6;
				this.$refs.wapper.style.width = width + 'px';
				this.$nextTick(() => {
					if (!this.picScroll) {
						this.picScroll = new BScroll(this.$refs.chefgoods, {
							scrollX: true,
							eventPassthrough: "vertical" //忽略竖直方向的滚动
						});
					} else {
						this.picScroll.refresh();
					}
				})
			}
		}
	}
</script>

<style scoped>
	.chef {
		background: white;
		margin-top: 10px;
		margin-bottom: 80px;
	}

	.cheftitle {
		width: 100%;
		height: 50px;
		text-align: center;
		line-height: 50px;
	}

	.chefpic img {
		width: 100%;
		height: 208px;
	}

	.chefgoods {
		/* overflow-x: scroll; */
	}

	.wapper {
		display: flex;
		text-align: center;
		height: 192px;
		/* 		width: 100%;
		overflow-x: scroll; */
	}

	.singlegoods {
		height: 192px;
		line-height: 5px;
		font-size: 12px;
	}

	.singlegoods img {
		width: 125px;
		height: 125px;
		padding-left: 13px;
		padding-right: 13px;
	}

	.singlegoods p:nth-child(4) {
		color: #d0ac6a;
	}

	.moregoods {
		width: 100%;
		height: 40.5px;
		text-align: center;
		padding-top: 20px;
	}
</style>
