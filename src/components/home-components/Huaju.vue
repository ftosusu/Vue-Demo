<template>
        <div id="performance">
            <ul>
                <li class="li" v-for="(val,index) in arrList" :key="index">
                    <img :src="val.small" alt="">
                        <span class="name">{{val.name}}</span>
                        <span class="time">{{val.time}}</span>
                        <span class="ask">{{val.ask}}</span>
                        <span class="money">{{val.money}}<span>起</span> <i class="iconfont icon-tianjiaxihuan" @click="changeclass1()"></i> </span>
                </li>
            </ul>
        </div>
</template>
<script>
export default {
    data(){
        return{
            arrList:[]
        }
    },
    methods:{
        getData(){
            var _this = this
            this.$http.get("/src/data/huaju.data").then(function(res){
                _this.arrList = res.data
            }).catch(function(error){
                console.log(error)
            })
        },
        changeclass1(){
            $("#performance .icon-tianjiaxihuan").on('click', function(){
            $(this).removeClass("icon-tianjiaxihuan").addClass("icon-yixiangkan")
        })
        }
    },
    mounted(){
        this.getData()
    }
}
</script>
<style>
#performance ul{
    padding: 0 1rem;
    margin-bottom: 6rem;
    background-color: #e0dfdf;
    overflow: auto;
}
#performance ul .li{
    background-color: #ffffff;
    margin-bottom: 0.6rem;
    border-radius: 1rem;
    display: inline-block;
    width: 49%;
}
#performance ul .li:nth-child(even){
  float: right;
}
#performance ul .li:nth-child(odd){
  float: left;
}
#performance ul .li img{
    border-radius: 1rem 1rem 0 0;
    width: 19rem;
    margin-bottom: 0.4rem;
}
#performance ul .li:nth-child(even) img{
    float: right;
}
#performance ul .li:nth-child(odd) img{
    float: left;
}
#performance ul .li .name{
    display: block;
    font-weight: bolder;
    margin-left: 1rem;
    margin-bottom: 0.3rem;
}
#performance ul .li .time{
    display: block;
    color: #9e9e9e;
    margin-left: 1rem;
    margin-bottom: 0.3rem;
}
#performance ul .li .ask{
    font-weight: bold;
    display: block;
    color: #ffa806;
    margin-left: 1rem;
    margin-bottom: 0.3rem;
}
#performance ul .li .money{
    font-size: 1.5rem;
    font-weight: bold;
    display: block;
    color: #ff0000;
    margin-left: 1rem;
    margin-bottom: 0.3rem;
    line-height: 2.5rem;
}
#performance ul .li .money span{
    color: #9e9e9e;
    font-weight: normal;
    font-size: 1rem;
}
#performance .icon-tianjiaxihuan{
    font-weight: normal;
    font-size: 2rem;
    float: right;
    margin-right: 1.4rem;
    color: #9e9e9e;
}
#performance .icon-yixiangkan{
    font-weight: normal;
    font-size: 2.5rem;
    float: right;
    margin-right: 1.4rem;
    color: #ffa806;
}
</style>