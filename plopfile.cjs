const fs = require('fs')
const path = require('path')

const {
  ENTITY_ACTIONS,
  SEGMENT_UI_ACTIONS
} = require('./templates/architecture/general-slice/actions')
const { PAGE_ACTIONS } = require('./templates/architecture/page-slice/actions')

module.exports = function (plop) {
  // controller generator
  plop.setWelcomeMessage('Hello! Choose generator')

  plop.setGenerator('add_entity', {
    description: 'add new Entity slice instance',
    prompts: [
      {
        type: 'input',
        name: 'sliceName',
        message: 'Enter slice name of Entities'
      }

      //Add with store
    ],
    actions: function () {
      return ENTITY_ACTIONS({
        fileName: `{{kebabCase sliceName}}`,
        layerName: `entities`
      })
    }
  })

  plop.setGenerator('add_feature', {
    description: 'add new Feature slice instance',
    prompts: [
      {
        type: 'input',
        name: 'sliceName',
        message: 'Enter slice name of Feature'
      }
    ],
    actions: function () {
      return ENTITY_ACTIONS({
        fileName: `{{kebabCase sliceName}}`,
        layerName: `features`
      })
    }
  })

  plop.setGenerator('add_widget', {
    description: 'Add new Widget slice instance',
    prompts: [
      {
        type: 'input',
        name: 'sliceName',
        message: 'Enter slice name of Widget'
      }
    ],
    actions: function () {
      return ENTITY_ACTIONS({
        fileName: `{{kebabCase sliceName}}`,
        layerName: `widgets`
      })
    }
  })

  plop.setGenerator('add_page', {
    description: 'add new Page slice instance',
    prompts: [
      {
        type: 'input',
        name: 'sliceName',
        message: 'Enter slice name of Pages'
      },
      {
        type: 'list',
        name: 'isEnumRoutes',
        message: 'Set page link to enum Routes?',
        choices: ['yes', 'no'],
        default: 'yes'
      },
      {
        type: 'input',
        name: 'page_link',
        message: 'Write url link page',
        when: (answers) => answers.isEnumRoutes === 'yes'
      }
    ],
    actions: function (data) {
      data.layerFolder = 'pages'
      console.log(data)

      return PAGE_ACTIONS
    }
  })

  plop.setGenerator('add_segment', {
    description: 'add new Segment (ui/lib/model) instance to selected Slice',
    prompts: [
      {
        type: 'list',
        name: 'segmentType',
        message: 'Select segment type:',
        choices: ['ui', 'lib', 'model']
      },
      {
        type: 'input',
        name: 'segmentNameValue',
        message: `Write name of segment item:`
      },
      {
        type: 'list',
        name: 'layersList',
        message: 'Select layer where will be added segment:',
        choices: ['entity', 'feature', 'widget', 'page']
      },
      {
        type: 'input',
        name: 'segmentListValue',
        message: (answers) => `Write name of ${answers.layersList} slice:`,
        validate: function (input, answers) {
          const folderNames = {
            entity: 'entities',
            feature: 'features',
            widget: 'widgets',
            page: 'pages'
          }

          // Запускаем проверку для entities
          const foundPath = checkFolder(
            `src/${folderNames[answers.layersList]}`,
            input
          )

          answers.foundSlicePath = foundPath
          return !!foundPath
        }
      }
    ],
    actions: function (data) {
      const folderNames = {
        entity: 'entities',
        feature: 'features',
        widget: 'widgets',
        page: 'pages'
      }
      data.layerFolder = folderNames[data.layersList]

      const formattedSegmentName = plop.getHelper('kebabCase')(
        data.segmentNameValue
      )

      console.log(data)

      const segmentsCollection = {
        ui: [
          {
            type: 'add',
            path: `${data.foundSlicePath}/ui/${formattedSegmentName}/${formattedSegmentName}.tsx`,
            templateFile: 'templates/architecture/general-slice/component.hbs',

            data: {
              componentTypeName: `${plop.getHelper('pascalCase')(
                data.segmentNameValue
              )}Props`,
              sliceName: `${plop.getHelper('pascalCase')(
                data.segmentNameValue
              )}`
            }
          },
          {
            type: 'add',
            path: `${data.foundSlicePath}/ui/${formattedSegmentName}/${formattedSegmentName}.types.ts`,
            templateFile: 'templates/architecture/general-slice/types.hbs',
            data: {
              componentTypeName: `${plop.getHelper('pascalCase')(
                data.segmentNameValue
              )}Props`,
              sliceName: `${plop.getHelper('pascalCase')(
                data.segmentNameValue
              )}`
            }
          },
          {
            type: 'add',
            path: `${data.foundSlicePath}/ui/${formattedSegmentName}/${formattedSegmentName}.styled.ts`,
            templateFile: 'templates/architecture/general-slice/styled.hbs',
            data: {
              sliceName: `${plop.getHelper('pascalCase')(
                data.segmentNameValue
              )}`
            }
          },
          {
            type: 'add',
            path: `${data.foundSlicePath}/ui/${formattedSegmentName}/index.ts`,
            template: `export * from './${formattedSegmentName}'`
          },
          {
            type: 'add',
            path: `${data.foundSlicePath}/ui/index.ts`,
            template: `export * from './${formattedSegmentName}'`,
            skipIfExists: true
          },
          {
            type: 'add',
            path: `${data.foundSlicePath}/index.ts`,
            template: `export * from './ui'`,
            skipIfExists: true
          },
          {
            type: 'append',
            path: `${data.foundSlicePath}/ui/index.ts`,
            template: `export * from './${formattedSegmentName}'`
          }
        ],
        lib: [
          {
            type: 'add',
            path: `${data.foundSlicePath}/${data.segmentType}/${formattedSegmentName}/${formattedSegmentName}.ts`,
            template: `export const ${plop.getHelper('camelCase')(
              data.segmentNameValue
            )} = () => {}`
          },
          {
            type: 'add',
            path: `${data.foundSlicePath}/${data.segmentType}/${formattedSegmentName}/index.ts`,
            template: `export * from './${formattedSegmentName}'`
          },
          {
            type: 'add',
            path: `${data.foundSlicePath}/${data.segmentType}/index.ts`,
            template: ``,
            skipIfExists: true
          },
          {
            type: 'append',
            path: `${data.foundSlicePath}/${data.segmentType}/index.ts`,
            template: `export * from './${formattedSegmentName}'`
          }
        ]
      }

      return segmentsCollection[data.segmentType]
    }
  })
}

const checkFolder = function (folder, targetFolder) {
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
        return checkFolder(itemPath, targetFolder)
      }
    }
  }

  // Совпадений не нашли - возвращаем false
  throw Error('Please, write exist name')
}
