<script setup>
import axios from "axios"
import { showLoadingToast,closeToast, showDialog} from "vant";
import MainBody from "./MainBody.vue";
import Tabbar from "./Tabbar.vue";
</script>

<template>
  <van-nav-bar class="NavBar" left-arrow @click-left="onClickLeft"/>
      <MainBody>
        <div class="container" v-if="isShow">  
          <div class="banner">
            <img :src="itemDetails.image_url"/>
          </div>
          <div class="info">
            <div class="bundlesName">{{ itemDetails.asset_contract.name }}
              <van-icon name="checked" />
            </div>
            <div class="itemName">{{ itemDetails.name.substring(itemDetails.name.indexOf("#"),50) }}</div>
            <div class="description"> {{ itemDetails.asset_contract.description }}  </div>
            <h2>Creator</h2>
            <img :src="itemDetails.collection.image_url"/>            
            <h2>Collection</h2>
            <div class="collection">
              <img :src="itemDetails.collection.featured_image_url"/>
              <div class="description"> {{ itemDetails.collection.description }}  </div>
            </div>
          </div>
        </div>
      </MainBody>
      <Tabbar/>
</template>


<script>

export default{
    data() {
        return {
            itemDetails: [],
            isShow:false,
        };
    },
    methods:{
      onClickLeft(){
        history.back()
      },
    },
    mounted(){
      this.isShow = true
    },
    created() {
        axios({
          url: `https://api.opensea.io/api/v1/asset/${this.$route.params.id}/${this.$route.params.num}`,
          name: "Get Asset",
          description: "",
          renders: [
          "application/json",
          "text/html"
            ],
            "parses": [
                "application/json",
                "application/x-www-form-urlencoded",
                "multipart/form-data"
            ]
        })
            .then(res => {
            this.itemDetails = res.data;
        }),
            axios.interceptors.request.use(function (config) {
                showLoadingToast({
                    message: "Loading...",
                    forbidClick: true,
                    duration: 0,
                });
                return config;
            }, function (error) {
                return Promise.reject(error);
            }),
            axios.interceptors.response.use(function (response) {
                closeToast();
                return response;
            }, function (error) {
                closeToast();
                showDialog({ 
                  message: 'We are using OpenSea free API.\nBut unfortunately for some reasons\nthey dont callback this srouce.\nPlease return and try another one.\nThanks for your understanding.',
                  theme:'round-button',
                  confirmButtonColor:'#1A1F84',
                  closeOnClickOverlay:true,
                });
                return Promise.reject(error);
            });
    },
    components: { MainBody, Tabbar }
}


</script>


<style scoped>

.empty p{
  text-align: center;
  font-weight: bold;
}

h2{
  font-weight: bold;
}
.description{
  margin: 1rem 0 ;
}
.bundlesName{
  font-weight: bold;
  margin-top: 1rem;
  font-size: 1.5rem;
  color: #1A1F84;
}

.itemName{
  font-weight: bold;
}

.banner{
  display: flex;
}

img{
  width: 100%;
  margin:1rem 0 
}
.banner img{
  width: 18.5rem;
  height: 18.5rem;
  border-radius: 1rem;
  margin: 0 auto;
  box-shadow: 0rem -13rem 100rem orange
}

@media (max-width: 576px) {

  .description{
    font-size: 1.3rem;
    overflow-wrap: break-word
  }

.bundlesName{
  font-size: 2rem;
}

.itemName{
  font-size: 1.7rem;
}

}

</style>