<script setup>
import MainBody from '../components/MainBody.vue';
import NavBar from '../components/NavBar.vue';
import Tabbar from '../components/Tabbar.vue';
import TransacationsDetail from '../components/TransacationsDetail.vue';

</script>

<template>
  <div>
    <NavBar/>
    <MainBody>
      <TransacationsDetail/>
    </MainBody>
    <Tabbar/>
  </div>
</template>
