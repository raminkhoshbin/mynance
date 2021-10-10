const Binance = require("./binance")

class Account extends Binance {

    constructor() {
        super()
    }

    accountInfo(account) {

        const timestamp = 'timestamp=' + Date.now()
        const signature = "&signature=" + this.crypto.createHmac('sha256', account.apisecret).update(timestamp).digest('hex')
        const headers = {
            'Content-Type': 'application/json',
            'X-MBX-APIKEY': account.apikey
        }
        const method = 'GET'
        const path = '/api/v3/account?' + timestamp + signature

        return this.httpRequest(path, method, headers)

    }

    snapshot(account) {

        const type = 'type=' + 'SPOT'
        const limit = '&limit=' + 5

        const timestamp = '&timestamp=' + Date.now()
        const signature = "&signature=" + this.crypto.createHmac('sha256', account.apisecret).update(type + limit + timestamp).digest('hex')
        const headers = {
            'Content-Type': 'application/json',
            'X-MBX-APIKEY': account.apikey
        }
        const method = 'GET'
        const path = '/sapi/v1/accountSnapshot?' + type + limit + timestamp + signature

        return this.httpRequest(path, method, headers)

    }

}

module.exports = Account

