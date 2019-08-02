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
                data_source: this.dataSource
            }
        },
        created(){

        },
        mounted(){
            console.log(this.data_source)
            let root = document.createElement('ul')
            root.setAttribute('class','root_menu')
            this.$el.appendChild(root)
            console.log(root)
            this.renderList(root, this.data_source)
        },
        methods:{
            renderList: function($ul, lists){
                console.log('render')
                for(let sub_item of lists){
                    console.log(sub_item)
                    if(sub_item.submenus){
                        let li = document.createElement('li')
                        li.setAttribute('class','root_menu')
                        li.innerHTML = sub_item.name
                        let ul = document.createElement('ul')
                        ul.setAttribute('class','root_menu')
                        li.appendChild(ul)
                        $ul.appendChild(li)
                        this.renderList(ul, sub_item.submenus)
                    }else{
                        let li = document.createElement('li')
                        li.setAttribute('class','root_menu')
                        li.innerHTML = sub_item.name
                        $ul.appendChild(li)
                    }
                }
            }
        }
    }
</script>

<style scoped lang="less">
    #sa_menu{
        .root_menu{
            color: #ff0000;
        }
    }

</style>

