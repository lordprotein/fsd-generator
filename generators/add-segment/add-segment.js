import fs from 'fs'

// eslint-disable-next-line import/no-unresolved
import inquirerFileTreeSelection from 'inquirer-file-tree-selection-prompt'

import { findSliceFolder } from '../../utils/find-slice-folder/find-slice-folder.js'
import { getRootPath } from '../../utils/get-root-path/get-root-path.js'

export const generatorAddSegment = (
  /** @type {import('plop').NodePlopAPI} */ plop
) => {
  plop.setPrompt('file-tree-selection', inquirerFileTreeSelection)
  plop.setGenerator('slice-segment', {
    description: 'add new segment (ui/lib/model) instance to selected slice',
    prompts: [
      {
        type: 'list',
        name: 'layersList',
        message: 'Select layer where will be added segment:',
        choices: ['entity', 'feature', 'widget', 'page']
      },
      {
        type: 'input',
        name: 'segmentListValue',
        message: (answers) =>
          `Enter ${answers.layersList} slice name where will be added segment:`,
        validate: function (input, answers) {
          const folderNames = {
            entity: 'entities',
            feature: 'features',
            widget: 'widgets',
            page: 'pages'
          }

          answers.foundSlicePath = findSliceFolder(
            `${getRootPath(plop.getPlopfilePath())}/${
              folderNames[answers.layersList]
            }`,
            input
          )

          return !!answers.foundSlicePath
        }
      },
      {
        type: 'list',
        name: 'segmentType',
        message: 'Select segment type:',
        choices: ['ui', 'lib', 'model']
      },
      {
        type: 'input',
        name: 'segmentNameValue',
        message: `Enter segment name:`
      },
      {
        type: 'list',
        name: 'isAddPublicApiImport',
        message: (answer) =>
          `Would you set "${answer.segmentListValue}" import as public (import will be set on Slice level)?`,
        choices: ['no', 'yes'],
        default: 0,
        when: (answers) => {
          const path = `${answers.foundSlicePath}/index.ts`
          const hasImport = fs
            .readFileSync(path, 'utf8')
            .includes(
              `${plop.getHelper('camelCase')(answers.segmentListValue)}Model`
            )
          return !hasImport
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

      const isPublic = data.isAddPublicApiImport === 'yes'

      const segmentsCollection = {
        ui: [
          {
            type: 'add',
            path: `${data.foundSlicePath}/ui/${formattedSegmentName}/${formattedSegmentName}.tsx`,
            templateFile: 'templates/architecture/general-slice/component.hbs',
            data: {
              sliceName: `${data.segmentNameValue}`
            }
          },
          {
            type: 'add',
            path: `${data.foundSlicePath}/ui/${formattedSegmentName}/${formattedSegmentName}.types.ts`,
            templateFile: 'templates/architecture/general-slice/types.hbs',
            data: {
              sliceName: `${data.segmentNameValue}`
            }
          },
          {
            type: 'add',
            path: `${data.foundSlicePath}/${data.segmentType}/${formattedSegmentName}/${formattedSegmentName}.styled.ts`,
            templateFile: 'templates/architecture/general-slice/styled.hbs',
            data: {
              sliceName: `${data.segmentNameValue}`
            }
          },
          {
            type: 'add',
            path: `${data.foundSlicePath}/${data.segmentType}/${formattedSegmentName}/index.ts`,
            template: `export * from './${formattedSegmentName}'`
          },
          ...(isPublic
            ? [
                {
                  type: 'add',
                  path: `${data.foundSlicePath}/index.ts`,
                  template: ``,
                  skipIfExists: true
                },
                {
                  type: 'append',
                  path: `${data.foundSlicePath}/index.ts`,
                  template: `export { ${plop.getHelper('pascalCase')(
                    data.segmentNameValue
                  )} } from './${data.segmentType}'`
                }
              ]
            : [])
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
          ...(isPublic
            ? [
                {
                  type: 'add',
                  path: `${data.foundSlicePath}/index.ts`,
                  template: ``,
                  skipIfExists: true
                },
                {
                  type: 'append',
                  path: `${data.foundSlicePath}/index.ts`,
                  template: `export { ${plop.getHelper('camelCase')(
                    data.segmentNameValue
                  )} } from './${data.segmentType}'`
                }
              ]
            : [])
        ],
        model: [
          {
            type: 'add',
            path: `${data.foundSlicePath}/${data.segmentType}/${formattedSegmentName}/${formattedSegmentName}.ts`,
            template: `export const ${data.segmentNameValue} = {}`
          },
          {
            type: 'add',
            path: `${data.foundSlicePath}/${data.segmentType}/${formattedSegmentName}/index.ts`,
            template: `export * from './${formattedSegmentName}'`
          },
          ...(isPublic
            ? [
                {
                  type: 'add',
                  path: `${data.foundSlicePath}/index.ts`,
                  template: ``,
                  skipIfExists: true
                },
                {
                  type: 'append',
                  path: `${data.foundSlicePath}/index.ts`,
                  template: `export * as ${plop.getHelper('camelCase')(
                    data.segmentListValue
                  )}Model from './${data.segmentType}'`
                }
              ]
            : [])
        ]
      }

      return [
        ...segmentsCollection[data.segmentType],
        {
          //Add file if not exist
          type: 'add',
          path: `${data.foundSlicePath}/${data.segmentType}/index.ts`,
          skipIfExists: true
        },
        {
          type: 'append',
          path: `${data.foundSlicePath}/${data.segmentType}/index.ts`,
          template: `export * from './${formattedSegmentName}'`
        }
      ]
    }
  })
}
