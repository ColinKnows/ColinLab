<script setup>
import MainBody from '../components/MainBody.vue';
import NavBar from '../components/NavBar.vue';
import Tabbar from '../components/Tabbar.vue';
import IdCard from '../components/IdCard.vue'
import AssetsDetail from '../components/AssetsDetail.vue'

</script>

<template>
    <NavBar/>
    <MainBody>
      <IdCard/>
      <AssetsDetail/>
    </MainBody>
    <Tabbar/>
</template>

<script>

export default{
}
</script>


<style scoped>

</style>
