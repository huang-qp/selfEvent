<template>
  <div class="roof">
		<div class="address">
			<span><img :src="roof.addresspic"/></span>
			<select name="" id="">
				<option value="">北京市</option>
				<option value="">上海市</option>
				<option value="">天津市</option>
				<option value="">哈尔滨市</option>
				<option value="">沈阳市</option>
				<option value="">大连市</option>
				<option value="">杭州市</option>
			</select>
		</div>
		<div class="logo">
			<img :src="roof.logo" />
		</div>
		<div class="shopcarpic">
			<img :src="roof.shopcarpic" />
		</div>
		<div class="optionspic">
			<img :src="roof.optionspic" />
		</div>
  </div>
</template>

<script>
export default {
  name: 'roof',
	props:["roof"],
  data () {
    return {
      
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.roof{
		height: 50px;
		/* border: solid 1px; */
		display: flex;
		justify-content: space-around;
		line-height: 50px;
	}

	.address img{
		width: 20px;
		height: 20px;
	}
	
	.logo img{
		width: 114.5px;
		height: 30.67px;
		vertical-align: middle;
	}
	.shopcarpic img{
		width: 19.5px;
		height: 17.5px;
	}
	.optionspic img{
		width: 16px;
		height: 13px;
	}
</style>
