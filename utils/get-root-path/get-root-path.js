export const getRootPath = () => {
  return 'src'
  // return fs.existsSync(path.resolve('../../yarn.lock'))
  //   ? 'src'
  //   : path.join('..', '..', '..', '..', 'src')
}
