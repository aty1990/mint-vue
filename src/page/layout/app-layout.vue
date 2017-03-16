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
	import 'assets/css/layout.less'
	export default {
		name : "app-layout"
	}
</script>

<style lang="less">
	
</style>
