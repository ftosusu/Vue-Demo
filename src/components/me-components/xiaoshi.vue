<template>
    <div id="xiaoshi">
         <div class="header">
          <i class="iconfont icon-fanhui" @click="prev()"></i>
          <span>我的小食</span>
      </div>
      <div class="content">
          <img src="../../../src/assets/img/xiaoshi2.jpg" alt="">
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
#xiaoshi{
    background-color: #dfdfdf;
    overflow: hidden;
    width: 100%;
    margin-bottom: 6rem;
}
#xiaoshi .header{
    background-color: #ffffff;
    width: 100%;
    height: 4rem;

}
#xiaoshi .header span{
    margin-left: 15rem;
    line-height: 4rem;
    font-size: 1.7rem;
    font-weight: bold;
}
#xiaoshi .content{
    width: 100%;
    height: 63.3rem;
    background-color: #e9e9e9;
}
#xiaoshi .content img{
   width: 100%;
}
</style>