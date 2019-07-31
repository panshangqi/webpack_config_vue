import Dialog from './Dialog/Dialog.vue'
import Button from './Button/Button.vue'
export default {
    install: function (Vue) {
        Vue.component('sa-dialog', Dialog)
        Vue.component('sa-button', Button)
    }
}