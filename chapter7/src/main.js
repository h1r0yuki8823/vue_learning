import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue({
    el: '#app',

    store,

    rander: h => h(App)
})