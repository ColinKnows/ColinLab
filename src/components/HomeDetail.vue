<script setup>
import axios from "axios"
</script>


<template>
    <div class="HomeDetail">
        <van-tabs v-model:active="active" shrink>
            <van-tab title="Crypto" class="CryptoList">
                <div class="detail" v-for="data in datalist.slice(0, 500)" :key="data.id">
                    <div></div>
                    <img :src="show?`https://static.coinpaprika.com/coin/${data.id}/logo.png`:''" :onerror="defaultImg"/>
                    <div class="Transacations">
                        <div class="fullname">{{data.name}}</div>
                        <div class="name">{{data.symbol}}</div>
                    </div>
                    <div class="price">
                        <div class="percent">+2.13%</div>
                        <div class="coinprice">$23781.51</div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="Exchange" class="CryptoList">
                <div class="detail" v-for="data in datalist.slice(0, 500)" :key="data.id">
                    <div></div>
                    <img :src="show?`https://static.coinpaprika.com/coin/${data.id}/logo.png`:''">
                    <div class="Transacations">
                        <div class="fullname">{{data.name}}</div>
                        <div class="name">{{data.symbol}}</div>
                    </div>
                    <div class="price">
                        <div class="percent">+2.13%</div>
                        <div class="coinprice">$23781.51</div>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<style scoped>

.detail{
    display: flex;
    margin-bottom: 1.5rem;
}



.detail img{
    width: 2rem;
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
    font-size: .5rem;
}

.name{
    font-size: .5rem;
}
.price{
    display: flex;
    flex-direction: column;
    width: 5rem;
    text-align: end;
}

.percent{
    font-size: .5rem;
    margin-right:0;
    color: green;
}

.coinprice{
    font-size: .5rem;
    margin-left:0
}

.CryptoList{
    padding: 1.2rem;
}

</style>

<script>


export default{
  data(){
    return{
        datalist:[],
        show:true
    }
  },
  mounted(){
        axios.get("/coin.json")
        .then(res=>{
            // console.log(res.data)
            this.datalist=res.data
        })
        // axios.get(`https://api.coinpaprika.com/v1/coins/${this.datalist.id}/ohlcv/today`)
        // .then(res=>{
        //     console.log(res.data)
        //     this.pricelist=res.data
        // })
  },
  components:{
  },
  computed: {
        defaultImg () {
            return 'this.src="' + ('public/coin.png') + '"';
        }
    },
  props:{

  },
  Methods:{
  },
  
}

</script>