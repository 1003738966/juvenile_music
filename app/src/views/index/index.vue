<template>
    <div>
        <Banner></Banner>
        <List></List>
    </div>
</template>
<script>
import List from './list'
import Banner from './banner'
export default{
    name:'Index2',
    components:{
        List,
        Banner
    },
    
} 
</script>