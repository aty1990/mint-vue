<template>
	<div class="page-button">
	   	<mt-button type="default">default</mt-button>
		<mt-button type="primary">primary</mt-button>
		<mt-button type="danger">danger</mt-button>
		
		<mt-button size="small">small</mt-button>
		<mt-button size="large">large</mt-button>
		<mt-button size="normal">normal</mt-button> 
		<mt-button disabled>disabled</mt-button>
		<mt-button plain>plain</mt-button>

		<mt-button icon="back">back</mt-button>
		<mt-button icon="more">更多</mt-button>

		<mt-button>
		  <img src="../../assets/100.png" height="20" width="20" slot="icon">
		  带自定义图标
		</mt-button>


		<mt-button @click.native="handleClick">点击触发 handleClick</mt-button>

	</div>
</template>
<script>
    export default {
    	name: 'page-button',
        data() {
			return {
				
			}
		},
		methods: {
            handleClick () {
            	this.$toast({
				  message: '操作成功',
				  iconClass: 'mintui mintui-success'
				})
            }
		}
    }
</script>
<style scoped>
	.mintui-success{
		font-size: 40px;
	}
</style>