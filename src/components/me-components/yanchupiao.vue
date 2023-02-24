<template>
    <div id="dingdan">
        <div class="header">
          <i class="iconfont icon-fanhui" @click="prev()"></i>
          <span>订单列表</span>
      </div>
      <div style="width:100%">
<img src="../../assets/img/92b4165cfea4cf1b0931e1ea5e34980.jpg" alt="" class="img">
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
#dingdan{
    background-color: #dfdfdf;
    overflow: hidden;
    width: 100%;
}
#dingdan .header{
    background-color: #ffffff;
    width: 100%;
    height: 4rem;

}
#dingdan .header span{
    font-weight: bold;
    margin-left: 2rem;
    line-height: 4rem;
    font-size: 1.7rem;
}
#dingdan .img{
    width: 100%;
}
</style>