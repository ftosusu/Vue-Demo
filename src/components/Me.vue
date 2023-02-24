<template>
    <div id="me">
        
        <div class="touxiang">
            <router-link to="my">
            <img src="../assets/img/touxiang.jpg" alt="">
            </router-link>
            <div class="jianjie">
                <span class="name">throwsExceptions ></span>
                <span class="small">关注 <strong>4</strong> </span> <span class="small">粉丝 <strong>0</strong></span>
            </div>
            <div class="icon">
             <i class="iconfont icon-tongzhi"></i>
            <i class="iconfont icon-luosi"></i>
            </div>
            <div class="huiyuan">
                <div class="jin">
                    <span class="text">会员中心</span>
                        <span>观影金  270</span>
                </div>
                <div class="gift">
                    <span class="top">兑换好礼</span>
                    <span>有62观影金即将过期</span>
                    <i class="iconfont icon-shalou"></i>
                </div>
            </div>
        </div>
        
        <div class="buy">
            <router-link to="dyp">
            <div>
                <i class="iconfont icon-dianying"></i>
                <span>电影票</span>
            </div>
            </router-link>
            <router-link to="xiaoshi">
            <div>
                <i class="iconfont icon-yinliao"></i>
                <span>小食</span>
            </div>
            </router-link>
            <router-link to="yanchu">
            <div>
                <i class="iconfont icon-yanchu1"></i>
                <span>演出票</span>
            </div>
            </router-link>
        </div>
        <div class="youhui">
            <p>我的优惠</p>
            <div>
                <i class="iconfont icon-youhuijuan"></i>
                <span class="card">电影票</span>
                <span class="gary">共7张</span>
            </div>
            <div>
                <i class="iconfont icon-huiyuanquanyika"></i>
                <span class="card">权益卡</span>
                <span class="gary">已省<a class="red">103</a>元</span>
            </div>
            <div>
                <i class="iconfont icon-lipinka"></i>
                <span class="card">乐影卡</span>
                <span class="white">1</span>
            </div>
        </div>
        <div class="fuwu">
            <p>我的服务</p>
            <div>
                <i class="iconfont icon-shengqianka"></i>
                <span class="card">影迷省钱卡</span>
            </div>
            <div>
                <i class="iconfont icon-xiaojuchang"></i>
                <span class="card">我的小聚场</span>
            </div>
            <div>
                <i class="iconfont icon-taolun"></i>
                <span class="card">发起的讨论</span>
            </div>
            <div>
                <i class="iconfont icon-shoucang2"></i>
                <span class="card">我的收藏</span>
            </div>
             <div>
                <i class="iconfont icon-bofangjilu"></i>
                <span class="card">播放记录</span>
            </div>
            <div>
                <i class="iconfont icon-huiyuanquanyika"></i>
                <span class="card">银行特惠</span>
            </div>
            <div>
                <i class="iconfont icon-aliyu"></i>
                <span class="card">阿里鱼众筹</span>
            </div>
            <div>
                <i class="iconfont icon-yulebao"></i>
                <span class="card">娱乐宝</span>
            </div>
             <div>
                <i class="iconfont icon-xiaoshigongyidinggaozhongyingwensvg"></i>
                <span class="card">3小时公益</span>
            </div>
            <div>
                <i class="iconfont icon-kefu1"></i>
                <span class="card">我的客服</span>
            </div>
            <router-link to="zheng">
            <div>
                <i class="iconfont icon-shenfen"></i>
                <span class="card">电子访客证</span>
            </div>
            </router-link>
        </div>
        <FooterVue class="footer"></FooterVue>
    </div>
</template>
<script>
import FooterVue from './Footer.vue'
export default {
    components:{
        FooterVue
    },
    mounted(){
        
    }
}
</script>
<style>
#me .footer .lis1:nth-child(5){
    color: #b8115f!important;
}
#me{
    background-color: #ebebeb;
        padding-bottom: 9rem;
}
#me .touxiang{
    width: 100%;
    height: 10rem;
    background-color: #ebc000f1;
}
#me .touxiang img{
    margin: 1rem 0 0 1rem;
    border: 2px solid #ffffff;
    width: 6rem;
    height: 6rem;
    border-radius: 5rem;
    /* display: inline-block; */
}
#me .touxiang .icon{
    margin-top: 3.3rem;
    display: inline-block;
     float: right;
}
#me .touxiang .iconfont{
    color: #ffffff;
    font-size: 2rem; 
    margin: 0.6rem;
}
#me .jianjie {
display: inline-block;
position: relative;
top: -1rem;

}
#me .jianjie .name{
    
    font-size: 1.7rem;
    color: #ffffff;
    display: block;
}
#me .jianjie .small{
    font-size: 1rem;
    color: antiquewhite;
}
#me .jianjie .small strong{
    color: #ffffff;
}
#me .touxiang .huiyuan{
    position: relative;
    width: 90%;
    margin: 0 auto;
    border-radius: 1rem;
    height: 5rem;
    background-color: #ffffff;
}
#me .touxiang .huiyuan .jin{
    display: inline-block;
    border-right: 0.1rem solid #666666;
    margin: 0.4rem;
}
#me .touxiang .huiyuan .gift{
    width: 70%;
    display: inline-block;
}
#me .touxiang .huiyuan .gift span{
    
}
#me .touxiang .huiyuan .gift .top{
    font-size: 1.4rem;
    display: block;
}
#me .touxiang .huiyuan .gift i{
    float: right;
    display: inline-block;
    margin: 0;
    color: blue;
}
#me .touxiang .huiyuan .jin span{
    display: block;
    padding: 0 0.5rem;
}
#me .touxiang .huiyuan .jin .text{
    color: #d3b300e5;
     font-weight: 550;
    font-size: 1.4rem;
}
#me .buy{
    width: 90%;
    margin: 5rem auto 0;
    border-radius: 1rem;
    height: 7rem;
    background-color: #ffffff;
}
#me .buy div{
    display: inline-block;
    margin: 1rem 4rem;
}
#me .buy .icon-dianying{
    font-size: 3rem;
    color: #fd018c;
}
#me .buy .icon-yinliao{
    font-size: 3rem;
    color: #fdc201;
}
#me .buy .icon-yanchu1{
    font-size: 3rem;
    color: #e700e7;
}
#me .buy div span{
    display: block;
}
#me .youhui{
    width: 90%;
    margin: 2rem auto 0;
    border-radius: 1rem;
    height: 11rem;
    background-color: #ffffff;
}
#me .youhui div{
    text-align: center;
    display: inline-block;
    margin: 1rem 3.7rem;
}
#me .youhui div span{
    display: block;
}
#me .youhui p{
    border-bottom: 0.1rem solid #d3d2d2;
    font-size: 1.4rem;
    font-weight: bold;
    margin: 0.9rem;
    padding: 0.5rem 0;
}
#me .icon-youhuijuan{
    font-size: 2rem;
    font-weight: bold;
}
#me .icon-lipinka{
    font-size: 2rem;
    font-weight: bold;
}
#me .icon-huiyuanquanyika{
    font-size: 2rem;
    font-weight: bold;

}
#me .youhui .card{
    margin-top: 0.4rem;
}
#me .youhui .white{
    color: #ffffff;
}
#me .youhui .red{
    color: red;
}
#me .youhui .gary{
    color: #999999;
    font-weight: 100;
}
#me .fuwu{
    width: 90%;
    margin: 2rem auto 0;
    border-radius: 1rem;
    height: 23rem;
    background-color: #ffffff;
}
#me .fuwu div{
    text-align: center;
    display: inline-block;
    margin: 1rem 0rem;
    width: 24%;
}
#me .fuwu div span{
    display: block;
}
#me .fuwu p{
    border-bottom: 0.1rem solid #d3d2d2;
    font-size: 1.4rem;
    font-weight: bold;
    margin: 0.9rem;
    padding: 0.5rem 0;
}
#me .fuwu .iconfont{
    font-size: 2rem;
    font-weight: bold;
}
#me .fuwu .card{
    margin-top: 0.4rem;
}

#me .footer{
  position: fixed;
  bottom: 0;
  z-index: 10;
}
</style>