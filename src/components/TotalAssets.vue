<template>
    <div class="totalAssets">
        US$ 8888.30
      </div>
      <div class="trade">
        <van-row justify="space-around">
  <van-col span="6">
    <van-icon name="add" size="2.7rem" color="#1A1F84"/>
    <p>Buy</p>
  </van-col>
  <van-col span="6">
    <van-icon name="pause-circle" size="2.7rem" color="#1A1F84" style="transform: rotate(90deg)"/>
    <p>Swap</p>
  </van-col>
  <van-col span="6">
    <van-icon name="gold-coin" size="2.7rem" color="#1A1F84" />
    <p>Earn</p>
</van-col>
  <van-col span="6">
    <van-icon name="more" size="2.7rem" color="#1A1F84"/>
  <p>More</p>
</van-col>
</van-row>
      </div>
</template>

<style scoped>

.totalAssets{
  font-size: 1.6rem;
  margin: .5rem auto;
}

.trade{
  text-align: center;
}
</style>