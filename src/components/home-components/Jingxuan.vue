<template>
    <div id="jingxuan">
        <div class="swiper-container">
                <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="../../assets/img/1.png" alt=""></div>
                        <div class="swiper-slide"><img src="../../assets/img/2.png" alt=""></div>
                        <div class="swiper-slide"><img src="../../assets/img/3.png" alt=""></div>
                        <div class="swiper-slide"><img src="../../assets/img/4.png" alt=""></div>
                        <div class="swiper-slide"><img src="../../assets/img/5.png" alt=""></div>
                        <div class="swiper-slide"><img src="../../assets/img/6.png" alt=""></div>
                        <div class="swiper-slide"><img src="../../assets/img/7.png" alt=""></div>
                        <div class="swiper-slide"><img src="../../assets/img/8.png" alt=""></div>
                </div>
                <div class="swiper-pagination"></div>
        </div>
        <div class="tabs_1">
            <ul class="tabs">
                <li class="active">热映影片</li>
                <li>即将上映</li>
                <li>线上好片</li>
                <span>全部<i class="iconfont icon-qianjinxiayige"></i></span>
            </ul>
            <div class="content" id="jx_content1">
                <div class="card" style="display: block;">
                    <div class="video" >
                        <img src="../../assets/img/movie1.png"  class="imgsrc">
                        <div class="movies">
                            <ul class="movies_ul">
                                <li v-for="(val,index) in arrList" class="movie_li" :key="index">
                                    <!-- <router-link :to="'/image/'+val.id"> -->
                                    <img :src="val.small"    class="datasrc" :data-src="val.dataimg" @click="changeSrc()">
                                    <!-- </router-link> -->
                                    
                                    <span class="score">{{val.score}}</span>
                                    <span class="name">{{val.name}}</span>
                                    <span class="ask">{{val.ask}}</span>
                                    <router-link :to="'/detail/'+val.id" class="button">{{val.sell}}</router-link>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <div class="card">
                    <div class="video" >
                        <img src="../../assets/img/movie1.png" alt="" class="imgsrc">
                        <div class="movies">
                            <ul class="movies_ul">
                                <li v-for="(val,index) in arrList2" class="movie_li" :key="index">
                                    <img :src="val.small"   class="data_src">
                                    <span class="score">{{val.score}}</span>
                                    <span class="name">{{val.name}}</span>
                                    <span class="ask">{{val.ask}}</span>
                                    <router-link :to="'/detail/'+val.id" class="button_1">{{val.sell}}</router-link>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <div class="card">
                    <div class="video" >
                        <img src="../../assets/img/movie1.png" alt="" class="imgsrc">
                        <div class="movies">
                            <ul class="movies_ul">
                                <li v-for="(val,index) in arrList" class="movie_li" :key="index">
                                    <img :src="val.small"   class="data_src">
                                    <span class="score">{{val.score}}</span>
                                    <span class="name">{{val.name}}</span>
                                    <span class="ask">{{val.ask}}</span>
                                    <router-link :to="'/detail/'+val.id" class="button">{{val.sell}}</router-link>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="clear"></div>
        <div class="tabs_2">
            <div class="list">
                <span class="big">精彩演出</span>
<span class="rili">演出日历<i class="iconfont icon-qianjinxiayige"></i></span>
            </div>
            <ul class="tabs">
                <li class="active">超值精选</li>
                <li>周末好去处</li>
                <li>人气推荐</li>
            </ul>
            <div class="content" id="jx_content2">
                <div class="card" style="display:block">
                    <div class="movies">
                            <ul class="movies_ul">
                                <li v-for="(val,index) in arrList3" class="movie_li" :key="index">
                                    <img :src="val.small"   class="data_src">
                                    <span class="score">{{val.score}}</span>
                                    <span class="name">{{val.name}}</span>
                                    <span class="ask">{{val.ask}}</span>
                                </li>
                            </ul>
                        </div>
                </div>
                <div class="card">
                    <div class="movies">
                            <ul class="movies_ul">
                                <li v-for="(val,index) in arrList4" class="movie_li" :key="index">
                                    <img :src="val.small"   class="data_src">
                                    <span class="score">{{val.score}}</span>
                                    <span class="name">{{val.name}}</span>
                                    <span class="ask">{{val.ask}}</span>
                                </li>
                            </ul>
                        </div>
                </div>
                <div class="card">
                    <div class="movies">
                            <ul class="movies_ul">
                                <li v-for="(val,index) in arrList5" class="movie_li" :key="index">
                                    <img :src="val.small"   class="data_src">
                                    <span class="score">{{val.score}}</span>
                                    <span class="name">{{val.name}}</span>
                                    <span class="ask">{{val.ask}}</span>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
        <div class="clear"></div>
        <div class="">

        </div>
        
    </div>
</template>
<script>
import Swiper from 'swiper'
import "swiper/css/swiper.min.css"
export default {
    data(){
        return {
            arrList:[],
            arrList2:[],
            arrList3:[],
            arrList4:[],
            arrList5:[]
        }
    },
    mounted(){
        this.getData()
        this.getData2()
        this.getData3()
        this.getData4()
        this.getData5()
        var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    },
    pagination: {
    el: '.swiper-pagination',
    type : 'progressbar',
    },
    // 如果需要分页器
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    
    // 如果需要前进后退按钮
    
    })

  //精选页选项卡1
    $("#jingxuan .tabs_1 .tabs li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        $("#jingxuan .tabs_1 .content .card:eq("+$(this).index()+")").css("display","block").siblings().css("display","none")
    })
    //精选页选项卡2
    $("#jingxuan .tabs_2 .tabs li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        $("#jingxuan .tabs_2 .content .card:eq("+$(this).index()+")").css("display","block").siblings().css("display","none")
    })
    },
    methods: {
        getData(){
            var _this = this
            this.$http.get("/src/data/home.data").then(function(res){
                _this.arrList = res.data
            }).catch(function(error){
                console.log(error)
            })
        },
        getData2(){
            var _this = this
            this.$http.get("/src/data/card2.data").then(function(res){
                _this.arrList2 = res.data
            }).catch(function(error){
                console.log(error)
            })
        },
        getData3(){
            var _this = this
            this.$http.get("/src/data/content_card1.data").then(function(res){
                _this.arrList3 = res.data
            }).catch(function(error){
                console.log(error)
            })
        },
        getData4(){
            var _this = this
            this.$http.get("/src/data/content_card2.data").then(function(res){
                _this.arrList4 = res.data
            }).catch(function(error){
                console.log(error)
            })
        },
        getData5(){
            var _this = this
            this.$http.get("/src/data/content_card3.data").then(function(res){
                _this.arrList5 = res.data
            }).catch(function(error){
                console.log(error)
            })
        },
        changeSrc(){
            $("#home .datasrc").on('click', function(){
                 $("#home .datasrc").removeClass("active")
                $(this).addClass("active")
            $("#home .imgsrc").attr("src",$(this).attr('data-src'))
            })
           
        }
    },
}
</script>
<style>
@import url(../../assets/css/jingxuan.css);

</style>