<template>
    <div id="detail">
        <div class="ban1">
        <i class="iconfont icon-fanhui" @click="prev()"></i>
        <div class="content">
            <video :src="arrList.videosrc" width="100%"  loop="loop" controls="controls" preload="preload"></video>
        <img :src="arrList.small" alt="" class="small">
        <div class="explain">
            <span class="name">{{arrList.name}}</span>
        <span class="time">{{arrList.explain}}</span>
        <span class="time add1">{{arrList.time}}</span>
        <div class="block"> 
            <span>你的评分</span>
  <el-rate
    v-model="value2"
    :colors="colors">
  </el-rate>
</div>
        </div>
        <div class="kb">
<span class="koubei">淘票票口碑</span>
        <el-rate
  v-model="arrList.value"
  disabled
  show-score
  text-color="#ff9900"
  :score-template="arrList.score1"  class="xing">
</el-rate>
        </div>
        
        </div>
        <div class="card">
            <div class="show">
                <span class="active jianjie">简介</span>
                <span class="juzhao">剧照</span>
                <span class="gengduo">影评</span>
            </div>
            <div class="jianjie_text">
                <span class="arrlist_text">{{arrList.text}}</span>
                <a href="##" class="more">更多</a>
            </div>
            <div class="imges">
                <span class="span_name1">剧照</span>
            <div class="imges_ul">
                <div class="img">
                    <img src="../../../assets/img/imges15.jpg" alt="">
                    <img src="../../../assets/img/imges14.jpg" alt="">
                    <img src="../../../assets/img/imges13.jpg" alt="">
                    <img src="../../../assets/img/imges12.jpg" alt="">
                    <img src="../../../assets/img/imges11.jpg" alt="">
                    <img src="../../../assets/img/imges10.jpg" alt="">
                    <img src="../../../assets/img/imges9.jpg" alt="">
                    <img src="../../../assets/img/imges8.jpg" alt="">
                    <img src="../../../assets/img/imges7.jpg" alt="">
                    <img src="../../../assets/img/imges6.jpg" alt="">
                    <img src="../../../assets/img/imges5.jpg" alt="">
                    <img src="../../../assets/img/imges4.jpg" alt="">
                    <img src="../../../assets/img/imges3.jpg" alt="">
                    <img src="../../../assets/img/imges2.jpg" alt="">
                    <img src="../../../assets/img/imges1.jpg" alt="">
                </div>
            </div>
            </div>
            <div class="yingping">
                <div class="yp_title">
                    <span class="hot_yp">观众热映<i class="iconfont icon-bangzhu"></i></span>
                    <span class="yp_write">写影评</span>
                </div>
                <div class="yp_text">
                    <div class="yp_tree">
                        <span>全部</span><span>最新</span><span>好评</span><span>影评达人</span><span>有图</span><span>购票</span>
                    </div>
                    
                </div>
                <div class="yp_txt">
                        <img src="../../../assets/img/head1.jpg" alt="" class="img1">
                        <div class="person">
                            <span class="name">风 ** 淡</span>
                            <span class="time">10-23 15:36</span>
                            <span class="txt">
                                {{arrList.txt1}}
                            </span>
                            <span class="icon"><i class="iconfont icon-zan"><span>{{zannum}}</span></i> <i class="iconfont icon-taolun"><span>{{xxnum}}</span></i></span>
                        </div>
                </div>
                <div class="yp_txt">
                        <img src="../../../assets/img/head2.jpg" alt="" class="img1">
                        <div class="person">
                            <span class="name">lulugemini</span>
                            <span class="time">10-23 13:54</span>
                            <span class="txt">
                                {{arrList.txt2}}
                            </span>
                            <span class="icon"><i class="iconfont icon-zan"><span>{{zannum}}</span></i> <i class="iconfont icon-taolun"><span>{{xxnum}}</span></i></span>
                        </div>
                </div>
                <div class="yp_txt">
                        <img src="../../../assets/img/head3.jpg" alt="" class="img1">
                        <div class="person">
                            <span class="name">中正学长</span>
                            <span class="time">10-23 14:24</span>
                            <span class="txt">
                                {{arrList.txt3}}
                            </span>
                            <span class="icon"><i class="iconfont icon-zan"><span>{{zannum}}</span></i> <i class="iconfont icon-taolun"><span>{{xxnum}}</span></i></span>
                        </div>
                </div>
                <div class="yp_txt">
                        <img src="../../../assets/img/head4.jpg" alt="" class="img1">
                        <div class="person">
                            <span class="name">锦鲤女神</span>
                            <span class="time">10-23 15:36</span>
                            <span class="txt">
                                {{arrList.txt4}}
                                <img src="../../../assets/img/ANIMEimage.jpg" alt="">
                            </span>
                            <span class="icon"><i class="iconfont icon-zan"><span>{{zannum}}</span></i> <i class="iconfont icon-taolun"><span>{{xxnum}}</span></i></span>
                        </div>
                </div>
            </div>
        </div>
        </div>
        <div class="ban">
            <i class="iconfont icon-fanhui"></i>
            <div class="name">
                    <span>{{arrList.name}}</span>
                    <button class="btn">发布</button>
            </div>
            <span class="pingfen">评分</span>
            <el-rate  v-model="value" show-text class="el-rate"></el-rate>
            <textarea name="" id="" cols="30" rows="10"  placeholder="可以分享喜欢的角色，印象深刻的片段，整体的观影感受。" class="input"></textarea>
            <input type="file" name="" id="file1" @change="previewFile()">
            <img src="" height="200" alt="Image preview..." class="img">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            value1: null,
        value2: null,
        value:null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'],  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
            arrList:[],
            num : 1,
            zannum: 8515,
            xxnum:1004
        }
    },
    mounted(){
        var reg = /\/detail\/(\d+)/
        var id = this.$route.path.match(reg)[1]
        console.log("id的值是:"+id)
        this.getData(id)
        $("#detail .jianjie_text .more").on('click', function(){
                if (this.num % 2 != 0) {
                     $("#detail .jianjie_text .arrlist_text").animate({"height":"12rem"})
                     this.num = 2
                     $("#detail .jianjie_text .more").text("收起")
                }
                else{
                    $("#detail .jianjie_text .arrlist_text").animate({"height":"4rem"})
                     this.num = 1
                     $("#detail .jianjie_text .more").text("更多")
                }
            })
            $("#detail .card .show .jianjie").on('click', function(){
                // alert($("#detail .card .jianjie_text").offset().top)
                $("html,body").animate({scrollTop:$("#detail .card .jianjie_text").offset().top})
            })
             $("#detail .card .show .juzhao").on('click', function(){
                // alert($("#detail .card .jianjie_text").offset().top)
                $("html,body").animate({scrollTop:$("#detail .card .imges").offset().top})
            })
            $("#detail .card .show .gengduo").on('click', function(){
                // alert($("#detail .card .jianjie_text").offset().top)
                $("html,body").animate({scrollTop:$("#detail .card .yingping").offset().top})
            })
            $("#detail .card .yingping .yp_title .yp_write").on('click', function(){
                $("#detail .ban1").animate({left:"-41.4rem"},400)
                $("#detail .ban").animate({left:0},400)
            })
            $("#detail .ban .icon-fanhui").on('click', function(){
                $("#detail .ban1").animate({left:0},400)
                $("#detail .ban").animate({left:"41.4rem"},400)
            })
            $("#detail .ban .name .btn").on('click', function(){
                $("#detail .ban1").animate({left:0},400)
                $("#detail .ban").animate({left:"41.4rem"},400)
                var str
                var month = new Date().getMonth()
                var date = new Date().getDate()
                var hour = new Date().getHours()
                var min = new Date().getMinutes()
                str = ("<div class='yp_txt'><img src='"+"./src/assets/img/touxiang.jpg"+" 'class='img1'><div class='person'> <span class='name'>素素 </span> <span class = 'time'>"
                +(month+1)+"-"+date +" "+hour+":"+min+"</span><span class='txt'>"+$("#detail .ban .input").val()
                +"<img src='"+$("#detail .ban .img").attr("src")+"'></span><span class='icon'><i class='iconfont icon-zan'><span>0</span></i><i class='iconfont icon-taolun'><span>0</span></i></span> </div></div> ")
                $("#detail .card .yingping").append(str)
                $("#detail .ban .input").val("")
            })
        
        
    },
    methods:{
        getData(id){
            var _this = this
            this.$http.get("../src/data/home.data").then(function(res){
                console.log("请求的数据"+res.data)
                _this.arrList = res.data[id-1]
            }).catch(function(error){
                console.log(error)
            })
        },
        prev(){
            this.$router.go(-1)
        },
        previewFile() {
            var preview = $("#detail .ban .img")        
            var fileDom = document.querySelector('input[type=file]')
            // 获取得到file 对象
            var file = fileDom.files[0]
            // 限制上传图片的大小
            if(file.size > 1024 * 1024 * 3) {
	            alert('图片大小不能超过 3MB!');
	            return false;
            }
            // 创建url
            var imgUrl = window.URL.createObjectURL(file)
            preview.attr("src", imgUrl)
            // 更改img url 以后释放 url
            preview.onload = function() {
                // console.log('图片加载成功')
                URL.revokeObjectURL(imgUrl)
            }
        }
    }
}
</script>
<style>
#detail .icon-fanhui{
    font-size: 2rem;
}
#detail .content{
    width: 100%;
}
#detail video{
    margin-bottom: 2rem;
}
#detail .ban1{
    position: relative;
}
#detail img{
    width: 100%;
}
#detail .small{
    margin-left: 1rem;
    width: 10rem;
}
#detail .name{
    font-size: 2rem;
    font-weight: bold;
}
#detail .explain{
    display: inline-block;
}
#detail .explain span{
    display: block;
}
#detail .explain .block span{
    display: inline;
}
#detail .explain .add1{
    margin-bottom: 2rem;
}
#detail .explain .time{
    padding: 0.3rem;
    color: #bbbbbb;
}
#detail .explain .name{
    padding: 0.5rem;
}
#detail  .xing span{
    display: inline;
}
#detail  .koubei{
    display: block;
    font-weight: bold;
    font-size: 1.3rem;
}
#detail .kb{
    margin: 1rem;
}
#detail .card .show{
border-bottom: 1px solid rgba(223, 223, 223, 0.6);
}
#detail .card .show span{
    display: inline-block;
    width: 32.8%;
    text-align: center;
    font-size: 1.7rem;
    padding: 1rem 0 ;

}
#detail .card .show .active{
    font-weight: 550;
}
#detail .card .jianjie_text .arrlist_text{
    display: block;
    padding: 1rem;
    overflow: hidden;
    width: 95%;
    height: 4rem;
}
#detail .card .jianjie_text{
    margin-bottom: 1.7rem;
}
#detail .card .jianjie_text .more{
    margin-left: 1rem;
    text-decoration: none;
    color: rgb(41, 17, 252);
}
#detail .card .icon-bangzhu{
    margin-left: 0.3rem;
    font-size: 1rem;
}
#detail .card .yingping .hot_yp{
    margin-left: 1rem;
    font-weight: 550;
    font-size: 1.6rem;
}
#detail .card .yingping .yp_write{
    color: #ffffff;
    display: inline-block;
    float:right;
    margin-right: 1rem;
   background: -webkit-linear-gradient(left, rgb(207, 147, 147) 2px, rgb(240, 30, 30) 15px,rgb(201, 9, 121) 30px);
   padding: 0 0.4rem;
   border-radius: 0.7rem;
}
#detail .card .yingping .yp_title{
    margin-bottom: 1.3rem;
}
#detail .card .yingping .yp_text{
    width: 70%;
}
#detail .card .yingping .yp_text .yp_tree span{
    display: inline-block;
    padding: 0 0.7rem;
    border-radius: 0.8rem;
    margin-bottom: 0.4rem;
    margin-left: 0.6rem;
    border: 1px solid #cfcece;
}
#detail .card .yingping .yp_text .yp_tree{
    margin-bottom: 1.6rem;
}
#detail .card .imges .span_name1{
    margin-left: 1rem;
    display: block;
    font-weight: bold;
    font-size: 1.6rem;
}
#detail .card .imges .imges_ul{
    overflow: auto;
    width: 100%;
    position: relative;
    margin-bottom: 2rem;
}
#detail .card .imges .img{
    margin-left: 1rem;
    width: 309rem;
    overflow: hidden;
}
#detail .card .imges .img img{
    width: auto;
    height: 17rem;
}
#detail .card .yingping .yp_txt{
    width: 97%;
    margin-left: 1rem;
    margin-bottom: 2rem;
}
#detail .card .yingping  .yp_txt .img1{
    position: absolute;
    width: 4rem;
    height: 4rem;
    border-radius: 4rem;
}
#detail .card .yingping  .yp_txt .person{
    margin-left: 12%;
    width: 80%;
    display: inline-block;
}
#detail .card .yingping  .yp_txt .person span{
    display: block;

}
#detail .card .yingping  .yp_txt .person .name{
    font-weight: bold;
    font-size: 1.4rem;
}
#detail .card .yingping  .yp_txt .person .time{
    color: #cfcece;
    margin-bottom: 1rem;
}
#detail .card .yingping  .yp_txt .person .txt{
    line-height: 1.9rem;
    font-size: 1.3rem;
}
#detail .card .yingping  .yp_txt .person .icon{
    float: right;
}
#detail .card .yingping  .yp_txt .person .icon span{
    margin-left: 0.3rem;
    font-size: 1rem;
    color: #919191;
    display: inline-block;
}
#detail .ban{
    width: 100%;
    height: 73.7rem;
    position: fixed;
    top: 0;
    left: 41.4rem;
    background-color: #ffffff;
}
#detail .ban .icon-fanhui{
    margin-left: 1rem;
}
#detail .ban .name{
    display: inline-block;
    text-align: center;
    width: 91%;
    line-height: 4rem;
    margin-bottom: 2rem;
}
#detail .ban .name .btn{
        float: right;
    margin: 1rem 1rem 0 0;
    padding: 0.3rem 1.5rem;
    background-color: #F9549B;
    outline: none;
    border: 0px;
    border-radius: 1.3rem;
    color: #ffffff;
}
#detail .ban .pingfen{
    font-size: 1.7rem;
    margin-left: 1rem;
}
#detail .ban .el-rate{
    line-height: 1.5rem;
    font-size: 1.5rem;
    display: inline-block;
}
#detail .ban .input{
    font-size: 1.5rem;
    width: 100%;
    background-color: #ffffff;
    color: #919191;
    outline: none;
    border: 0px;
    height: 15rem;
}
</style>