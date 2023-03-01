<template>
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>
    <img src="public/1.webp">
  </van-swipe-item>
  <van-swipe-item>
    <img src="public/2.webp">
  </van-swipe-item>
</van-swipe>
</template>

<style scoped>

  img{
    width: 100%;
  }

  .my-swipe{
    margin-bottom: .5rem;
  }

</style>