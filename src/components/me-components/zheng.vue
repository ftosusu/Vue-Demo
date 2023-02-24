<template>
    <div id="zheng">
        <div class="header">
            <i class="iconfont icon-fanhui" @click="prev()"></i>
            <span>电影资料馆电子访客证</span>
        </div>
        <div class="text">
            <span>自3月1日起资料馆启用电子访客证制度，一人一证方能入场，为保障您快捷、顺利入场，请尽快生成</span>
        </div>
        <div class="img">
            <img src="../../assets/img/zheng.jpg" alt="">
        </div>
        <div class="form">
            <input type="text" placeholder="姓名" id="name">
            <input type="text" placeholder="手机号码" id="phone">
            <input type="text" placeholder="验证码" id="key"><a href="##" class="yzm" @click="createCode(6)">发送验证码</a>
            <button class="btn1" @click="validateCode()">生成电子访客证</button>
            <span>查看用户信息使用规则<a href="##">《电影资料馆艺术影院用户须知》</a></span>
        </div>
        <div id="qrcode">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            card:""
        }
    },
methods:{
    prev(){
            this.$router.go(-1)
        },
    createCode(length) {
        var code = "";
        var codeLength = parseInt(length); //验证码的长度
        ////所有候选组成验证码的字符，当然也可以用中文的
        var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); 
        //循环组成验证码的字符串
        for (var i = 0; i < codeLength; i++)
        {
            //获取随机验证码下标
            var charNum = Math.floor(Math.random() * 62);
            //组合成指定字符验证码
            code += codeChars[charNum];
        }
        this.card = code
        window.alert(code)
        console.log(this.card)
    },
    validateCode()
    {
        //获取显示区生成的验证码
        var checkCode = this.card;
        //获取输入的验证码
        var inputCode = $("#zheng #key").val();
        console.log(checkCode);
        console.log(inputCode);
        if (inputCode.length <= 0)
        {
            alert("请输入验证码！");
        }
        else if (inputCode.toUpperCase() != checkCode.toUpperCase())
        {
            alert("验证码输入有误！");
            this.createCode(6);
        }
        else
        {
            alert("验证码正确！");
            $("#zheng .form").css({"display":"none"})
            var str = $("#name").val()
            console.log(str)
        new QRCode(document.getElementById("qrcode"), (str));
        }       
    }    
},
mounted(){
}
}
</script>
<style>
#zheng{

    overflow: hidden;
    width: 100%;
    margin-bottom: 6rem;
}
#zheng .icon-fanhui{
    font-size: 2rem;
    color: #0381DD;
    font-weight: bold;
}
#zheng .header{
    background-color: #ffffff;
    width: 100%;
    height: 4rem;
    border-bottom: 1px solid rgba(230, 230, 230, 0.6);
}
#zheng .header span{
    font-weight: bold;
    margin-left: 1rem;
    line-height: 4rem;
    font-size: 1.7rem;
}
#zheng .text{
    background-color:#FEF8E3;
    height: 4rem;
}
#zheng .text span{
    display: inline-block;
    padding: 0.5rem 0.5rem;
    color: #E4BE7F;
}
#zheng .img{
    margin: 2rem 0;
    width: 100%;
}
#zheng .img img{
    width: 100%;
}
#zheng .form{
    margin-top: 4rem;
}
#zheng .form input{
    font-size: 1.5rem;
    background-color: #F6F6F6;
    color:#9F9F9F;
    border-radius: 2rem;
    border: 0px solid #999;
    outline: none;
    display: block;
    width: 70%;
    height: 4rem;
    margin: 0 auto;
    margin-bottom: 2rem;
}
#zheng .form .btn1{
    font-weight: bold;
    color: #ffffff;
    display: block;
    background-color:#FE4059;
    outline: none;
    border: 0px;
    margin:  0 auto;
    height: 5rem;
    width: 50%;
    border-radius: 3rem;
}
#zheng .form span{

    margin-top:1rem;
    display: block;
    text-align: center;
}
#zheng .form span a{
    text-decoration: none;
}
#zheng a{
    color: #8DC3E3;
}
#zheng .form .yzm{
    text-decoration: none;
    font-size: 1.6rem;
    position: relative;
top: -5rem;
    right: -26rem;
}
#zheng #qrcode img{
    margin: 0 auto;
}
</style>