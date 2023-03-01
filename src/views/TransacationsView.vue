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
      <h2>Transacations</h2>
      <TransacationsDetail/>
    </MainBody>
    <Tabbar/>
  </div>
</template>
