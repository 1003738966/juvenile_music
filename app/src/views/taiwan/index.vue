<template>
   <div>
       <Index :songlist='songlist'></Index> 
   </div>
</template>
<script>
import Index from '../../components/index'
export default{
	name:'taiwan',
	components:{
        Index,
    },
    computed: {
        songlist: function() {
            return this.$store.getters.songlist[7]
        },
    }
    
}


</script>
