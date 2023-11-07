export const getRootPath = (path) => {
  const arr = path.split('/')

  const isLoaded = path.includes('node_modules')

  const newPath = isLoaded ? arr.slice(0, arr.length - 2).join('/') : path

  return `${newPath}/src`
}
