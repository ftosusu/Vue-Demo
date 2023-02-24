<template>
    <div id="hotmovie">
        <ul>
            <li v-for="(val,index) in arrList" class="movie_lis" :key="index">
                <img :src="val.small" alt="" class="small">
                <div class="text">
                    <div>
                    <span class="name">{{val.name}}</span>
                    <span class="screen1">{{val.screen1}}</span>
                    <span class="screen2">{{val.screen2}}</span>
                    </div>
                    <span class="score">淘票票评分<span class="score2">{{val.score}}</span></span>
                    <span class="direct">{{val.direct}}</span>
                    <span class="actor">{{val.actor}}</span>
                    <span class="ask">{{val.ask}}</span>
                </div>
                <router-link :to="'/detail/'+val.id" class="sell">{{val.sell}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            arrList:[]
        }
    },
    methods:{
        getData(){
            var _this = this
            this.$http.get("/src/data/hotmovie.data").then(function(res){
                _this.arrList = res.data
            }).catch(function(error){
                console.log(error)
            })
        }
    },
    mounted(){
        this.getData()
    }
}
</script>
<style>
@import url(../../assets/css/hotmovie.css);
/* #hotmovie .add{
margin-bottom: 5rem;
} */
</style>