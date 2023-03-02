<script setup>

</script>


<template>
    <div class="TransacationsDetail">
        <van-tabs v-model:active="active" shrink>
            <van-tab title="Crypto" class="CryptoList">
                <div class="detail">
                    <img src="public/btc.svg">
                    <div class="Transacations">
                        <div class="fullname">Bitcoin</div>
                        <div class="name">BTC</div>
                    </div>
                    <div class="price">
                        <div class="percent">+2.13%</div>
                        <div class="coinprice">$23781.51</div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="NFTs">
                <van-empty/>
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
    margin-left: .5rem;
    align-self: center;
    flex:1;
    display: flex;
    flex-direction: column;
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

    }
  },
  components:{

  },
  computed:{

  },
  props:{

  },
  Methods:{

  },
}

</script>