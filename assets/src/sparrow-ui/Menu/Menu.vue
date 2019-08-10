<template>
    <div id="sa_menu">

    </div>
</template>

<script>
    export default{
        name: 'sa-menu',
        props: ['dataSource'],
        data() {
            return {
                rowHeight: 40,
                tree_index: 0,
                tree_pre: {},
                active_id: null,
                data_source: this.dataSource
            }
        },
        created(){

        },
        mounted(){
            console.log(this.data_source)
            let root = document.createElement('ul')
            root.style.width = '200px'
            this.$el.appendChild(root)
            this.renderList(root, this.data_source, 10, 0)
            //设置箭头位置
            let arrowEles = document.getElementById('sa_menu').getElementsByClassName('arrow_right')
            for(let ele of arrowEles){
                ele.style.top = ((this.rowHeight - 10)/2) + 'px'
            }
            let ulEles = document.getElementById('sa_menu').getElementsByTagName('ul')
            for(let ele of ulEles){
                let ulHeight = ele.clientHeight || ele.offsetHeight
                ele.style.height = ulHeight + 'px'
                ele.setAttribute('ulHeight', ulHeight)
            }
            console.log(this.tree_pre)
        },
        methods:{
            renderList: function($ul, lists, marginLeft, ele_id){
                for(let sub_item of lists){
                    this.tree_index++
                    let span_id = 'menu-span-' + this.tree_index
                    this.tree_pre[this.tree_index+''] = ele_id

                    if(sub_item.submenus ){
                        let li = document.createElement('li')
                        let span = document.createElement('span')
                        span.innerHTML = sub_item.name
                        span.style.paddingLeft = marginLeft + 'px'
                        span.style.height = this.rowHeight + 'px'
                        span.style.lineHeight = this.rowHeight + 'px'
                        span.classList.add('fork')
                        span.setAttribute('id', span_id)
                        span.setAttribute('sid', this.tree_index)

                        //right arrow
                        let div = document.createElement('div')
                        div.classList.add('arrow_right')
                        span.appendChild(div)
                        li.appendChild(span)
                        let ul = document.createElement('ul')

                        li.appendChild(ul)
                        $ul.appendChild(li)

                        //Event
                        span.onmouseenter = function (ev) {
                            this.classList.add('span_hover')
                            this.children[0].classList.add('arrow_right_hover')
                        }
                        span.onmouseleave = function (ev) {
                            this.classList.remove('span_hover')
                            this.children[0].classList.remove('arrow_right_hover')
                        }
                        span.onclick = this.itemClick;

                        marginLeft += 20
                        this.renderList(ul, sub_item.submenus, marginLeft, this.tree_index)
                        marginLeft -= 20
                    }else{
                        let span = document.createElement('span')
                        let li = document.createElement('li')
                        li.appendChild(span)
                        //Event
                        span.setAttribute('id', span_id)
                        span.setAttribute('sid', this.tree_index)

                        //Event
                        span.onmouseenter = function (ev) {
                            this.classList.add('span_hover')
                        }
                        span.onmouseleave = function (ev) {
                            this.classList.remove('span_hover')
                        }
                        span.onclick = (event) => {
                            let $span = event.target
                            if(this.active_id){
                                let $old_span = document.getElementById('menu-span-'+this.active_id)
                                $old_span.classList.remove('leaf_active')
                            }
                            this.active_id = $span.getAttribute('sid')
                            $span.classList.add('leaf_active')
                            //console.log($span.innerHTML, $span.getAttribute('sid'))

                        }
                        span.classList.add('leaf')
                        span.innerHTML = sub_item.name
                        span.style.paddingLeft = marginLeft + 'px'
                        span.style.height = this.rowHeight + 'px'
                        span.style.lineHeight = this.rowHeight + 'px'
                        $ul.appendChild(li)

                    }

                }
            },
            itemClick: function (event) {
                let $span = event.target
                console.log($span)
                if($span.classList.contains('arrow_right')){
                    $span = $span.parentNode
                }
                //找到和span同级的ul进行折叠
                let childs = $span.parentNode.children
                if(childs.length < 1)
                    return
                let $UL = childs[1]
                let ulheight = parseInt($UL.style.height)
                let orgHeight = parseInt($UL.getAttribute('ulHeight'))

                if(ulheight>0){
                    $UL.style.height = '0'
                    this.changeRootPaths($span, -ulheight)
                    $span.children[0].classList.add('arrow_right_rotate')
                }else {
                    $UL.style.height = orgHeight + 'px'
                    this.changeRootPaths($span, orgHeight)
                    $span.children[0].classList.remove('arrow_right_rotate')
                }
            },
            //修改节点到根节点的路径所有的节点高度
            changeRootPaths: function($span, offsetHeight){
                let sid = $span.getAttribute('sid')
                let cur_id = parseInt(sid)
                console.log('--------------->',offsetHeight)
                while(true){
                    console.log(cur_id)
                    let $ul = document.getElementById('menu-span-' + cur_id).parentNode.parentNode
                    let cur_height = parseInt($ul.style.height)
                    cur_height += offsetHeight
                    $ul.style.height = cur_height+'px'
                    $ul.setAttribute('ulHeight',cur_height)
                    if(this.tree_pre[cur_id+''] > 0)
                    {
                        cur_id = this.tree_pre[cur_id+'']
                    }else{
                        break
                    }
                }
            }
        }
    }
</script>

<style lang="less">
    @import "../theme.less";
    #sa_menu{
        color: #333;
        width: 200px;
        background-color: #eee;
        overflow: hidden;
        font-size: 14px;
        position: relative;
        span{
            color:#444;
            display: inline-block;
            width: 100%;
            height: 40px;
            line-height: 40px;
            cursor: pointer;
            padding-right: 10px;
            box-sizing: border-box;
            transition: color 400ms,background-color 400ms;
        }
        .span_hover{
            color: @theme_color;
        }
        ul{
            list-style-type: none;
            margin: 0;
            padding: 0;
            transition: height 500ms;
            overflow: hidden;
        }
        li{
            list-style-type: none;
            text-align: left;
            background-color: #eee;
            position: relative;
        }
        .fork{

        }
        .leaf{
            
        }
        .leaf_active{
            background-color: fade(@theme_color, 15%);
            border-right: 2px solid @theme_color;
            color: @theme_color;
        }
        .arrow_right{
            position: absolute;
            width: 0;
            height: 0;
            border: 6px solid transparent;
            border-left-color: #888;
            right: 10px;
            top: 15px;
            cursor: pointer;
            transform: rotate(0deg);
            transform-origin: center;
            transition: border-left-color 500ms, transform 500ms;
        }
        .arrow_right_hover{
            border-left-color: @theme_color;
        }
        .arrow_right_rotate{
            transform: rotate(90deg);
        }
    }
</style>

