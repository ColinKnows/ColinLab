<script setup>
import axios from "axios"
import { showLoadingToast,closeToast,showDialog} from "vant"
</script>


<template>
    <div class="HomeDetail">
        <van-tabs v-model:active=active shrink>
            <van-tab title="Crypto" class="CryptoList">
                <van-list v-model:loading="loading" :finished="finished" finished-text="---Nothing---" @load=onload :immediate-check="false">
                    <li class="detail" v-for="data in datalist" :key="data.id">
                        <img :src="data.image" :onerror="defaultImg"/>
                        <div class="Transacations">
                            <div class="fullname">{{data.name}}</div>
                            <div class="name">{{data.symbol}}</div>
                        </div>
                        <div class="price">
                            <div :class="data.price_change_percentage_24h>0?'percentGreen':'percentRed'">{{parseFloat(data.price_change_percentage_24h).toFixed(2).concat('%')}}</div>
                            <div class="coinprice">{{"$"+data.current_price}}</div>
                        </div>
                    </li>
                </van-list>
            </van-tab>
            <van-tab title="Trending" class="CryptoList">
                <ul>
                    <li class="detail" v-for="item in Trending" :key="item.item.id">
                        <img :src="item.item.small" :onerror="defaultImg"/>
                        <div class="Transacations">
                            <div class="fullname">{{item.item.name}}</div>
                            <div class="name">{{item.item.symbol}}</div>
                        </div>
                        <div class="TrendingPrice" >
                            {{parseFloat(item.item.price_btc).toFixed(7).concat('BTC')}}
                        </div>
                    </li>
                </ul>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>


export default{
  data(){
    return{
        datalist:[],
        Trending:[],
        loading:false,
        finished:false,
        current:1,
        active:true,
    }
  },
  mounted(){
    
  },
  created(){
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true")
        .then(res=>{
            this.datalist=res.data
        });
    axios.get("https://api.coingecko.com/api/v3/search/trending")
        .then(res=>{
            this.Trending=res.data.coins
        });
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
            showDialog({ 
                  message: 'We are using CoinGecko free API.\nToo many request now,\n it would be fine in 1 min later',
                  theme:'round-button',
                  confirmButtonColor:'#1A1F84',
                  closeOnClickOverlay:true,
                });
            return Promise.reject(error);
        });
  },
  components:{
  },
  computed: {
        defaultImg () {
            return 'this.src="' + ('public/coin.png') + '"';
        }
    },
  methods:{
    onload(){
        this.current++
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${this.current}&sparkline=true`)
        .then(res=>{
            this.datalist=[...this.datalist,...res.data]
            this.loading=false
        })
    },
  },
  
}

</script>

<style scoped>


.van-tab{
    font-size: 900;
    font-weight: bold;

}
.TrendingPrice{
    font-size: .8rem;
    margin-left:0;
    align-self: center;
    font-weight: 500;
}

.detail{
    display: flex;
    margin-bottom: 1.5rem;
}



.detail img{
    width: 2.2rem;
    height: 2.2rem;
    align-self: center;
}


.Transacations{
    margin-left: 1.55rem;
    align-self: center;
    flex:1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.fullname{
    font-size: 1rem;
}

.name{
    font-size: 1rem;
}
.price{
    display: flex;
    flex-direction: column;
    width: 5rem;
    text-align: end;
}

.percentRed{
    font-size: 1rem;
    margin-right:0;
    color: red;
    font-weight: 600;

}

.percentGreen{
    font-size: 1rem;
    margin-right:0;
    color:green;
    font-weight: 600;
}

.coinprice{
    font-size: 1rem;
}

.CryptoList{
    padding: 1.2rem 1rem;
}

@media (max-width: 576px) {
.fullname{
    font-size: 1rem;    
}

.name{
    font-size: 1rem;
}

.coinprice{
    font-size: 1rem;
}

.percentGreen{
    font-size: 1rem;
    margin-right:0;
    color:green;
    font-weight: 600;
}

.percentRed{
    font-size: 1rem;
    margin-right:0;
    color: red;
    font-weight: 600;

}

.detail img{
    width: 2.7rem;
    height: 2.7rem;
    align-self: center;
}

}


</style>

