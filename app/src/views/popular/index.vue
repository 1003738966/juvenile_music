<template>
   <div>
       <Index :songlist='songlist'></Index> 
   </div>
</template>
<script>
import Index from '../../components/index'
export default{
	name:'popular',
	components:{
        Index,
    },
    computed: {
        songlist: function() {
            return this.$store.getters.songlist[0]
        },
    }
    
}


</script>
