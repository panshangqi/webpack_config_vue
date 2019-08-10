<template>
    <div id="dialog_ex" v-show="visibled">
        <div class="dialog_box" id="dialog_box">
            <div class="dialog_header">
                <span class="title">{{title}}</span>
                <span class="close" v-on:click="hideDialog" >&times;</span>
                <div style="clear:both"></div>
            </div>
            <div class="dialog_content">
                <slot></slot>
            </div>
            <div class="dialog_footer">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sa-dialog",
        data() {
            return {
                visibled: false,
                title: '标题'
            }
        },
        methods: {
            hideDialog: function () {
                document.getElementById('dialog_ex').style.backgroundColor = '#00000000'
                document.getElementById('dialog_box').style.opacity = '0.0'
                document.getElementById('dialog_box').style.marginTop = '50px'
                setTimeout( () => {
                    this.visibled = false
                },500)
            },
            showDialog: function () {
                this.visibled = true
                setTimeout(function () {
                    document.getElementById('dialog_ex').style.backgroundColor = '#000a0080'
                    document.getElementById('dialog_box').style.opacity = '1.0'
                    document.getElementById('dialog_box').style.marginTop = '110px'
                }, 110)
            },
            setDialogTitle: function (_title) {
                this.title = _title
            }
        }
    }
</script>

<style scoped lang="less">
#dialog_ex{
    position: fixed;
    width: 100%;
    height: 100%;
    left:0;
    top:0;
    margin: 0;
    z-index: 10000;
    background-color: #00000000;
    transition: background-color 500ms;
    .dialog_box{
        width: 500px;
        height: auto;
        margin: 50px auto;
        background: #fff;
        border-radius: 5px;
        opacity: 0.0;
        transition: opacity 500ms, margin-top 400ms;
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
