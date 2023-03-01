<script setup>
import MainBody from '../components/MainBody.vue';
import NavBar from '../components/NavBar.vue';
import Tabbar from '../components/Tabbar.vue';
import IdCard from '../components/IdCard.vue'
import TotalAssets from '../components/TotalAssets.vue'
import AssetsDetail from '../components/AssetsDetail.vue'
</script>

<template>
    <NavBar/>
    <MainBody>
      <IdCard/>
      <TotalAssets/>
      <AssetsDetail/>
    </MainBody>
    <Tabbar/>
</template>

<style scoped>

</style>
