<template>
    <div id="component_demo">
        <button v-on:click="openClick">打开弹出层</button>
        <sa-button>Default</sa-button>
        <sa-button type="primary">Primary</sa-button>
        <sa-button type="success">Success</sa-button>
        <sa-button type="warning">Warning</sa-button>
        <sa-button type="danger">Danger</sa-button>
        <sa-dialog ref="sub_dialog">
            <div style="height:200px;">

            </div>
        </sa-dialog>
    </div>
</template>

<script>
    //import DialogEx from '@/components/DialogEx/DialogEx.vue'

    export default {
        name: "component_demo",
        components:{
            //'v-dialog': DialogEx
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
#component_demo{
    padding: 20px;
}
</style>
