<template>
    <div id="shezhi">
        <div class="header">
          <i class="iconfont icon-fanhui" @click="prev()"></i>
          <span>设置</span>
      </div>
      <div class="touxiang">
          <img src="../../assets/img/touxiang.jpg" alt="">
          <div class="name">
              <span class="id">throwsExceptions</span>
              <span>淘</span> <span>念......素</span>
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
#shezhi{
    background-color: #ebebeb;
    overflow: hidden;
    width: 100%;
    margin-bottom: 6rem;
}
#shezhi .header{
    background-color: #ffffff;
    width: 100%;
    height: 5rem;
    margin-bottom: 1.5rem;

}
#shezhi .header span{
    font-weight: bold;
    margin-left: 17rem;
    line-height: 4rem;
    font-size: 1.7rem;
}
#shezhi div{
    background-color: #ffffff;
}
#shezhi .touxiang img{
    width: 7rem;
    border-radius: 3rem;
}
#shezhi .name{
    display: inline-block;
}
#shezhi .name .id{
    display: block;
}
</style>