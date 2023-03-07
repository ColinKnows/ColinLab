<script setup>
import Tabbar from '../components/Tabbar.vue'
import NavBar from '../components/NavBar.vue'
import MainBody from '../components/MainBody.vue'
import Welcome from '../components/Welcome.vue'
import HomeDetail from '../components/HomeDetail.vue'

</script>

<template>
    <NavBar/>
    <MainBody>
      <Welcome/>
      <HomeDetail/>
    </MainBody>
    <Tabbar/>
</template>

<style>

</style>