const { existsSync } = require('fs')
const path = require('path')

module.exports.getRootPath = () => {
  return existsSync(path.resolve(__dirname, '../../yarn.lock'))
    ? 'src'
    : path.join(__dirname, '..', '..', '..', '..', 'src')
}
