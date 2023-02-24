import Home from './components/Home.vue'
import Video from './components/Video.vue'
import Show from './components/Show.vue'
import Me from './components/Me.vue'
import Movie from './components/Movie.vue'
import Footer from './components/Footer.vue'
import Address from './components/Address.vue'
import Aiyi from './components/home-components/Aiyi.vue'
import Sing from './components/home-components/Sing.vue'
import Huaju from './components/home-components/Huaju.vue'
import Jingxuan from './components/home-components/Jingxuan.vue'
import Zuixin from './components/home-components/Zuixin.vue'
import Detail from './components/home-components/jingxuan-components/Detail.vue'
import Image from './components/home-components/jingxuan-components/Image.vue'
import Maps from './components/Map.vue'
import Cinema from './components/movie-components/Cinema.vue'
import HotMovie from './components/movie-components/HotMovie.vue'
import Coming from './components/movie-components/Coming.vue'
import Online from './components/movie-components/Online.vue'

import Swhuaju from './components/show-components/Huaju.vue'
import Swsing from './components/show-components/Sing.vue'
import Swsou from './components/show-components/Souye.vue'

import My from './components/me-components/My.vue'
import DYP from './components/me-components/dianyingpiao.vue'
import XS from './components/me-components/xiaoshi.vue'
import ycp from './components/me-components/yanchupiao.vue'
import Sz from './components/me-components/shezhi.vue'
import Z from './components/me-components/zheng.vue'
export default{
    routes:[
        {
            path:'/home',component:Home,
            redirect:'/jingxuan',
            children:[
                {path:'/aiyi',component:Aiyi},
                {path:'/sing',component:Sing},
                {path:'/zuixin',component:Zuixin},
                {path:'/huaju',component:Huaju},
                {
                    path:'/jingxuan',component:Jingxuan,
                    // redirect:"/image/1",
                    // children:[
                    //     {path:"/image/:id",component:Image},
                        
                    // ]
            },
            
        ]
        },
        {path:"/image/:id",component:Image},
        {path:"/detail/:id",component:Detail},
        {path:'/video',component:Video},
        {path:'/footer',component:Footer},
        {
            path:'/show',component:Show,
            redirect:'/souye',
            children:[
                {path:'/souye',component:Swsou},
                {path:'/s-sing',component:Swsing},
                {path:'/s-huaju',component:Swhuaju},
            ]
    },
        {
            path:'/Movie',component:Movie,
            redirect:'/hotmovie',
            children:[
                {path:'/hotmovie',component:HotMovie},
                {path:'/cinema',component:Cinema},
                {path:'/online',component:Online},
                {path:'/coming',component:Coming},

            ]
    },
        {
            path:'/me',component:Me,
            children:[
                
            ]
        },
        {path:'/zheng',component:Z},
        {path:'/shezhi',component:Sz},
        {path:'/xiaoshi',component:XS},
        {path:'/yanchu',component:ycp},
        {path:'/my',component:My},
        {path:'/dyp',component:DYP},
        {path:'/address',component:Address},
        {path:'/maps',component:Maps},
        {path:'*',redirect:'/home'}
    ]
}