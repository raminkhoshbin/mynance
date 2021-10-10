const Binance = require("./binance")

class Trade extends Binance {

    constructor() {
        super()
    }

    market(account, order) {

        const type = 'type=' + 'MARKET'
        const symbol = '&symbol=' + order.symbol
        const side = '&side=' + order.side
        let quantity = ''
        if (order.quantity) {
            quantity = '&quantity=' + order.quantity
        } else {
            quantity = '&quoteOrderQty=' + order.quoteOrderQty
        }
        const timestamp = '&timestamp=' + Date.now()
        const params = type + symbol + side + quantity + timestamp

        const signature = "&signature=" + this.crypto
            .createHmac('sha256', account.apisecret).update(params).digest('hex')
        const headers = { 'Content-Type': 'application/json', 'X-MBX-APIKEY': account.apikey }
        const method = 'POST'
        const path = "https://api.binance.com/api/v3/order?" + params + signature

        return this.httpRequest(path, method, headers)
    }

    limit(account, order) {

        const type = 'type=' + 'LIMIT'
        const symbol = '&symbol=' + order.symbol
        const side = '&side=' + order.side
        const timeInForce = '&timeInForce=GTC'
        const price = '&price=' + order.price
        let quantity = ''
        if (order.quantity) {
            quantity = '&quantity=' + order.quantity
        } else {
            quantity = '&quoteOrderQty=' + order.quoteOrderQty
        }
        const timestamp = '&timestamp=' + Date.now()
        const params = type + symbol + side + quantity + price + timeInForce + timestamp

        const signature = "&signature=" + this.crypto
            .createHmac('sha256', account.apisecret).update(params).digest('hex')
        const headers = { 'Content-Type': 'application/json', 'X-MBX-APIKEY': account.apikey }
        const method = 'POST'
        const path = "https://api.binance.com/api/v3/order?" + params + signature

        return this.httpRequest(path, method, headers)
    }

    getOrder(account, order) {

        const symbol = 'symbol=' + order.symbol
        // const orderId = '&orderId=' + order.orderId
        const clientOrderId = '&origClientOrderId=' + order.clientOrderId
        const timestamp = '&timestamp=' + Date.now()
        const params = symbol + clientOrderId + timestamp

        const signature = "&signature=" + this.crypto
            .createHmac('sha256', account.apisecret).update(params).digest('hex')
        const headers = { 'Content-Type': 'application/json', 'X-MBX-APIKEY': account.apikey }
        const method = 'GET'
        const path = "https://api.binance.com/api/v3/order?" + params + signature

        return this.httpRequest(path, method, headers)
    }

    cancelOrder(account, order) {

        const symbol = 'symbol=' + order.symbol
        // const orderId = '&orderId=' + order.orderId
        const clientOrderId = '&origClientOrderId=' + order.clientOrderId
        const timestamp = '&timestamp=' + Date.now()
        const params = symbol + clientOrderId + timestamp

        const signature = "&signature=" + this.crypto
            .createHmac('sha256', account.apisecret).update(params).digest('hex')

        const headers = { 'Content-Type': 'application/json', 'X-MBX-APIKEY': account.apikey }
        const method = 'DELETE'
        const path = "https://api.binance.com/api/v3/order?" + params + signature

        return this.httpRequest(path, method, headers)
    }
}

module.exports = Trade

