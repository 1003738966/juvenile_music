<template>
   <div>
       <Index :songlist='songlist'></Index> 
   </div>
</template>
<script>
import Index from '../../components/index'
export default{
    name:'tencent',
    components:{
        Index,
    },
    computed: {
        songlist: function() {
            return this.$store.getters.songlist[12]
        },
    },
    created(){
        this.init();
    },
    methods:{
        init(){
            window.scrollTo(0,0);
        }
    },
    
}


</script>
