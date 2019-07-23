<template>
	<div id="app">
		<!-- <img src="./assets/logo.png"> -->
		<!-- <router-view/> -->
		<!-- 引入头部组件 -->
		<div class="roof">
			<roof :roof="roof"></roof>
		</div>

		<div>
			<router-view :slide="slide" :preference="preference" :top="top" :chef="chef" :bigpic="bigpic" :navpic="navpic" :newgood="newgood" :activedd="activedd"></router-view>
		</div>
		<!-- 底部导航 -->
		<div class="nav">
			<div class="singleNav">
				<router-link to="/index" tag="div"><img :src="nav.first" /><br>首页</router-link>
				<router-link to="/all" tag="div"><img :src="nav.allgoods" /><br>所有系列</router-link>
				<router-link to="/newgoods" tag="div"><img :src="nav.newgoods" /><br>新品上市</router-link>
				<router-link to="/activity" tag="div"><img :src="nav.huodong" /><br>最新活动</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import roof from "@/components/roof/roof"
	import axios from "axios"
	export default {
		name: 'App',
		data() {
			return {
				roof: {},
				chef: {},
				preference: {},
				top: {},
				slide:[],
				nav:{},
				
				bigpic:[],
				navpic:[],
				
				newgood:{},
				
				activedd:{}
			}
		},
		created() {
			this.getData()
		},
		methods: {
			getData() {
				axios({
					type: 'get',
					url: 'http://127.0.0.1:888/getData'
				}).then((res) => {
					// console.log(res.data.head)
					this.roof = res.data.head
					this.chef = res.data.chef
					this.preference = res.data.preference
					this.top = res.data.top
					this.slide = res.data.slide
					this.nav = res.data.nav
					
					this.bigpic = res.data.all.bigpic
					this.navpic = res.data.all.navpic
					
					this.newgood = res.data.newgood
					
					this.activedd = res.data.activedd
					
					console.log("aaaaaaaaaaaaaaaaaaa",this.newgood)
					// console.log(this.roof)
				}).catch(err => {
					console.log(err)
				})
			}
		},
		components: {
			roof,
		}
	}
</script>

<style>
	#app {
		overflow-y: scroll;
		background: #f8f8f8;
		overflow: hidden;
	}

	.nav {
		position: fixed;
		bottom: 0;
		width: 100%;
		background: white;
	}

	.singleNav {
		display: flex;
		/* border: solid 1px; */
		text-align: center;
		font-size: 13px;
	}

	.singleNav>div {
		flex: 1;
		height: 50px;
		margin-top: 10px;
	}
	.singleNav img{
		width: 21px;
		height: 20px;
	}
</style>
