import Vue from 'vue'
import App from './App.vue'
import ECharts from "vue-echarts"



Vue.component('v-chart',ECharts)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
