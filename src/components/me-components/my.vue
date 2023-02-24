<template>
<div id="my">
   <i class="iconfont icon-fanhui" @click="prev()"></i>
   <div class="head">
<img src="../../assets/img/touxiang.jpg" class="touxiang" alt="">
<span class="id_name">throwsException</span>
<span class="huiyuan"><i class="iconfont icon-huangguanguanjun"></i>黄金会员</span>
<span class="show_text">点击右上角,加上个人介绍吧</span>
<div class="card">
    <span class="card_1">25 <br><span class="br">想看</span></span>
    <span class="card_1">26 <br><span class="br">看过</span></span>
    <span class="card_1">10 <br><span class="br">影评</span></span>
</div>
   </div>
   
   
</div>
</template>

<script>
export default {
methods:{
    prev(){
            this.$router.go(-1)
        }
}
}
</script>

<style>
#my .head{
    width: 100%;
    text-align: center;
    
}
#my .touxiang{
    width: 6rem;
    border-radius: 8rem;
    
}
#my .head .id_name{
    margin: 1rem 0 ;
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
}
#my .head .huiyuan{
    padding: 0.2rem 0.5rem;
    border-radius: 0.8rem;
    color: #ffffff;
    background: hsl(34, 100%, 40%);
}
#my .head .huiyuan .icon-huangguanguanjun{
    color: #ffee01;
    
    /* background-color: #ff8800; */
}
#my .head .show_text{
    margin: 1.3rem 0 2rem 0;
    color: #a5a5a5ef;
    display: block;
}
#my .head .card{
    padding-bottom: 1.7rem;
    border-bottom: 1px solid #999999;
}
#my .head .card .card_1{
    display: inline-block;
    width: 32.8%;
}
#my .head .card .card_1 .br{
    display: block;
    margin-top: 1rem;
}
</style>