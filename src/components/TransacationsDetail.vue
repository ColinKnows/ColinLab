<script setup>

</script>


<template>
    <div class="TransacationsDetail">
        <van-tabs v-model:active="active" shrink>
            <van-tab title="Crypto" class="CryptoList">
                <div class="detail">
                    <img src="public/btc.svg">
                    <div class="Transacations">
                        <div class="address">37p96KgCxJpNJP...</div>
                        <div class="date">Buy - 2023/3/1</div>
                    </div>
                    <div class="price">
                        <div class="usd">US$8,200.30</div>
                        <div class="coin">3.67BTC</div>
                    </div>
                </div>
                <div class="detail">
                    <img src="public/eth.svg">
                    <div class="Transacations">
                        <div class="address">37p96KgCxJpNJP...</div>
                        <div class="date">Buy - 2023/3/1</div>
                    </div>
                    <div class="price">
                        <div class="usd">US$8,200.30</div>
                        <div class="coin">3.67ETH</div>
                    </div>
                </div>
                <div class="detail">
                    <img src="public/bnb.svg">
                    <div class="Transacations">
                        <div class="address">37p96KgCxJpNJP...</div>
                        <div class="date">Buy - 2023/3/1</div>
                    </div>
                    <div class="price">
                        <div class="usd">US$8,200.30</div>
                        <div class="coin">3.67BNB</div>
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

.address{
    font-size: .5rem;
}

.date{
    font-size: .5rem;
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