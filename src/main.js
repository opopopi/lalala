//导入第三方包
import Vue from 'vue';

//导入根组件
import AppComponent from './component/App.vue'

new Vue({
    el:'#app',
    // render: function(c) {
    //     reutrn c()
    // } 
    render:c=>c(AppComponent)
})