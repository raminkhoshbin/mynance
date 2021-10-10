const Trade = require("./trade")
const accounts = require("../../data/accounts.json")

const trade = new Trade()

async function test_market() {

    // SELL 80 XRP for BNB
    const order_sell_qnt = {
        symbol: "XRPBNB",
        side: 'SELL',
        quantity: 80.0
    }
    let data = await trade.market(accounts[0], order_sell_qnt)
    console.log("\n \n market sell quantity success : \n \n", JSON.parse(data))

    // BUY 80 XRP for BNB
    const order_buy_qnt = {
        symbol: "XRPBNB",
        side: 'BUY',
        quantity: 80.0
    }
    let data2 = await trade.market(accounts[0], order_buy_qnt)
    console.log("\n \n market buy quantity success : \n \n", JSON.parse(data2))


    // SELL 0.15 BNB with XRP
    const order_sell_ttl = {
        symbol: "XRPBNB",
        side: 'SELL',
        quoteOrderQty: 0.15
    }
    let data3 = await trade.market(accounts[0], order_sell_ttl)
    console.log("\n \n market sell quoteOrderQty success : \n \n", JSON.parse(data3))

    // BUY 0.15 BNB with XRP
    const order_buy_ttl = {
        symbol: "XRPBNB",
        side: 'BUY',
        quoteOrderQty: 0.15
    }
    let data4 = await trade.market(accounts[0], order_buy_ttl)
    console.log("\n \n market buy quoteOrderQty success : \n \n", JSON.parse(data4))
}

async function test_limit() {

    // SELL 80 XRP for BNB
    const order_sell_qnt = {
        symbol: "XRPBNB",
        side: 'SELL',
        price: 0.00191000,
        quantity: 80.0
    }
    let data = await trade.limit(accounts[0], order_sell_qnt)
    console.log("\n \n market sell quantity success : \n \n", JSON.parse(data))
}

async function test_getOrder() {
    const order = {
        symbol: "XRPBNB",
        // orderId: 148511529,
        clientOrderId: 'nMVUBl69hHnzgSKNrmPf7v'
    }
    let data = await trade.getOrder(accounts[0], order)
    console.log("\n \n get order success : \n \n", JSON.parse(data))
}

async function test_cancelOrder() {
    const order = {
        symbol: "XRPBNB",
        // orderId: 148511529,
        clientOrderId: 'nMVUBl69hHnzgSKNrmPf7v'
    }
    let data = await trade.cancelOrder(accounts[0], order)
    console.log("\n \n cancel order success : \n \n", JSON.parse(data))
}
//test_market()
// test_limit()
// test_getOrder()
// test_cancelOrder()
test_getOrder()

