<template>
    <div class="swipe-wrapper">
        <mt-swipe :auto="0" ref="swipeWrapper">
            <mt-swipe-item class="item" v-for="item in items">
                <img :src="item.url" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>

</template>
<script>
import { _BANNER } from '@/api/api_music'
export default{
	name:'banner',
	data(){
		return {
            items:[]
		}
	},
	created(){
        this.init()
    },
    methods:{
        _banner(){
            this.$post(`${_BANNER.list}`).then((data)=>{
                data.data.slider.forEach(e =>{
                    this.items.push({url:e.picUrl})
                })
            })
        },
        init(){
            this._banner()
        }

    }
}

</script>