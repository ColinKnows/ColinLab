<script setup>
import MainBody from '../components/MainBody.vue';
import NavBar from '../components/NavBar.vue';
import Tabbar from '../components/Tabbar.vue';
import Web3Detail from '../components/Web3Detail.vue'
</script>

<template>
    <NavBar>
      <template #left><van-icon name="search" size="18" /></template>
      <template #right><van-icon name="search" size="18" /></template>
    </NavBar>
    <MainBody>
      <Web3Detail/>
    </MainBody>
    <Tabbar/>
</template>

