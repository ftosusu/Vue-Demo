<template>
    <div id="movie">
        <Address></Address>
        <div class="link">
                <router-link to="/hotmovie" class="lis active">热映</router-link>
                <router-link to="/cinema" class="lis">影院</router-link>
                <router-link to="/coming" class="lis">即将上映</router-link>
                <router-link to="/online" class="lis">在线看</router-link>
        </div>
        <router-view class="movie"></router-view>
        <FooterVue class="footer"></FooterVue>
        
    </div>
</template>
<script>
import Address from './Address.vue'
import FooterVue from './Footer.vue'
export default {
    components:{
        Address,
        FooterVue
        
    },
    mounted(){
        $("#movie .link .lis").on('click', function(){
            $("#movie .link .lis").removeClass("active")
            $(this).addClass("active")
        })
    }
}
</script>
<style>
#movie .link{
    width: 100%;
}
#movie .link .lis{
    color: #999999;
    width: 17.5%;
    display: inline-block;
    padding: 1rem ;
    text-align: center;
    font-size: 1.3rem;
}
#movie .link .active{
    font-weight: bold;
    color: black;
}
#movie .footer{
  position: fixed;
  bottom: 0;
  z-index: 10;
}
#movie .footer .lis1:nth-child(3){
    color: #b8115f!important;
}
</style>