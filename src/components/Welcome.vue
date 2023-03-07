<script setup>
import colinlab from '../assets/colinlab.svg'
</script>

<template>

  <div class="container">
    <img :src="colinlab" />
    <div class="title">
      <h1>Welcome to visiting!</h1>
      <p>Thanks for you are here</p>
    </div>
  </div>
<!-- <van-card
  desc="Thanks for you are here"
  title="Welcome to visiting!"
  :thumb="colinlab"
  :centered="true"
/> -->

<van-notice-bar mode="closeable"  left-icon="friends">Invite your friends
</van-notice-bar>

</template>

<style scoped>

.container{
  height: 6rem;
  background-color: #f0f0f0;
  border-radius: .5rem;
  display: flex;
  margin-bottom: 1rem;
}

.container img{
  padding: 0 1rem;
}

.container .title{
  display: flex;
  flex-direction: column;
  align-self: center;
}

h1{
  font-size: 1rem; 
  font-weight: bold;
}


@media (max-width: 576px) {


}
</style>
