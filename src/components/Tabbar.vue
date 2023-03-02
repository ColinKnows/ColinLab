<script setup>
</script>

<template>
  <div>
    <van-tabbar route  active-color="black" v-model="active">
      <van-tabbar-item replace to="/home" icon="chart-trending-o">Home</van-tabbar-item>
      <van-tabbar-item replace to="/Assets" icon="card">Assets</van-tabbar-item>
      <van-tabbar-item replace to="/Transacations" icon="todo-list">Transacations</van-tabbar-item>
      <van-tabbar-item replace to="/News" icon="newspaper-o">News</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default{
  data(){
    return{
    }
  },
  props:{
    dot:true
  }
}



</script>

<style scoped>

div{
  position: relative;
}
</style>