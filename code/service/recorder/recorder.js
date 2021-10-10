const fs = require("fs")

class Recorder {

  constructor(storage) {
    this.storage = storage
  }

  make(collection, document, data) {
    return new Promise((resolve, reject) => {
      const file = this.storage + '/' + collection + '/' + document + '.json'
      fs.writeFile(file, data, err => {
        if (err) {
          reject(err)
        }
        resolve(true)
      })
    })
  }

  add(collection, document, data) {

    return new Promise((resolve, reject) => {
      const file = this.storage + '/' + collection + '/' + document + '.json'

      fs.appendFile(file, data, err => {
        if (err) {
          reject(err)
        }
        resolve(true)
      })
    })
  }

}

module.exports = Recorder


// fs.readFile(file, 'utf8', (err, p_data) => {
//   if (err) {
//     reject(err)
//   }
//   const a = JSON.parse(p_data)
//   const b = JSON.parse(data)
//   const data = a.extexd(b)
// })

// function timeStamp() {
//   const timeElapsed = Date.now()
//   const today = new Date(timeElapsed)
//   const result = ' "timeStamp" : ' + today.toISOString()
//   return result
// }
// const fileExists = (file) => {
//   return new Promise((resolve, reject) => {
//       fs.access(file, fs.constants.F_OK, (err) => {
//           err ? reject(false) : resolve(true)
//       });
//   })
// }

// fs.mkdir(dir, (err) => {
//   if (err) {
//       throw err;
//   }
//   console.log("Directory is created.");
// });
