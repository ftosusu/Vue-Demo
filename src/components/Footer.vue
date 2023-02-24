<template>
    <div id="footer" @click="text()">
        <router-link class="lis1" to="home">
            <i class="el-icon-house"></i><span>首页</span>
        </router-link>
        <router-link class="lis1" to="video">
            <i class="iconfont icon-bofang2"></i><span>快看</span>
        </router-link>
        <router-link class="lis1" to="movie">
            <i class="iconfont icon-dianying"></i><span>电影</span>
        </router-link>
        <router-link class="lis1" to="show">
            <i class="iconfont icon-yanchu"></i><span>演出</span>
        </router-link>
        <router-link class="lis1" to="me">
            <i class="iconfont icon-xiaoxi"></i><span>我的</span>
        </router-link>
    </div>
</template>
<style>
a{
    text-decoration: none;
}
#footer{
    width: 100%;
    background-color: #ffffff;
}
#footer .lis1{
    float: left;
    line-height: 1.8rem;
    text-align: center;
    font-size: 1rem;
    padding: 0.5rem 2.9rem;
    color: #bebebe;
}
#footer .active{
    color: #b8115f!important;
}
#footer .lis1 i{
    display: block;
    margin-bottom: 0.2rem;
}
#footer .lis1 span{
    font-size: 0.8rem;
}
#footer .el-icon-house{
    font-size: 2rem;
}
#footer .iconfont{
    font-size: 2rem;
}
#footer .icon-dianying{
    font-size: 2.5rem;
}
</style>
<script>

export default {
    mounted(){
    //     $("#footer .lis1").on('click',function(){
    //     $("#footer .lis1").removeClass("active")
    // })
    }
}
</script>