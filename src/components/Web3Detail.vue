<script setup>
import axios from 'axios';
import { showLoadingToast,closeToast} from "vant"
</script>


<template>
  <div class="container">
    <h2>Spotlight</h2>
    <div class="swipe">
      <van-swipe :autoplay="3000" indicator-color="white" >
        <van-swipe-item v-for="item in web3list" :key="item.id" v-show="item.image_url !== null">
            <img :src="item.image_url ===null ? `https://opensea.io/static/images/logos/opensea.svg` : item.image_url" @click="handleChangePage(item.asset_contract.address,item.token_id)">
        </van-swipe-item>
      </van-swipe>
    </div>
    <h2>Bundles</h2>
      <div class="">
        <div class="collections scroll" v-for="item in bundles" :key="item.id">
          <div class="collections" v-for="data in item.assets" :key="data.asset_contract.address">
            <div class="imgList">
            <img :src="data.image_url" @click="handleChangePage(data.asset_contract.address,data.token_id)">    
            <div class="imgName">{{ data.name }}</div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>


<script>

export default{
  created(){
    axios.get("https://api.opensea.io/api/v1/assets?limit=5")
        .then(res=>{
            this.web3list = res.data.assets  
          }),
    axios.interceptors.request.use(function (config) {
      showLoadingToast({
        message: 'Loading...',
        forbidClick: true,
        duration:0,
        });
        return config;
      }, function (error) {
        return Promise.reject(error);
      }),
      axios.interceptors.response.use(function (response) {
        closeToast()
        return response;
      }, function (error) {
        closeToast()
        return Promise.reject(error);
      });
    axios.get("https://api.opensea.io/api/v1/bundles?offset=0&limit=10")
        .then(res=>{
            this.bundles = res.data.bundles  
          })
  },
  data(){
    return{
      web3list:[],
      bundles:[],
      isShow:true,
    }
  },
  methods: {
    handleChangePage(id,num){
      this.$router.push(`/detail/${id}/${num}`)
    }
    },
}

</script>

<style scoped>

.imgName{
  margin-left: .7rem;
  margin-bottom: .6rem;
}

h2{
  margin-bottom: 1rem;
  font-weight: 700;
}
.imgList{
  background-color:#f0f0f0;
  display: flex;
  flex-direction: column;
}
.collections img{
  width: 7rem;
  height: 7rem;
  border-radius: 1.5rem;
  padding: .7rem;
  margin-top: .5rem;
  cursor: pointer;
}

.scroll{
  display: flex;
  overflow: auto;
}

::-webkit-scrollbar{
    display:none;
}
.collections{
  display: flex;
  border-radius: .3rem;
  margin: .5rem 0;


}
.van-swipe-item{
  display: flex;
}
.swipe img{
    width: 100%;
  }

  .swipe{
    height: 19rem;
    overflow:hidden;
    margin-bottom: 1rem;
  }






  @media (max-width: 576px) {

    .imgName{
      font-size: 1.3rem;
  }

}
</style>