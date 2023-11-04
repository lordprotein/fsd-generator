const fs = require('fs')
const path = require('path')

const findSliceFolder = function (folder, targetFolder) {
  // Получаем список элементов в папке
  const items = fs.readdirSync(folder)

  for (let item of items) {
    // Формируем полный путь элемента
    const itemPath = path.join(folder, item)

    // Проверяем, элемент это папка
    if (fs.statSync(itemPath).isDirectory()) {
      // Сравниваем название с вводом
      if (item === targetFolder) {
        // Нашли совпадение - возвращаем true
        return itemPath
      }

      // Проверяем, есть ли index.ts
      if (!fs.existsSync(path.join(itemPath, 'index.ts'))) {
        // Рекурсивно запускаем проверку для этой папки
        return findSliceFolder(itemPath, targetFolder)
      }
    }
  }

  // Совпадений не нашли - возвращаем false
  throw Error('Please, write exist name')
}

module.exports = { findSliceFolder }
