<template>
	<div class="page-button">
	   	<mt-button type="default">default</mt-button>
		<mt-button type="primary">primary</mt-button>
		<mt-button type="danger">danger</mt-button>
		
		<mt-button size="small">small</mt-button>
		<mt-button size="large">large</mt-button><br> 
		<mt-button size="normal">normal</mt-button>
		<mt-button disabled>disabled</mt-button>
		<mt-button plain>plain</mt-button>

		<mt-button icon="back">back</mt-button>
		<mt-button icon="more">更多</mt-button>

		<mt-button>
		  <img src="../../assets/100.png" height="20" width="20" slot="icon">
		  带自定义图标
		</mt-button>
		<br>

		<mt-button @click.native="handleClick"  size="large">点击触发 handleClick</mt-button><br>
		<keep-alive>
			<v-hello ref="hello">
				<div slot="s1">{{msg01}}</div>
        		<div slot="s2">{{msg02}}</div>
        		<div>{{msg03}}</div>
        		<div>这里有新的内容01</div>
        		<div>这里有新的内容02</div>
			</v-hello>
		</keep-alive>

		<br>

		<mt-button @click.native="call_child"  size="large">调用子组件的方法</mt-button><br>

		<!-- 监听子组件事件 -->
		<v-prop  :userInfo="userInfo" :my-message="msg01" @increment="accept">12313</v-prop>

		{{printUser}}
	</div>
</template>
<script>
	import Hello from 'components/Hello'
	import Prop from 'components/prop'
    export default {
    	name: 'page-button',
        data() {
			return {
				firstName : '艾',
				lastName : '薪水',
				msg01: "this is parent msg01",
        		msg02: "this is parent msg02",
				msg03: "this is parent msg03",
				userInfo : {
					userName:'admin',
					age : '27',
					password : '123456'
				}
			}
		},
		components : {
			"v-hello" : Hello,
			"v-prop" : Prop
		},
		methods: {
            handleClick () {
            	this.$toast({
				  message: '操作成功',
				  iconClass: 'mintui mintui-success'
				})
            },
            fromSub () {
            	this.$toast({
				  message: '来自hello.vue',
				  iconClass: 'mintui mintui-success'
				})
            },
            call_child () {
            	this.$refs.hello.printText(this.firstName+this.lastName);
            },
            accept ( ) {
            	this.$toast("ok")
            }
		},
		computed : {
			printUser () {
				return this.firstName + this.lastName;
			}
		}
    }
</script>
<style scoped>
	.mintui-success{
		font-size: 40px;
	}
</style>