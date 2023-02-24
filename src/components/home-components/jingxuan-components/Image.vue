<template>
    <div id="Image">
        <h2>{{arrList.name}}</h2>
        <img :src="arrList.dataimg" alt="">
    </div>
</template>
<script>
export default {
    data(){
        return {
            arrList:[]
        }
    },
    mounted(){
        var reg1 = /\/image\/(\d+)/
        var id = this.$route.path.match(reg1)[1]
        console.log("id的值是:"+id)
        this.getData1(id)
    },
    methods:{
        getData1(id){
            var _this = this
            this.$http.get("../src/data/home.data").then(function(res){
                console.log("请求的数据"+res.data)
                _this.arrList1 = res.data[id-1]
            }).catch(function(error){
                console.log(error)
            })
        }
    }
}
</script>