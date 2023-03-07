<script setup>
import { showLoadingToast,showFailToast,closeToast,showDialog} from 'vant';
import btc from '../assets/btc.svg'
import eth from '../assets/eth.svg'
import usdt from '../assets/usdt.svg'
import axios from 'axios';
</script>


<template>
    <div class="container">
    <div class="totalAssets">
        US$ {{amountTotal.toFixed(2) }}
      </div>
      <div class="trade">
        <van-row justify="space-around">
          <van-col span="6">
            <van-badge :content="content" color="#1989fa" @click="content=null">
            <van-icon name="add" size="3rem" color="#1A1F84" @click="addValue"/>
            </van-badge>
            <p>Buy</p>
          </van-col>
          <van-col span="6">
            <van-icon name="pause-circle" size="3rem" color="#1A1F84" style="transform: rotate(90deg)" @click="isShow=!isShow,isEmptyShow=!isEmptyShow,swap=''"/>
            <p>Swap</p>
          </van-col>
          <van-col span="6">
            <van-icon name="gold-coin" size="3rem" color="#1A1F84" @click="earnETH"/>
            <p>Earn</p>
          </van-col>
          <van-col span="6">
            <van-popover v-model:show="showPopover" :actions="actions" @select="onSelect" placement="bottom-end" :overlay="true" >
                <template #reference>
                    <van-icon name="more" size="3rem" color="#1A1F84"/>
                </template>
            </van-popover>
                <p>More</p>
          </van-col>
        </van-row>
    </div>
    <div class="checkbox" v-if="isShow">
        <div class="contain1">
            <!-- <div class="inp"> -->
            <input type="number" v-model="swap" placeholder="Exchange to USDT">
            <!-- </div> -->
            <div class="checked">
                <van-radio-group v-model="checked">
                    <van-radio name="BTC">
                        <img :src="btc">
                    </van-radio>
                    <van-radio name="ETH">
                        <img :src="eth">
                    </van-radio>
                </van-radio-group>
            </div>
        </div>
        <div class="contain2">
            <van-icon name="exchange" size="2rem" color="#1A1F84"/>
            <div class="transfer">  {{ computedSwap }}  USDT </div>      
                <img :src="usdt" style="width: 1.5rem;align-self: center;margin-right:.1rem">  
        </div>
            <van-button type="primary" size="large" @click="Transfer">Transfer</van-button>
    </div>
    <div class="AssetsDetail CryptoList">
        <div v-if="isEmptyShow">
            <div v-if="isEmpty()" >
                <van-empty description="It's a good day to try"/>
            </div>
        </div>
        <div class="detail" v-if="amountBTC>0">
            <img src="https://static.coinpaprika.com/coin/btc-bitcoin/logo.png">
            <p>BTC</p>
            <div class="price">
                <div class="usd">$ {{ amountBTC.toFixed(2) }} </div>
                <div class="coin">{{ countBTC.toFixed(2) }}  BTC</div>
            </div>
        </div>
        <div class="detail" v-if="amountUSDT>0">
            <img src="https://static.coinpaprika.com/coin/usdt-tether/logo.png">
            <p>USDT</p>
            <div class="price">
                <div class="usd">$ {{ amountUSDT.toFixed(2) }} </div>
                <div class="coin">{{ countUSDT.toFixed(2) }}  USDT</div>
            </div>
        </div>
        <div class="detail" v-if="amountETH>0">
            <img src="https://static.coinpaprika.com/coin/eth-ethereum/logo.png">
            <p>ETH</p>
            <div class="price">
                <div class="usd">$ {{ amountETH.toFixed(4) }} </div>
                <div class="coin">{{ countETH.toFixed(4)  }}  ETH</div>
            </div>
        </div>
</div>
</div>
</template>

<script>


export default{
  data(){
    return{
        content:'try',
        priceUSDT:1,
        priceETH:0,
        priceBTC:0,
        countUSDT:0,
        countBTC:0,
        countETH:0,
        isShow:false,
        isEmptyShow:true,
        swap:'',
        checked:[],
        show:false,
        showPopover:false,
        actions:[
        { text: 'Profile', icon: 'manager-o' },
      { text: 'Payment', icon: 'paid' },
      { text: 'Security', icon: 'shield-o' },
      { text: 'Setting', icon: 'setting-o' },
      { text: 'Support', icon: 'question-o' },
    ],
    }
  },
  methods:{
    onSelect(){

    },
    Transfer(){
        if (this.swap==0 || this.swap=='' || this.swap<0 )
            {
                showFailToast({
                    message: 'Fill an amount',
                    wordBreak:'break-word'
                });  
            }
        else if (this.checked=='')
            {
                showFailToast({
                    message: 'Select coin type',
                    wordBreak:'break-word'
                });    
            }
        else if (this.checked=='BTC'&& this.swap > this.countBTC )
            {
                showFailToast({
                    message: 'Not enough BTC',
                    wordBreak:'break-word'
                });
            }
        else if (this.checked=='ETH'&& this.swap > this.countETH )
            { 
                showFailToast({
                    message: 'Not enough ETH',
                    wordBreak:'break-word'
                });
            }
        else if (this.checked=='BTC'&& this.swap <= this.countBTC )
            {
                showLoadingToast({
                message: 'Swaping to USDT',
                forbidClick: true,
                wordBreak:'break-word',
                loadingType: 'spinner', 
            })
            this.countBTC -= this.swap
            this.countUSDT += this.computedSwap
            }
        else if (this.checked=='ETH'&& this.swap <= this.countETH )
            {
                showLoadingToast({
                message: 'Swaping to USDT',
                forbidClick: true,
                wordBreak:'break-word',
                loadingType: 'spinner', 
            })
            this.countETH -= this.swap
            this.countUSDT += this.computedSwap
            }
        else
            {
                showFailToast('ERROR');
            }


    },
    isEmpty(){
        if(this.amountTotal>0){
            return false
        }
        else{
            return true
        }
    },
    addValue(){
      this.countBTC++,
      showLoadingToast({
        message: 'Saving your bitcoin',
        forbidClick: true,
        wordBreak:'break-word',
        loadingType: 'spinner',
      });
    },
    swapUSDT(){
        showLoadingToast({
        message: 'Swaping to USDT',
        forbidClick: true,
        wordBreak:'break-word',
        loadingType: 'spinner', 
    })
    if(this.countBTC>0){
            this.countBTC--,
            this.countUSDT += this.priceBTC
        }
        else{
            showFailToast({
                    message: 'Need to Top Up',
                    wordBreak:'break-word'
                });       
        }
    },
    earnETH(){
        showLoadingToast({
        message: 'Receiving random ETH',
        forbidClick: true,
        wordBreak:'break-word',
        loadingType: 'spinner', 
    })
    this.countETH += Math.random();
    }
    },
  computed:{
    amountBTC(){
        return this.priceBTC * this.countBTC
    },
    amountUSDT(){
        return this.priceUSDT * this.countUSDT
    },
    amountETH(){
        return this.priceETH * this.countETH
    },
    amountTotal(){
        return this.amountBTC+this.amountUSDT+this.amountETH
    },
    computedSwap(){
        if(this.checked=='BTC'){
            return this.priceBTC*this.swap
        }
        else if(this.checked=='ETH'){
            return this.priceETH*this.swap            
        }
        else{
            return this.swap            
        }
    }
  },
  mounted(){
    axios.get("https://api.coingecko.com/api/v3/coins/bitcoin?localization=false")
        .then(res=>{
            this.priceBTC=res.data.market_data.current_price.usd
        }),
    axios.get("https://api.coingecko.com/api/v3/coins/ethereum?localization=false")
        .then(res=>{
            this.priceETH=res.data.market_data.current_price.usd
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
            showDialog({ 
                  message: 'We are using CoinGecko free API.\nToo many request now,\n it would be fine in 1 min later',
                  theme:'round-button',
                  confirmButtonColor:'#1A1F84',
                  closeOnClickOverlay:true,
                });
            return Promise.reject(error);
        });
  }
}



</script>

<style scoped>

.contain1{
    display: flex;
}

.contain2{
    display: flex;
    padding-top: .5rem;
}


.contain2 .van-icon{
    /* flex:1; */
    padding-left: .5rem;
}

.contain2 .transfer{
    margin:0 0.8rem ;
    align-self: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    flex:1

}
.van-radio-group{
    margin-top: .5rem;
    margin-left: .5rem;
}

.van-radio img{
   width: 1.5rem; 
}

.van-button{
    margin-top: 1rem;
}

.contain1.checked{
    align-self: center;
    margin-left: 1rem;
}
.contain1 input{
    outline-style: none ;
    border: 1px solid #ccc; 
    border-radius: .5rem;
    padding: 1rem;
    font-size: .5rem;
    font-weight: 700;
    flex:1

}
.checkbox{
    padding: .8rem 1.2rem;
    margin: .5rem .8rem;
    background-color: lightcyan;
    border-radius: .5rem;
}
.van-icon{
    cursor: pointer;
}

span{
    padding: .5rem;
}

.detail{
    display: flex;
    margin-bottom: 1.5rem;
}

.detail img{
    width: 1.7rem;
    height: 1.7rem;
    align-self: center
}


.detail p{
    margin-left: .8rem;
    align-self: center;
    flex:1;
    font-size: .85rem;
}

.price{
    display: flex;
    flex-direction: column;
    width: 6rem;
    text-align: end;
}

.usd{
    font-size: .8rem;
    margin-right:0;
    font-weight: 600;
}

.coin{
    font-size: .8rem;
    margin-left:0
}

.CryptoList{
    padding: 1.2rem;
}

.totalAssets{
  font-size: 1.4rem;
  padding: .5rem 1rem .8rem;
}

.trade{
  text-align: center;
}

::-webkit-scrollbar{
    display:none;
}



@media (max-width: 576px) {

.usd{
    font-size: 1rem;
    margin-right:0;
    font-weight: 600;
}

.coin{
    font-size: 1rem;
    margin-left:0
}

.contain1 input{
    padding: .5rem;
    font-size: 1rem;
    width: .1rem;

}
.detail p{
    margin-left: .8rem;
    align-self: center;
    flex:1;
    font-size: 1.2rem;
}

.checkbox{
    /* padding: .8rem 0rem .8rem 1.2rem; */
    margin: .5rem .8rem;
    background-color: lightcyan;
    border-radius: .5rem;
}

}
</style>
