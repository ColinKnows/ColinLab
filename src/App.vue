<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div class=container>
    <div class="headerbox">
      <h1>ColinLab</h1>
      <h2>Crypto Demo APP</h2>
      <h3 >Base on Vue</h3>
      <h4 >Powered by Coin Gecko & OpenSea</h4>
    </div>
      <div class="mainbox">
        <RouterView/>
      </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
    }
  },
}

</script>

<style scoped>

h3{
  font-weight: bolder;
  font-size: 1.3rem;
  text-align: center;
}

h4{
  font-weight: bolder;
  font-size: .6rem;
  text-align: center;
}

h2{
  font-weight: bolder;
  font-size: 2rem;
  background:linear-gradient( 135deg, #0D25B9 10%, #FD6585 100%);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: .5rem;
  text-align: center;
}

h1{
  font-weight: bolder;
  font-size: 5rem;
  line-height: 5rem;
  background:linear-gradient( 135deg, #FD6585 10%, #0D25B9 100%);
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
}

.title{
  font-weight: bolder;
  font-size: 1.5rem;
  text-align: center;

}
.container{
  display: flex;
}
.mainbox{
  height: 75vh;
  margin: 10vh;
  background-color: white;
  border-radius: .3rem;
  box-shadow:7px 7px 20px #fbc2eb,-7px -7px 20px #a6c1ee;
}
.headerbox{
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width:35vw;
  align-items: center;
}


@media (max-width: 576px) {
  .headerbox {
    display: none
  }

  .mainbox{
    height: 100vh;
    widows: 100vw;
    margin: 0;
  }
}

</style>