<template>
    <div id="app">
        <div class="page-header">
            <img class="logo" src="../imgs/favicon.png">
            <span class="logo_name">Sparrow-UI</span>
            <div class="temp-nav">
                <router-link to="/">首页</router-link>
                <router-link to="/about">关于</router-link>
                <router-link to="/example">用例</router-link>
                <router-link to="/component_demo">组件</router-link>
                <router-link to="/menu_demo">菜单</router-link>
            </div>
        </div>
        <!-- 路由匹配到的组件将显示在这里 -->
        <div class="page-side-nav">
            <sa-menu :dataSource="menuData" :width="200" v-on:onSelect="menuOnClick"/>
        </div>
        <div class="page-content">
            <router-view style="padding: 20px"/>
        </div>

    </div>
</template>

<script>
    //import SaMenu from "../sparrow-ui/Menu/Menu";

    export default {
        //components: {SaMenu},
        name: 'App',
        data () {
            return {
                menuData:[
                    {key: 'primary', name: '前言', submenus:[{key: 'install', name: '安装'}]},
                    {
                        key: 'component',
                        name: '组件',
                        submenus:[
                            {key: 'button', name: '按钮', route: '/button_demo'},
                            {key: 'dialog', name: '弹出层'}
                        ]
                    }
                ]
            }
        },
        methods:{
            menuOnClick: function (item) {
                if(item.route)
                    this.$router.push({'path': item.route})
                else
                    console.log('menu route: '+ item.route)
            }
        }
    }
</script>

<style lang="less">

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #333;
        .page-header{
            height: 80px;
            border-bottom: 1px solid #ccc;
            .logo{
                //animation: que 4s linear infinite;
                width: 70px;
                margin-left: 20px;
                margin-top: 5px;

            }
            .logo_name{
                display: inline-block;
                font-weight: bold;
                font-size: 26px;
                color: #666;
                vertical-align: top;
                margin-top: 24px;
                margin-left: 10px;
            }
            .temp-nav{
                display: inline-block;
                margin-left: 20px;
            }
        }
        .page-side-nav{
            width: 200px;
            float: left;
            min-height: 300px;
        }
        .page-content{
            min-height: 300px;
            margin-left: 200px;
        }


    }
    body, html{
        padding: 0;
        margin: 0;
    }

    @keyframes que {
        0%{
            transform: rotateY(0deg);
        }
        100%{
            transform: rotateY(360deg);
        }
    }

</style>
