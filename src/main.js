import Vue from 'vue'
import VueRouter from 'vue-router'
import $ from 'jquery'
import 'mint-ui/lib/style.css'
import './assets/css/style.less'
import './assets/font/iconfont.css'
import routes from './config/router'
import Mint from 'mint-ui'
import { MessageBox,Toast,Indicator,Lazyload } from 'mint-ui'

Vue.$messagebox = Vue.prototype.$messagebox = MessageBox
Vue.$toast = Vue.prototype.$toast = Toast
Vue.$indicator = Vue.prototype.$indicator = Indicator
Vue.use(Mint)
Vue.use(VueRouter)

Vue.use(Lazyload, {
	loading: require('./assets/loading-spin.svg'),
	try: 3
})

const router = new VueRouter({
    routes
})

new Vue({ router }).$mount('#app')