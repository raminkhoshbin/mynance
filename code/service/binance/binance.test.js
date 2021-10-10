const Binance = require("./account")

const binance = new Binance()

async function test_test() {
    let data = await binance.test()
    console.log("test : ", data)
}

async function test_exchangeInfo() {
    let data = await binance.exchangeInfo()
    console.log("\n \nExchange Info success : \n \n", JSON.parse(data))
}

async function test_priceTicker() {
    let data = await binance.priceTicker()
    console.log("\n \n Price Ticker success : \n \n", JSON.parse(data))
}


test_test()
test_exchangeInfo()
test_priceTicker()

