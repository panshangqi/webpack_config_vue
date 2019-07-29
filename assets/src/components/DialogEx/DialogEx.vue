<template>
    <div id="dialog_ex" v-show="visibled">
        <div class="dialog_box">
            <div class="dialog_header">
                <span class="title">标题</span>
                <span class="close" v-on:click="hideDialog" >&times;</span>
            </div>
            <div class="dialog_content"></div>
            <div class="dialog_footer"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dialog",
        data() {
            return {
                visibled: false
            }
        },
        methods: {
            hideDialog: function () {
                this.visibled = false
            },
            showDialog: function () {
                this.visibled = true
            }
        }
    }
</script>

<style scoped lang="less">
#dialog_ex{
    position: fixed;
    width: 100%;
    height: 100%;
    letf:0;
    top:0;
    z-index: 10000;
    background-color: #00000080;
    transition: background-color 1s ease;
    &:hover{
        background-color: #ff00ff;
    }
    .dialog_box{
        width: 500px;
        height: auto;
        margin: 100px auto;
        background: #fff;
        border-radius: 5px;
        .dialog_header{
            width: 100%;
            height: 45px;
            line-height: 45px;
            border-bottom: 1px solid #ccc;
            .title{
                float: left;
                margin-left: 15px;
            }
            .close{
                float:right;
                margin-right: 15px;
                font-size: 24px;
                &:hover{
                    cursor: pointer;
                    color: #aaa;
                }
            }
        }
        .dialog_content{
            width: 100%;
            min-height: 100px;
        }
        .dialog_footer{
            width: 100%;
            height: 45px;
            line-height: 45px;
            border-top: 1px solid #ccc;
        }
    }
}
</style>
