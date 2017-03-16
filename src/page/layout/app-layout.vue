<template>
	<div class="layout-container">
	  <header class="layout-header fixed">
	    <slot name="header"></slot>
	  </header>
	  <main class="layout-content">
	    <slot></slot>
	  </main>
	  <footer class="layout-footer">
	    <slot name="footer"></slot>
	  </footer>
	</div>
</template>
<script>
	export default {
		name : "app-layout"
	}
</script>

<style scoped lang="less">
	.layout-container{
		background: red;
		height: 100%;
		.layout-header{
			background: blue;
			height: 80px;
			line-height: 80px;
			width: 100%;
		}
		.fixed{
			position: fixed;
		}
		.layout-content{
			position: absolute;
			width: 100%;
			top:80px;
			padding: 10px 5px;
			bottom: 60px;
			overflow: auto;
		}
		.layout-footer{
			position: absolute;
			width: 100%;
			height: 60px;
			line-height: 60px;
			left:0;
			bottom: 0;
			background: #96EC90;
		}
	}
</style>
