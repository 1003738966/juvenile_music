<template>
   <div class="box">
        <div class="box_img">
            <span class="fa fa-angle-left icon" @click="retur"></span>
            <img :src='url'>
            <div class="box_data">
                <span>{{string}}</span>
            </div>
        </div>
        <div class="box_popular">
            <ul>
                <li v-for="item in items" @click="details">
                    <div>{{item.number}}</div>
                    <div>
                        <span>{{item.songName}}</span>
                        <span>{{item.singerName}}</span>
                    </div>
                    <div class="fa fa-bar-chart-o"></div>
                </li>
            </ul>

        </div>
   </div>
</template>
<script>
export default{
	data(){
		return {
			string:'',
			items:[],
            url:''
		}
	},
	created(){
        this.init()
	    this.string = this.songlist.name
	    this.items = this.songlist.list
        this.url = this.songlist.img
	},
    methods:{
        init(){
            window.scrollTo(0,0);
        },
        retur(){
            this.$router.go(-1)
        },
        details(){
            this.$router.push({path:'/details'})
        }
    },
	props:{
        songlist:Array
    }
}
</script>
