<template>
    <button id="sa_button" v-on:click="btnClick">
        <slot></slot>
    </button>
</template>

<script>
    import theme from '../theme.js'
    export default{
        name: 'sabutton',
        props: ['type'],
        data() {
            return {
            }
        },
        created() {

        },
        mounted() {
            if(this.type == undefined){
                this.$el.classList.add('default')
            }else if(this.type == 'primary'){
                this.$el.classList.add('primary')
            }else if(this.type == 'success'){
                this.$el.classList.add('success')
            }else if(this.type == 'warning'){
                this.$el.classList.add('warning')
            }else if(this.type == 'danger'){
                this.$el.classList.add('danger')
            }
        },
        methods: {
            btnClick: function () {
                let ci = 0
                
                let timer = setInterval(()=>{
                    ci++
                    this.$el.style.boxShadow = '0 0 '+ci+'px ' + theme.color_alpha(theme.theme_color, 0.8)
                    if(ci>8){
                        this.$el.style.boxShadow = '0 0 0 transparent'
                        if(timer)
                            clearInterval(timer)
                    }
                },40)

            }
        },
        computed: {

        }
    }
</script>
<style scoped lang="less">
    @import "../theme.less";
    .base_btn{
        position: relative;
        border-radius: 3px;
        width: 100px;
        height: 36px;
        outline: none;
        cursor: pointer;
    }
    .default{
        .base_btn;
        background-color: #fff;
        border: 1px solid #ccc;
        color: #444;
        box-shadow: 0 0 0 transparent;
        transition: color 500ms, border-color 500ms;
        &:hover{
            border-color: @theme_color;
            color: @theme_color;
        }
    }
    .primary{
        .base_btn;
        background-color: @theme_color;
        border: 1px solid @theme_color;
        color: #fff;
        box-shadow: 0 0 0 transparent;
        transition: background-color 500ms;
        &:hover{
            background-color: fade(@theme_color,80%);
        }
    }
    .success{
        .base_btn;
        background-color: @theme_color_success;
        border: 1px solid @theme_color_success;
        color: #fff;
        box-shadow: 0 0 0 transparent;
        transition: background-color 500ms;
        &:hover{
            background-color: fade(@theme_color_success,80%);
        }
    }
    .warning{
        .base_btn;
        background-color: @theme_color_warning;
        border: 1px solid @theme_color_warning;
        color: #fff;
        box-shadow: 0 0 0 transparent;
        transition: background-color 500ms;
        &:hover{
            background-color: fade(@theme_color_warning,80%);
        }
    }
    .danger{
        .base_btn;
        background-color: @theme_color_danger;
        border: 1px solid @theme_color_danger;
        color: #fff;
        box-shadow: 0 0 0 transparent;
        transition: background-color 500ms;
        &:hover{
            background-color: fade(@theme_color_danger,80%);
        }
    }
</style>