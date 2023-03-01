import axios from "axios";

function httpForBinance(){
    return axios({
        url:'https://data.binance.com/api/v3/ticker/24hr',

    })
}

function httpForCoinpaprika(){
    return axios({
        url:'https://data.binance.com/api/v3/ticker/24hr',

    })
}

export default {
    httpForBinance,
    httpForCoinpaprika
}