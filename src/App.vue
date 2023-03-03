<script setup>
import { RouterView } from 'vue-router';
import NavBarTest from './components/NavBarTest.vue'
import SideTest from './components/SideTest.vue'
import TabbarTest from './components/TabbarTest.vue';
</script>

<template>
  <div class=box>
    <div class="headerbox">
      <img alt="ColinLab logo" class="logo" src="@/assets/logo.svg" />
      {{ myname }}
      <input type="text" v-model="mytext"/>
      {{ this.mytext }}
      <ul>
        <li v-for="data in datalist" :key="data">
        {{ data }}</li>
      </ul>
      <button @click="handleAdd">ADD</button>
      <NavBarTest myname="home" :myright="true" @event="handleEvent">
      <div>TEST</div>
    </NavBarTest>
    <SideTest v-show="isShow"></SideTest>
    <div v-hello>v-hellow</div>
    <img :src="imgUrl"/>
    <!-- <TabbarTest/> -->
    {{ this.$route.name}}
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
      myname:'Colin', 
      mytext:'',
      datalist:[],
      isShow:true,
      // imgUrl:"https://static.coinpaprika.com/coin/btc-bitcoin/logo.png",
    }
  },
  components:{
    NavBarTest,
    SideTest,
    TabbarTest
},
  computed:{

  },
  props:{

  },
  methods:{
    handleAdd(){
      console.log(this.mytext)
      this.datalist.push(this.mytext)
    },
    handleEvent(){
      this.isShow =! this.isShow
    }
  },
  watch:{

  },
  directives: {
      hello: {
        mounted(el,binding) {
        el.style.border=".1rem solid"
      }
      }
    },
}

</script>

<style scoped>

.box{
  display: flex;
  max-width:100vw
}
.mainbox{
  width: 45vh;
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
.logo{
  width: 80%;
  animation: bounce;
}



</style>

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->

      <!-- <RouterView /> -->

<!-- <style scoped>
header {
  display: none;
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    /* margin: 0 2rem 0 0; */
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
