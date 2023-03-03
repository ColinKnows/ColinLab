<script setup>

</script>


<template>
    <div class="AssetsDetail">
        <van-tabs v-model:active="active">
            <van-tab title="Crypto" class="CryptoList">
                <div class="detail">
                    <img src="https://static.coinpaprika.com/coin/btc-bitcoin/logo.png">
                    <p>BTC</p>
                    <div class="price">
                        <div class="usd">US$8,200.30</div>
                        <div class="coin">3.67BTC</div>
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
    width: 1.7rem;
    height: 1.7rem;
    align-self: center
}


.detail p{
    margin-left: .5rem;
    align-self: center;
    flex:1
}

.price{
    display: flex;
    flex-direction: column;
    width: 5rem;
    text-align: end;
}

.usd{
    font-size: .5rem;
    margin-right:0;
}

.coin{
    font-size: .5rem;
    margin-left:0
}

.CryptoList{
    padding: 1.2rem;
}

</style>
