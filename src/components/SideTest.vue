<template>
    <div> 
        <ul>
            <!-- <li v-for="data in datalist" :key="data.symbol">{{ data.symbol}}</li> -->
        </ul>
    </div>
</template>

<script>

import axios from "axios"

export default{
    data(){
        return {
            datalist:[]

        }
    },
    mounted(){
        // fetch("/test.json")
        // .then(res=>res.json())
        // .then(res=>{
        //     console.log(res.data.films)
        //     this.datalist=res.data.films
        // })
         
        // axios.get("/test.json")
        // .then(res=>{
        //     this.datalist=res.data.data.films
        // })

        // axios.get("https://api.coinpaprika.com/v1/coins")
        // .then(res=>{
            // console.log(res.data)
            // this.datalist=res.data
            // console.log(res.data)
            // this.datalist=res.data.data.films
        // })
    }
}


</script>