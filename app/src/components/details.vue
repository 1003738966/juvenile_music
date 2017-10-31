<template>
   <div class="details">
	   <div class="details_title">
	       <span class="fa fa-angle-left icon" @click="returs"></span>
		   <span class="title">{{name}}</span>
	   </div>
       <div class="details_center"></div>
	   <div class="details_bottom">
           <div class="fa fa-fast-backward "></div>
           <div :class="[commonClass,suspend]" @click="suspends"></div>
           <div class="fa fa-fast-forward"></div>
	   </div>
       <span :class="[commonClass,className,span1]" @click="pattern"></span>
       <span class="fa fa-navicon span_right"></span>
   </div>

</template>
<script>
export default{
	data(){
		return{
			name:'我是你的眼',
			commonClass:'fa',
			className:'fa-random',
			span1:'span_left',
			suspend:'fa-pause',
		}
	},
	created(){
        
	},
	methods:{
		returs(){
			this.$router.go(-1)
		},
		pattern(){
	        if(this.className=='fa-random'){
	            this.className = 'fa-refresh'
	        }else if(this.className=='fa-refresh'){
		        this.className = 'fa-exchange'
	        }else if(this.className=='fa-exchange'){
		        this.className = 'fa-random'
	        }
		},
		suspends(){
			if(this.suspend=='fa-pause'){
	            this.suspend = 'fa-play'
			}else if(this.suspend=='fa-play'){
                this.suspend = 'fa-pause'
			}
		},
		
	}
}



</script>