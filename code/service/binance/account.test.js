const Account = require("./account")
const accounts = require("../../data/accounts.json")

const account = new Account()


async function test_accountInfo() {
    let data = await account.accountInfo(accounts[0])
    console.log("\n \n Account info success : \n \n", JSON.parse(data))
}

async function test_snapshot() {
    let data = await account.snapshot(accounts[0])
    console.log("\n \n Snapshot success: \n \n", JSON.parse(data))
}


test_snapshot()
test_accountInfo()

