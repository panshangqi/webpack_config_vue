<template>
    <div id="component_demo">
        <button v-on:click="openClick">打开弹出层</button>
        <ele-dialog ref="sub_dialog"></ele-dialog>
    </div>
</template>

<script>
    import DialogEx from '@/components/DialogEx/DialogEx.vue'

    export default {
        name: "component_demo",
        components:{
            'ele-dialog': DialogEx
        },
        methods: {
            openClick: function () {
                this.$refs.sub_dialog.showDialog()
            }
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>
