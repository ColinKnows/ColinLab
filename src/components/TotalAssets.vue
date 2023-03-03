<script setup>

import { showLoadingToast } from 'vant';
</script>


<template>
    <div class="totalAssets">
        US$ 8888.30
      </div>
      <div class="trade">
        <van-row justify="space-around">
          <van-col span="6">
            <van-icon name="add" size="2.2rem" color="#1A1F84" @click="addValue"/>
            <p>Buy</p>
          </van-col>
          <van-col span="6">
            <van-icon name="pause-circle" size="2.2rem" color="#1A1F84" style="transform: rotate(90deg)"/>
            <p>Swap</p>
          </van-col>
          <van-col span="6">
            <van-icon name="gold-coin" size="2.2rem" color="#1A1F84" />
            <p>Earn</p>
          </van-col>
          <van-col span="6">
            <van-icon name="more" size="2.2rem" color="#1A1F84"/>
            <p>More</p>
          </van-col>
        </van-row>
        {{ amout}}
      </div>
</template>

<script>

export default{
  data(){
    return{
      amout:1
    }
  },
  methods:{
    addValue(){
      this.amout++,
      showLoadingToast({
        message: 'Saving a bit-coin',
        forbidClick: true,
        loadingType: 'spinner',
      });
    },
    
  }
}


</script>


<style scoped>


input{
  width: 6rem;
  margin: .5rem;
  border-radius: .3rem;
  border-width: .1rem;
  border-color: #1A1F84;
}
.addValue{
  margin: .3rem;
}

.van-icon{
  cursor: pointer;
}

.totalAssets{
  font-size: 1.2rem;
  padding: .5rem 1rem ;
}

.trade{
  text-align: center;
}
</style>