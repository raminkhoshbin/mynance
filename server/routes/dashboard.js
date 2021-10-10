const express = require('express')
const router = express.Router()
const Binance = require('../../core/service/binance/binance')
const Kraken = require('../api/kraken/kraken')

router.get('/', (req, res, next) => {

    const binance = new Binance()
    const kraken = new Kraken()

    // async function getInfo() {

    //     // let data = await binance.exchangeInfo()
    //     // res.json(JSON.parse(data))

    //     let data = await binance.priceTicker()
    //     res.json(JSON.parse(data))
    // }

    // getInfo()

    async function krakenTest() {
        // Display user's balance
        // console.log(await kraken.api('Balance'));

        // Get Ticker Info
        let data = await kraken.api('Ticker', { pair: 'XXBTZUSD' })
        res.json(data)

    }

    krakenTest()

})

module.exports = router
