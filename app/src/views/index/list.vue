<template>
    <div class="container">
        <template v-for="list in lists">
            <div class="cell" @click="$router.push({path:list.path})">
                <div class="cell_img">
                    <img :src="list.url"></img>
                </div>
                <div class="cell_list">
                    <ul>
                        <li>{{list.name}}</li>
                        <li v-for="item in list.list">{{item.songName}}<span>{{item.singerName}}</span></li>     
                    </ul>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
export default{
    name:'list',
    data(){
        return {
            lists:[],
        }    
    },
    created(){
        this.lists = this.songlist
    },
    methods:{
        
    },
    computed: {
        songlist: function() {
            return this.$store.getters.songlist
        },
    }
}


</script>