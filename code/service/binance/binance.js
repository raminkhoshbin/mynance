const https = require("https")
const crypto = require("crypto")

class Binance {

    constructor() {
        this.hostname = "api.binance.com"
        this.port = 443
        this.https = https
        this.crypto = crypto
    }

    test() {
        return "constructed object is working hostname: " + this.hostname
    }

    exchangeInfo() {

        const headers = {
            'Content-Type': 'application/json',
        }
        const method = 'GET'
        const path = '/api/v3/exchangeInfo'

        return this.httpRequest(path, method, headers)

    }

    priceTicker() {

        const headers = {
            'Content-Type': 'application/json',
        }
        const method = 'GET'
        const path = '/api/v3/ticker/price'

        return this.httpRequest(path, method, headers)

    }


    httpRequest(path, method, headers) {

        return new Promise((resolve, reject) => {

            const options = {
                hostname: this.hostname,
                port: this.port,
                path: path,
                method: method,
                headers: headers
            }
            const req = this.https.request(options, res => {
                let data = ""
                res.on('data', chunk => {
                    data += chunk
                })
                res.on('end', () => {
                    resolve(data)
                })
            })
            req.on('error', error => {
                console.error(error)
                reject(error)
            })
            req.end()
        })

    }

}

// const Trade = require('./Trade')
// Binance.prototype.trade = new Trade()

module.exports = Binance

