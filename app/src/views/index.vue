<template>
    <div class="login_container">
	    <header>
            <span class="fa fa-angle-left"></span>
            <span class="fa fa-user-circle"></span>
            <div>
                <input type="text" placeholder="请输入要查找的歌曲"/>
            </div>
        </header>
        <div class="header"></div>
        <Index></Index>
    </div>
</template>
<script>
import Index from './index/index'
export default{
    name:'Index1',
    components:{
        Index,
    },
    
} 
</script>