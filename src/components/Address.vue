<template>
    <div id="address">
        <router-link to="/maps" class="city">{{msg}}</router-link>
        <input class="line-limit-length" type="text" placeholder="       搜电影、影院、影人、演出、资讯、视频">
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-rili"></i>
        <i class="iconfont icon-saomiao"></i>
    </div>
</template>

<script>
import { getLocation } from "../assets/js/location.js";
export default{
    data(){
        return{
            msg:""
        }
    },
    mounted(){
        getLocation("box",(data)=>{
        console.log(data.replace("市",""))
        this.msg = data.replace("市","")
        })
    }
}
</script>
<style>
.line-limit-length{
    background-color: #ebebebb4;
    border: 0;
    width: 24rem;
max-width: 25rem;
border-radius: 5rem;
outline: none;
height: 2rem;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
}
.city{
    font-size: 1.4rem;
    margin-right: 1rem;
    display: inline-block;
    padding:0.5rem 1rem;
    color: black;
}
#address .icon-sousuo{
    color: #999999;
    position: relative;
    left: -24rem;
    top: 0.2rem;
}
#address .icon-rili ,#address .icon-saomiao{
    font-size:2.3rem ;
    line-height: 2.9rem;
    margin-right: 1.4rem;
}
</style>