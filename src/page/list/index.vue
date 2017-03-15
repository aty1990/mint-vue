<style scoped>
	
</style>
<template>
	<div>
		<mt-button @click.native="toast">toast</mt-button>
		<mt-button @click.native="startHacking">加载中</mt-button>

	    <mt-button @click.native="actionsheet">Actionsheet</mt-button>
	    <mt-actionsheet
	      :actions="actions"
	      v-model="sheetVisible">
	    </mt-actionsheet>
		
		<mt-button @click.native="open('picker1')">DatetimePicker</mt-button>

		<mt-datetime-picker
	      ref="picker1"
	      v-model="value"
	      @confirm="handleChange">
	    </mt-datetime-picker>

	    <mt-switch v-model="value1" @change="switch_plug">开关</mt-switch>

	    <mt-checklist
	      class="page-part"
	      title="复选框列表"
	      v-model="value2"
	      :options="options1">
	    </mt-checklist>
		
		<router-link to="/home">
			<mt-cell title="表单" value="这是描述"></mt-cell>
		</router-link>

		<router-link to="/tabbar">
			<mt-cell title="tabbar" value="tabbar"></mt-cell>
		</router-link>

		<router-link to="/navbar">
			<mt-cell title="navbar" value="navbar"></mt-cell>
		</router-link>

		<router-link to="/button">
			<mt-cell title="button" value="button"></mt-cell>
		</router-link>

		<router-link to="/lazyload">
			<mt-cell title="lazyload" value="延迟加载"></mt-cell>
		</router-link>

	</div>
</template>
<script>
    export default {
    	name : 'list',
        data() {
			return {
				value : null,
				value1 : true,
				value2: [],
				sheetVisible : false,
				actions : [{
					name:"上海",
					id :1,
					method (){
						console.log(this.id);
					}
				},{
					name:"北京",
					id :2,
					method (){
						console.log(this.id);
					}
				}]
			}
		},
		methods: {
           	toast (){
           		this.$toast({message: '提示',position: 'bottom',duration: 2000})
           	},
           	startHacking () {
           		this.$indicator.open({
				  text: '加载中...',
				  spinnerType: 'fading-circle'
				})
           	},
           	open(picker){
           		this.$refs[picker].open();	
           	},
           	handleChange(value) {
		        this.$toast({
		          message: '已选择 ' + value.toString(),
		          position: 'bottom'
		        });
		    },
		    actionsheet () {
		    	this.sheetVisible = ! this.sheetVisible
		    },
		    switch_plug(event){
		    	console.log(event);
		    }
		},
		created() {
    		this.options1 = ['选项A', '选项B', '选项C'];
		}
    }
</script>