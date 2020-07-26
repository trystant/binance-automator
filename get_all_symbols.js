require('dotenv').config();
const Binance = require('node-binance-api');
const binance = new Binance().options({
    APIKEY: process.env.BINANCE_API_KEY,
    APISECRET: process.env.BINANCE_API_SECRET
});

const getPrices = async function(binance) {   
    let ticker = await binance.prices();
    console.info(`Price of BNB: ${ticker.BNBUSDT}`);
}

getPrices(binance);
