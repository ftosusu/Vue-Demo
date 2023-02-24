<template>
<div id="map">
<i class="iconfont icon-fanhui" @click="prev()"></i>
<div id="container"></div>
<div id="myPageTop">
    <table>
        <tr>
            <td>
                <label>请输入关键字：</label>
            </td>
        </tr>
        <tr>
            <td>
                <input id="tipinput"/>
            </td>
        </tr>
    </table>
</div>
    </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  mounted(){
    var map = new AMap.Map("container", {
        resizeEnable: true,
        enableHighAccuracy: true,
        viewMode: '3D',
        pinch: 45
    });
    //输入提示
    var autoOptions = {
        input: "tipinput"
    };
    var auto = new AMap.Autocomplete(autoOptions);
    var placeSearch = new AMap.PlaceSearch({
        map: map
    });  //构造地点查询类
    AMap.event.addListener(auto, "select", select);//注册监听，当选中某条记录时会触发
    function select(e) {
        placeSearch.setCity(e.poi.adcode);
        placeSearch.search(e.poi.name);  //关键字查询查询
    }
        AMap.plugin([
        'AMap.ControlBar',
    ], function(){

        // 添加 3D 罗盘控制
        map.addControl(new AMap.ControlBar());
    });
  },
  methods:{
       prev(){
            this.$router.go(-1)
        }
  }
}
</script>
<style>
#map .icon-fanhui{
z-index: 1000;
    position: absolute;
    top: 2rem;
    font-size: 2rem;
}
#map{
  width: 100%;
  height: 74rem;
}
#map #myPageTop {
  right: 20rem;
}
</style>