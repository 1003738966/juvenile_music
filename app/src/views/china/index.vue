<template>
   <div>
       <Index :songlist='songlist'></Index> 
   </div>
</template>
<script>
import Index from '../../components/index'
export default{
    name:'china',
    components:{
        Index,
    },
    computed: {
        songlist: function() {
            return this.$store.getters.songlist[4]
        },
    }
    
}


</script>
