<template>
  <div id="dyp">
      <div class="header">
          <i class="iconfont icon-fanhui" @click="prev()"></i>
          <span>我的电影票</span>
      </div>
      <div class="content">
          <span class="zuo">座</span>
          <div class="text">
              <p>我和我的家乡 1张</p>
              <span class="time">2020-10-04 16:05</span>
              <span class="address">天幕新彩云国际影院</span>
              <div class="pingjia">
                  <span>查看影片评价</span> <span>查看影院评价</span>
              </div>
              
          </div>
      </div>
      <div class="content">
          <span class="zuo">座</span>
          <div class="text">
              <p>姜子牙 1张</p>
              <span class="time">2020-10-04 13:30</span>
              <span class="address">天幕新彩云国际影院</span>
              <div class="pingjia">
                  <span>查看影片评价</span> <span>查看影院评价</span>
              </div>
              
          </div>
      </div>
      <div class="content">
          <span class="zuo">座</span>
          <div class="text">
              <p>八佰 2张</p>
              <span class="time">2020-08-22 18:30</span>
              <span class="address">如皋米高4k国际影院(安定广场店)</span>
              <div class="pingjia">
                  <span>查看影片评价</span> <span>查看影院评价</span>
              </div>
              
          </div>
      </div>
      <div class="content">
          <span class="zuo">座</span>
          <div class="text">
              <p>海上钢琴师 1张</p>
              <span class="time">2019-11-16 10:20</span>
              <span class="address">IMAX空间站影院</span>
              <div class="pingjia">
                  <span>查看影片评价</span> <span>查看影院评价</span>
              </div>
              
          </div>
      </div>
      <div class="content">
          <span class="zuo">座</span>
          <div class="text">
              <p>天气之子 1张</p>
              <span class="time">2019-11-03 12:10</span>
              <span class="address">IMAX空间站影院</span>
              <div class="pingjia">
                  <span>查看影片评价</span> <span>查看影院评价</span>
              </div>
              
          </div>
      </div>
      
      <div class="content">
          <span class="zuo">座</span>
          <div class="text">
              <p>我和我的祖国 2张</p>
              <span class="time">2019-10-03 10:10</span>
              <span class="address">台前县中影时光国际影院</span>
              <div class="pingjia">
                  <span>查看影片评价</span> <span>查看影院评价</span>
              </div>
              
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
#dyp{
    background-color: #dfdfdf;
    overflow: hidden;
    width: 100%;
}
#dyp .header{
    background-color: #ffffff;
    width: 100%;
    height: 4rem;

}
#dyp .header span{
    margin-left: 15rem;
    line-height: 4rem;
    font-size: 1.7rem;
    font-weight: bold;
}
#dyp .content{
    background-color: #ffffff;
    margin-top: 1.5rem;
}
#dyp .content .zuo{
    position: relative;
    top: -5rem;
    display: inline-block;
    width: 4rem;
    height: 4rem;
    background-color: #9999;
    margin-right: 3rem;
    color: #ffffff;
    border-radius: 4rem;
    text-align: center;
    margin-left: 1rem;
    line-height: 4rem;
    font-size: 2rem;
}
#dyp .content .text{
    display: inline-block;
    color: #9999;
}
#dyp .content .text p{
    font-size: 1.7rem;
    line-height: 2rem;
}
#dyp .content .text span{
    display: block;
    margin-bottom: 1rem;
}
#dyp .content .text .pingjia span{
    color: #000000;
    display: inline-block;
    border-radius: 2rem;
    border: 0.1rem solid #9999;
    padding: 0.7rem 1.7rem;
}
#dyp .content .text .pingjia span:last-child{margin-left: 1rem;}
</style>