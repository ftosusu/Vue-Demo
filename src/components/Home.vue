<template>
    <div id="home">
        <AddressVue class="address"></AddressVue>
        <div class="home">
            <div class="link">
        <router-link class="lis active" to="jingxuan" >精选</router-link>
        <router-link class="lis" to="aiyi">爱艺之城</router-link>
        <router-link class="lis" to="zuixin">最新影讯</router-link>
        <router-link class="lis" to="sing">演唱会</router-link>
        <router-link class="lis" to="huaju">话剧歌剧</router-link>
            </div>
        </div>
            <router-view class="show"></router-view>
            <FooterVue class="footer"></FooterVue>
        
    </div>
</template>
<script>
import AddressVue from './Address'
import FooterVue from './Footer.vue'
export default {
    components:{
        AddressVue,
        FooterVue
    },
    mounted(){
            $("#home .link .lis").on('click', function(){
        $("#home .link .lis").removeClass("active")
        $(this).addClass("active")
    })
    }
}
</script>
<style>
#home .address{
  position: fixed;
  top: 0;
  height: 3rem;
  z-index: 11;
}
#home .home{
    width: 100%;
    /* position: relative; */
    overflow: auto;
    margin-top: 4rem;
}
#home .home .link{

    width: 49rem;
    overflow: hidden;
}
#home .home::-webkit-scrollbar{
    width: 0;
}
#home .lis{
    float: left;
    line-height: 1.8rem;
    text-align: center;
    font-size: 1rem;
    padding: 0.5rem 2.7rem;
    color: #bebebe;
}
#home .home .active{
    font-size: 1.5rem;
    font-weight: bold;
    color: #666666;
}
#home .show{
    margin-top: 0rem;
}
#home .footer{
  position: fixed;
  bottom: 0;
  z-index: 10;
}
#home .footer .lis1:nth-child(1){
    color: #b8115f!important;
}
</style>