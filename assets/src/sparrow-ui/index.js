import Dialog from './Dialog/Dialog.vue'
import Button from './Button/Button.vue'
import Menu from './Menu/Menu.vue'
export default {
    install: function (Vue) {
        Vue.component('sa-dialog', Dialog)
        Vue.component('sa-button', Button)
        Vue.component('sa-menu', Menu)
    }
}