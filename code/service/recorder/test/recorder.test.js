const Recorder = require("../recorder")

const storage = "./recorder/"
const recorder = new Recorder(storage)

async function test_make() {
    const data = JSON.stringify({ "test Data": "this is a test" })
    let result = await recorder.make("make", "test", data)
    console.log("make success : ", result)
}

async function test_add() {
    const data = JSON.stringify({ "test Data": "this is a test" })
    let result = await recorder.add("add", "test", data)
    console.log("add success : ", result)
}


test_make()
test_add()
