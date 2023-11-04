const path = require('path')

module.exports.getRootPath = () => {
  const rootPath = path.join(__dirname, '..', '..', '..', '..')

  console.log(rootPath)
  const isLib = false

  return isLib ? rootPath : 'src'
}
