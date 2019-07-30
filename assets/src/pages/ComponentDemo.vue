<template>
    <div id="component_demo">
        <button v-on:click="openClick">打开弹出层</button>
        <v-dialog ref="sub_dialog">
            <div>
                123456
            </div>
        </v-dialog>
    </div>
</template>

<script>
    import DialogEx from '@/components/DialogEx/DialogEx.vue'

    export default {
        name: "component_demo",
        components:{
            'v-dialog': DialogEx
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
