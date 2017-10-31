import Vue from 'vue'
import Router from 'vue-router'
//懒加载
const _import = file => () => import('@/views/' + file + '.vue')
const _import1 = file => () => import('../components/' + file + '.vue')

// 首页
const Index = _import('index')

// 流行音乐列表页
const Popular = _import('popular/index')

// 热歌音乐列表页
const Hotsong = _import('hotsong/index')

// 新歌音乐列表页
const Newsong = _import('newsong/index')

// 巅峰榜音乐列表页
const Peak = _import('peak/index')

// 中国音乐列表页
const China = _import('china/index')

// 网络音乐列表页
const Network = _import('network/index')

// 内地音乐列表页
const Inland = _import('inland/index')

// 台湾音乐列表页
const Taiwan = _import('taiwan/index')

// 欧美音乐列表页
const Europe = _import('europe/index')

// 韩国音乐列表页
const Korea = _import('korea/index')

// 日本音乐列表页
const Japan = _import('japan/index')

// MV音乐列表页
const Mv = _import('mv/index')

// 腾讯音乐列表页
const Tencent = _import('tencent/index')

// K歌音乐列表页
const Greathit = _import('greathit/index')

// 播放详情页
const Details = _import1('details')


export const routerMap = [
    {
        path: '/',
        name: 'Index',
        component: Index,
    },
    {
        path: '/popular',
        name: 'Popular',
        component: Popular,    
    },
    {
        path: '/hotsong',
        name: 'Hotsong',
        component: Hotsong,    
    },
    {
        path: '/newsong',
        name: 'Newsong',
        component: Newsong,    
    },
    {
        path: '/peak',
        name: 'Peak',
        component: Peak,    
    },
    {
        path: '/china',
        name: 'China',
        component: China,    
    },
    {
        path: '/network',
        name: 'Network',
        component: Network,    
    },
    {
        path: '/inland',
        name: 'Inland',
        component: Inland,    
    },
    {
        path: '/taiwan',
        name: 'Taiwan',
        component: Taiwan,    
    },
    {
        path: '/europe',
        name: 'Europe',
        component: Europe,    
    },
    {
        path: '/korea',
        name: 'Korea',
        component: Korea,    
    },
    {
        path: '/japan',
        name: 'Japan',
        component: Japan,    
    },
    {
        path: '/mv',
        name: 'Mv',
        component: Mv,    
    },
    {
        path: '/tencent',
        name: 'Tencent',
        component: Tencent,    
    },
    {
        path: '/greathit',
        name: 'Greathit',
        component: Greathit,    
    },
    {
        path: '/details',
        name: 'Details',
        component: Details,    
    },



]

Vue.use(Router)

export default new Router({
    mode: 'hash',
    linkActiveClass: 'active',
    routes: routerMap
})
