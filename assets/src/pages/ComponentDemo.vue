<template>
    <div id="component_demo">
        <div>
            <sa-button v-on:onClick="openClick">打开弹出层</sa-button>
        </div>
        <br/>
        <div>
            <sa-button >Default</sa-button>
            <sa-button type="primary">Primary</sa-button>
            <sa-button type="success">Success</sa-button>
            <sa-button type="warning">Warning</sa-button>
            <sa-button type="danger">Danger</sa-button>
        </div>
        <br/>
        <div>
            <sa-button>Default</sa-button>
            <sa-button type="primary" empty>Primary</sa-button>
            <sa-button type="success" empty>Success</sa-button>
            <sa-button type="warning" empty>Warning</sa-button>
            <sa-button type="danger" empty>Danger</sa-button>
        </div>
        <br/>
        <div>
            <sa-button round>Default</sa-button>
            <sa-button type="primary" round>Primary</sa-button>
            <sa-button type="success" round>Success</sa-button>
            <sa-button type="warning" round>Warning</sa-button>
            <sa-button type="danger" round>Danger</sa-button>
        </div>
        <br/>
        <div>
            <sa-button round>Default</sa-button>
            <sa-button type="primary" empty round>Primary</sa-button>
            <sa-button type="success" empty round>Success</sa-button>
            <sa-button type="warning" empty round>Warning</sa-button>
            <sa-button type="danger" empty round>Danger</sa-button>
        </div>
        <sa-dialog ref="sub_dialog">
            <div style="height:200px;">

            </div>
        </sa-dialog>
        <div>
            <sa-menu v-bind:dataSource="menuData">

            </sa-menu>
        </div>
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
            return {
                menuData:[
                    {
                        key: '1',
                        name: '组件',
                        submenus:[
                            {
                                key: '10',
                                name: '通用',
                                submenus: [
                                    {key: '110', name: 'Button'},
                                    {key: '111', name: 'Icon' }
                                ]
                            },
                            {
                                key: '11',
                                name: '数据录入',
                                submenus: [
                                    {key: '110', name: 'Input'},
                                    {key: '111', name: 'Radio'}
                                ]
                            },
                            {
                                key: '12',
                                name: '数据展示',
                                submenus: [
                                    {key: '120', name: '气泡'},
                                    {key: '121', name: '标签'},
                                    {key: '122', name: '提示'}
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>
#component_demo{
    padding: 20px;
}
</style>
