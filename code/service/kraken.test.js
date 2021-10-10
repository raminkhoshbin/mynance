const Kraken = require("./kraken")

const kraken = new Kraken()

async function test_test() {
    let data = await kraken.api('Ticker', { pair: 'XXBTZUSD' })
    console.log("test : ", data)
}

test_test()

