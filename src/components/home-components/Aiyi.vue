<template>
    <div id="aiyi">
        <div class="top">
            <h1>爱艺之城</h1>
            <span>已有<strong> 50万 </strong> 名艺术电影爱好者加入</span>   
            <button class="button">+加入</button>
        </div>
        <div class="tabs_1">
            <div class="list">
                <span class="big">艺术电影日历</span>
            </div>
            <ul class="tabs">
                <li class="active">今日热映</li>
                <li>即将上映</li>
            </ul>
            <div class="content" id="jx_content2">
                <div class="card" style="display:block">
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
                <div class="card">
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
        <div class="tabs_1">
            <div class="list">
                <span class="big">电影节<i class="iconfont icon-qianjinxiayige"></i></span>
            </div>
            <div class="content" id="jx_content3">
                <div class="card" style="display:block">
                    <div class="movies">
                            <ul class="movies_ul">
                                <li v-for="(val,index) in arrList1" class="movie_li" :key="index">
                                    <img :src="val.small"   class="data_src">
                                    <span class="name">{{val.name}}</span>
                                    <span class="ask">{{val.ask}}</span>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            a:0,
            arrList:[],
            arrList1:[]
        }
    },
    mounted(){
        this.getData1()
        this.getData2()
        $("#aiyi .top .button").on('click', function(){
            if(this.a == 0 ){
                $("#aiyi .top .button").text("已加入")
                this.a = 1
            }else{
                $("#aiyi .top .button").text("+加入")
                this.a = 0
            }
            
        })
        //选项卡1
        $("#aiyi .tabs_1 .tabs li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        $("#aiyi .tabs_1 #jx_content2 .card:eq("+$(this).index()+")").css("display","block").siblings().css("display","none")
    })
    },
    methods:{
        getData1(){
            var _this = this
            this.$http.get("/src/data/home.data").then(function(res){
                console.log("请求的数据"+res.data)
                _this.arrList = res.data
            }).catch(function(error){
                console.log(error)
            })
        },
        getData2(){
            var _this = this
            this.$http.get("/src/data/film.data").then(function(res){
                console.log("请求的数据"+res.data)
                _this.arrList1 = res.data
            }).catch(function(error){
                console.log(error)
            })
        },
    }
}
</script>
<style>
@import url(../../assets/css/aiyi.css);

</style>
