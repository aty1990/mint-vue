<template>
	<div class="page-navbar">
	    <div class="page-title">Navbar</div>
	    <mt-navbar class="page-part" v-model="selected">
	      <mt-tab-item id="1">选项一</mt-tab-item>
	      <mt-tab-item id="2">选项二</mt-tab-item>
	      <mt-tab-item id="3">选项三</mt-tab-item>
	    </mt-navbar>
	    <!-- <div>
	      <mt-cell class="page-part" title="当前选中">{{ selected }}</mt-cell>
	    </div> -->
	    <mt-tab-container v-model="selected">
	      <mt-tab-container-item id="1">
	        <mt-cell v-for="n in 10" :title="'内容 ' + n" />
	      </mt-tab-container-item>
	      <mt-tab-container-item id="2">
	        <mt-cell v-for="n in 4" :title="'测试 ' + n" />
	      </mt-tab-container-item>
	      <mt-tab-container-item id="3">
	        <mt-cell v-for="n in 6" :title="'选项 ' + n" />
	      </mt-tab-container-item>
	    </mt-tab-container>
	</div>
</template>
<script>
    export default {
    	name: 'page-navbar',
        data() {
			return {
				selected: '1'
			}
		},
		methods: {
            
		}
    }
</script>
<style scoped>
	.item {
	    display: inline-block;
	}
	.nav {
	    padding: 10px;
	}
	.link {
	    color: inherit;
	    padding: 20px;
	    display: block;
	}
	.mint-navbar .mint-tab-item.is-selected{
		margin-bottom:0;
	}
</style>