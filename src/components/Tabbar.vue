<script setup>
</script>

<template>
  <div>
    <van-tabbar route  active-color="#1A1F84" inactive-color="grey" v-model=active>
      <van-tabbar-item replace to="/Home" icon="wap-home">Home</van-tabbar-item>
      <van-tabbar-item replace to="/Assets" icon="card">Assets</van-tabbar-item>
      <van-tabbar-item replace to="/Web3" icon="diamond">Web3</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default{
  data(){
    return{
      active:true
    }
  },
}



</script>

<style scoped>

.van-tabbar-item {

}

@media screen and (min-width: 576px) {
  div{
    position:relative
  }

}

</style>