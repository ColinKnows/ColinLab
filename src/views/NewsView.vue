<script setup>
import MainBody from '../components/MainBody.vue';
import NavBar from '../components/NavBar.vue';
import Swipe from '../components/Swipe.vue';
import Tabbar from '../components/Tabbar.vue';
import NewsList from '../components/NewsList.vue'
</script>

<template>
    <NavBar/>
    <MainBody>
      <Swipe/>
      <NewsList/>
    </MainBody>
    <Tabbar/>
</template>

