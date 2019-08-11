<template>
    <div id="menu_demo">
        <sa-menu
            v-bind:dataSource="menuData"
            v-on:onSelect="MenuItemClick"
            v-bind:width=220
            v-bind:rowHeight="40"
        />
    </div>
</template>

<script>
    //import DialogEx from '@/components/DialogEx/DialogEx.vue'

    export default {
        name: "menu_demo",
        components:{
            //'v-dialog': DialogEx
        },
        methods: {
            MenuItemClick: function (item) {
                console.log(item)
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
                                    {key: '110', name: 'Button', submenus: [{key: '1110', name: 'Small Button'}]},
                                    {
                                        key: '111',
                                        name: 'Icon',
                                        submenus: [
                                            {
                                                key: '1110',
                                                name: '箭头'
                                            },
                                            {
                                                key: '1111',
                                                name: '缓冲'
                                            },
                                            {
                                                key: '1111',
                                                name: '进度'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: '11',
                                name: '数据录入',
                                submenus: [
                                    {
                                        key: '110',
                                        name: 'Input',
                                        submenus: [
                                            {
                                                key: '1101',
                                                name: '搜索框'
                                            },
                                            {
                                                key: '1101',
                                                name: '日期选择器'
                                            },
                                            {
                                                key: '1101',
                                                name: '文本输入框'
                                            }
                                        ]
                                    },
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
    #menu_demo{

    }
</style>
