<template>
  <div class="contain">
    <div class="title">ColinLab.id</div>
    <div class="gap"></div>
    <div class="icon" @click="scan"><van-icon name="scan" size="1.6rem" /></div>
    <div class="icon" @click="qr"><van-icon name="qr" size="1.6rem" /></div>
    <div class="icon" @click="gift"><van-icon name="point-gift-o" size="1.6rem" /></div>   
  </div>
</template>

<style scoped>

.contain{
  display: flex;
}

.icon{
  padding: 0 .4rem;
  cursor: pointer;
}

.gap{
  flex:1
}


.title{
    font-size: 1.3rem;
    padding-left:1rem ;
}
</style>


<script>
import { showToast} from 'vant';


export default{
  data(){
    return{
        
    }
  },
  methods:{
    qr(){
      showToast({
        message: 'Wishing you all the best!',
        icon: 'star',
      })
   },
   scan(){
      showToast({
        message: 'May the force be with you',
        icon: 'gem',
      })
   },
   gift(){
      showToast({
        message: 'I’m happy for your joy! ',
        icon: 'gift',
      })
   }
  }
}
</script>