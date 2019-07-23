<template>
  <div class="newgoods">
		<!-- {{msg}} -->
		<slide :newgood="newgood"></slide>
		<goodlist :newgood="newgood"></goodlist>
  </div>
</template>

<script>
	import slide from "@/components/newgoods/slide"
	import goodlist from "@/components/newgoods/goodlist"
export default {
  name: 'newgood',
  data () {
    return {
      msg: 'newgoods'
    }
  },
	props:["newgood"],
	components: {
		slide,
		goodlist
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>
