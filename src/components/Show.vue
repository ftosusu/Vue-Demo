<template>
    <div id="show">
        <h2 class="head">演出</h2>
        <AddressVue></AddressVue>
        <div class="link">
            <div class="sou">
                    <router-link to="/souye" class="lis">首页<span class="span"></span></router-link>
            </div>
            
            <div class="link_flow">
                <ul>
                    <router-link to="/s-sing" class="lis">演唱会
                    <span></span></router-link>
                    <router-link to="/s-huaju" class="lis">话剧歌剧
                    <span></span></router-link>
                    <router-link to="/s-sing" class="lis">音乐会
                    <span></span></router-link>
                    <router-link to="/s-huaju" class="lis">曲苑杂坛
                    <span></span></router-link>
                    <router-link to="/s-sing" class="lis">体育赛事
                    <span></span></router-link>
                    <router-link to="/s-huaju" class="lis">展览休闲
                    <span></span></router-link>
                    <router-link to="/s-sing" class="lis">儿童亲子
                    <span></span></router-link>
                    <router-link to="/s-huaju" class="lis">Live现场
                    <span></span></router-link>
                    <router-link to="/s-sing" class="lis">舞蹈芭蕾
                    <span></span></router-link>
                    <router-link to="/s-huaju" class="lis">其他
                    <span></span></router-link>
                </ul>
            </div>
               
        </div>
        <router-view class="show"></router-view>
        <FooterVue class="footer"></FooterVue>
    </div>
</template>
<style>
#show .head{
text-align: center;
line-height: 2rem;
border-bottom: 1px solid  #ffffff;
}
#show .link .sou{
    line-height: 4rem;
    display: inline-block;
    width: 19%;
        overflow: auto;
    position: relative;
    text-align: center;
}
#show .link .sou .lis{
    color: #000000;
    font-size: 1.4rem;
}
#show .link_flow{
    display: inline-block;
    width: 80%;
    overflow: auto;
    position: relative;
}
#show .link ul{
    overflow: hidden;
    padding: 0;
    display: inline-block;
    width: 64rem;
}
#show .link ul .lis{
    color: #000000;
    font-size: 1.4rem;
    text-align: center;
    display: inline-block;
    width: 6rem;
}
#show .link .lis{
    display: inline-block;
    line-height: 1.4rem;
}
#show .lis span{
display: block;
width: 1.7rem;
border-radius: 0.1rem;
height: 0.2rem;
background-color: #ffffff;
margin: 0 auto;
}
#show .lis .span{
display: block;
width: 1.7rem;
border-radius: 0.1rem;
height: 0.2rem;
background-color: red;
margin: 0 auto;
}
#show .show{
    margin-bottom: 5rem;
}
#show .footer{
  position: fixed;
  bottom: 0;
  z-index: 10;
}
#show .footer .lis1:nth-child(4){
    color: #b8115f!important;
}
</style>
<script>
import AddressVue from './Address.vue'
import FooterVue from './Footer.vue'
export default {
components:{
    AddressVue,
    FooterVue
},
mounted(){
    $("#show  .lis").on('click', function(){
        $("#show .lis .span").removeClass("span")
        $(this).children().addClass("span")
        console.log($("#show .link_flow ul").offset().left)
    })
}
}
</script>
