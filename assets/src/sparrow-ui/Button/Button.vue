<template>
    <button id="sa_button" v-on:click="btnClick" type="button">
        <slot></slot>
    </button>
</template>

<script>
    import Theme from '../theme.js'
    let color_map = {
        'default': Theme.theme_color,
        'primary': Theme.theme_color,
        'success': Theme.theme_color_success,
        'warning': Theme.theme_color_warning,
        'danger': Theme.theme_color_danger
    }
    export default{
        name: 'sabutton',
        props: ['type', 'empty', 'round','onChange'],
        data() {
            return {
                btn_type: this.type,
                btn_empty: this.empty,
                btn_round: this.round
            }
        },
        created() {

        },
        mounted() {
            this.btn_type = this.btn_type || 'default'
            for(let _type in color_map){
                if(_type === this.btn_type){
                    this.$el.classList.add(_type)
                    if(this.empty === ''){
                        this.$el.style.backgroundColor = Theme.color_alpha(color_map[_type], 0.15)
                        this.$el.style.color = color_map[_type]
                    }
                    if(this.round === ''){
                        this.$el.style.borderRadius = '50px'
                    }
                    break
                }
            }
        },
        methods: {
            btnClick: function () {
                let ci = 0
                let borderColor = color_map[this.btn_type]
                console.log('click')
                let timer = setInterval(()=>{
                    ci++
                    this.$el.style.boxShadow = '0 0 '+ci+'px ' + Theme.color_alpha(borderColor, 0.8)
                    if(ci>8){
                        this.$el.style.boxShadow = '0 0 0 transparent'
                        if(timer)
                            clearInterval(timer)
                    }
                },40)
                console.log(this.onChange)
                this.onChange()
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
        min-width: 100px;
        padding-left: 15px;
        padding-right: 15px;
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