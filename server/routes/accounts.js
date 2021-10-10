const express = require('express')
const router = express.Router()
const Account = require('../../core/service/binance/account')
const accounts = require('../../core/data/accounts.json')

router.get('/', (req, res, next) => {

    const binance = new Account()

    async function getInfo() {

        let data = []

        // accounts.forEach(account => {
        let info1 = await binance.accountInfo(accounts[0])
        let info2 = await binance.accountInfo(accounts[1])

        let snapshot1 = await binance.snapshot(accounts[0])
        let snapshot2 = await binance.snapshot(accounts[1])

        data[0] = {}
        data[0].info = JSON.parse(info1)
        data[0].name = accounts[0].name
        data[0].snapshot = JSON.parse(snapshot1)

        data[1] = {}
        data[1].info = JSON.parse(info2)
        data[1].name = accounts[1].name
        data[1].snapshot = JSON.parse(snapshot2)

        // })
        res.json(data)
    }

    getInfo()
})

module.exports = router
