const { getRootPath } = require('../../utils/get-root-path')

const generatorAddShared = (/** @type {import('plop').NodePlopAPI} */ plop) => {
  plop.setGenerator('shared-segment', {
    description: 'add new shared segment instance',
    prompts: [
      {
        type: 'list',
        name: 'segment',
        message: 'Select shared segment where will be added instance:',
        choices: ['lib', 'ui']
      },
      {
        type: 'input',
        name: 'sharedItemName',
        message: 'Enter segment name: '
      }
    ],
    actions: function (data) {
      const segmentActions = {
        lib: [
          {
            type: 'add',
            path: `${getRootPath()}/shared/lib/{{kebabCase sharedItemName}}/{{kebabCase sharedItemName}}.ts`,
            templateFile: 'templates/architecture/shared/lib/lib.hbs',
            data: { componentName: data.sharedItemName }
          },
          {
            type: 'add',
            path: `${getRootPath()}/shared/lib/{{kebabCase sharedItemName}}/index.ts`,
            template: `export * from './{{kebabCase sharedItemName}}'`
          }
        ],
        ui: [
          {
            type: 'add',
            path: `${getRootPath()}/shared/ui/{{kebabCase sharedItemName}}/{{kebabCase sharedItemName}}.tsx`,
            templateFile: 'templates/architecture/shared/ui/component.hbs',
            data: { componentName: data.sharedItemName }
          },
          {
            type: 'add',
            path: `${getRootPath()}/shared/ui/{{kebabCase sharedItemName}}/{{kebabCase sharedItemName}}.styled.ts`,
            templateFile: 'templates/architecture/shared/ui/styled.hbs',
            data: { componentName: data.sharedItemName }
          },
          {
            type: 'add',
            path: `${getRootPath()}/shared/ui/{{kebabCase sharedItemName}}/{{kebabCase sharedItemName}}.types.ts`,
            templateFile: 'templates/architecture/shared/ui/types.hbs',
            data: { componentName: data.sharedItemName }
          },
          {
            type: 'add',
            path: `${getRootPath()}/shared/ui/{{kebabCase sharedItemName}}/index.ts`,
            template: `export * from './{{kebabCase sharedItemName}}'`
          }
        ]
      }

      return segmentActions[data.segment]
    }
  })
}

module.exports = { generatorAddShared }
