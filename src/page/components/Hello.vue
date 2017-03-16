<template>
	<div class="page-button">

		{{text}} <br>

		<mt-button type="primary" @click.native="callParentFn"  size="large">调用父组件方法</mt-button><br>

		<mt-button type="primary" @click.native="getChidText"  size="large">获取子元素内容</mt-button><br>

		<div ref="cantair" id="cantair">
			<p class="text">12311111111111111</p>
		</div>

		<div>the two items following is child msg:</div>
	    <div>{{cmsg_01}}</div>
	    <div>{{cmsg_02}}</div>
		<slot name="s1">solt 1</slot>
		<slot>如果v-hello没有分发内容，这里将会被显示</slot>
		<slot name="s2">solt 1</slot>

	</div>
</template>
<script>
    export default {
    	name: 'page-hello',
        data() {
			return {
				text : "hello.vue",
				cmsg_01: "this is child msg_01",
            	cmsg_02: "this is child msg_02"
			}
		},
		methods: {
            callParentFn () {
            	this.$parent.fromSub()
            },
            printText ( text ) {
            	this.$messagebox("提示",text)
            },
            getChidText () {
            	// 1：使用jQuery获取
            	console.log( $(".text").html() )
            	// 2：使用vue的refs获取
            	this.$toast(this.$refs.cantair.querySelectorAll('.text')[0].innerHTML)
            }
		}
    }
</script>
<style scoped>
	
</style>