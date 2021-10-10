const Recorder = require("../../service/recorder") 
const Binance = require("../../service/binance") 

const binance = new Binance()

const storage = "./data/recorder"
const recorder = new Recorder(storage)

async function test_record_accountInfo() {
    const data = await binance.accountInfo()
    recorder.make("binance", "accountInfo", data)
    console.log("binance record accountInfo success : ", data.length)
}

test_record_accountInfo()