<template>
  <div id="swsouye">
        <div class="swiper-container">
                <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="../../assets/img/1.png" alt=""></div>
                        <div class="swiper-slide"><img src="../../assets/img/2.png" alt=""></div>
                        <div class="swiper-slide"><img src="../../assets/img/3.png" alt=""></div>
                </div>
                <div class="swiper-pagination"></div>
        </div>
        <div class="anxingou">
            <i class="iconfont icon-baozhang"></i> <span>安心购</span> <span class="text">假一赔十·无票赔付·极速发货·条件退款</span>
        </div>
        <div class="tabs_1">
            <span class="span_name">超值精选</span>
                <div class="card">
                    <div class="movies">
                            <ul class="movies_ul">
                                <li v-for="(val,index) in arrList" class="movie_li" :key="index">
                                    <img :src="val.small"   class="data_src">
                                    <span class="name">{{val.name}}</span>
                                    <span class="money">{{val.money}} <span class="qi">起</span></span>
                                    <span class="num">2.2万人围观</span>
                                </li>
                            </ul>
                        </div>
                </div>
        </div>
        <div class="tabs_1">
            <span class="span_name">周末好去处</span>
                <div class="card">
                    <div class="movies">
                            <ul class="movies_ul">
                                <li v-for="(val,index) in arrList" class="movie_li" :key="index">
                                    <img :src="val.small"   class="data_src">
                                    <span class="name">{{val.name}}</span>
                                    <span class="money">{{val.money}} <span class="qi">起</span></span>
                                </li>
                            </ul>
                        </div>
                </div>
        </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import "swiper/css/swiper.min.css"
export default {
    data(){
        return{
            arrList:[]
        }
    },
    methods:{
        getData(){
            var _this = this
            this.$http.get("/src/data/souye.data").then(function(res){
                _this.arrList = res.data
            }).catch(function(error){
                console.log(error)
            })
        }
    },
    mounted(){
        this.getData()
         var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    },
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    },
    // 如果需要分页器
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    
    // 如果需要前进后退按钮
    
    })
    }
}
</script>

<style>
#swsouye .swiper-container{
    --swiper-pagination-color: #ffffff;/* 两种都可以 */
}
#swsouye .swiper-slide img{
    width: 100%;
}
#swsouye .anxingou{
    width: 90%;
    margin: 2rem auto;
    background-color: #d4d4d4;
    border-radius: 0.5rem;
}
#swsouye .anxingou i{
    margin-left: 1rem;
    line-height: 3rem;
    font-size: 1.5rem;
    color: red;
}
#swsouye .anxingou .text{
    font-size: 1.3rem;
    line-height: 3rem;
    float: right;
}
#swsouye .tabs_1{
    margin-left: 1rem;
    margin-bottom: 2rem;
}
#swsouye .span_name{
    display: block;
    font-size: 2rem;

}
#swsouye .movies{
    overflow: auto;
    position: relative;
    width: 100%;
}
#swsouye .movies .movies_ul{
    padding: 0 0rem;
    width: 91rem;
    overflow: hidden;
}
#swsouye .movies .movies_ul li{
    border-radius: 0.8rem;
    margin-left: 1rem;
    float: left;
}
#swsouye .movies .movies_ul img{
    border-radius: 0.6rem;
    width: 8rem;
}
#swsouye .movies .movies_ul span{
    display: block;
    width: 8rem;
    max-width: 10rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
#swsouye .movies .movies_ul .money{
    font-weight: bold;
    color: red;
    font-size: 1.4rem;
}
#swsouye .movies .movies_ul .money .qi{
    display: inline;
    font-size: 1rem;
    color: #d4d4d4;
    font-weight: normal;
}
#swsouye .movies .movies_ul .num{
    width: 7rem;
    color: #ff8c08;
    border-radius: 0.2rem;
    border: 1px solid #ff8c08;
}
</style>