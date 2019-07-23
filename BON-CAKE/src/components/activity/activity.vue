<template>
  <div class="activity">
		<!-- {{msg}} -->
		<slide :activedd="activedd"></slide>
		<goodlist :activedd="activedd"></goodlist>
  </div>
</template>

<script>
	import slide from "@/components/activity/slide"
	import goodlist from "@/components/activity/goodlist"
export default {
  name: 'activity',
  data () {
    return {
      msg: 'activity'
    }
  },
	props:["activedd"],
	components: {
		slide,
		goodlist
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>
