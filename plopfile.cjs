const { ENTITY_ACTIONS } = require('./templates/architecture/general-slice/actions')
module.exports = function (plop) {
  // controller generator
  plop.setGenerator('add entity', {
    description: 'Adding new slice of entity',
    prompts: [
      {
        type: 'input',
        name: 'sliceName',
        message: 'Enter slice name of Entities'
      }

      //Add with store
    ],
    actions: function (data) {

      data.layerFolder = 'entity'
      console.log(data)

      return ENTITY_ACTIONS
    }
  })

  plop.setGenerator('add en', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'list',
        name: 'layer',
        message: 'Please, choose layer',
        choices: ['entity', 'feature', 'widget', 'page']
      },
      {
        type: 'input',
        name: 'sliceName',
        message: 'Enter name of slice'
      },
      {
        type: 'input',
        name: 'sliceName',
        message: 'Enter name of slice'
      }
    ],
    actions: function (data) {
      const sliceName = `kebabCase sliceName`
      const data2 = {
        entity: {
          folderName: 'entities',
          actions: ENTITY_ACTIONS
        },
        feature: {
          folderName: 'features',
          actions: ENTITY_ACTIONS
        },
        widget: {
          folderName: 'widgets',
          actions: ENTITY_ACTIONS
        },
        page: {
          folderName: 'pages',
          actions: ENTITY_ACTIONS
        }
      }

      data.layerFolder = data2[data.layer].folderName
      data.componentTypeName = `${data.sliceName}Props`

      let actions = [
        {
          type: 'add',
          path: `src/{{layerFolder}}/{{${sliceName}}}/ui/{{${sliceName}}}/{{${sliceName}}}.tsx`,
          templateFile: 'templates/architecture/instance/component.hbs',

          data: {
            componentTypeName: `{{@pascalCase sliceName}}Props`,
            sliceName: '{{@kebabCase sliceName}}'
          }
        },
        {
          type: 'add',
          path: `src/{{layerFolder}}/{{${sliceName}}}/ui/{{${sliceName}}}/{{${sliceName}}}.types.ts`,
          templateFile: 'templates/architecture/instance/types.hbs',
          data: {
            componentTypeName: `{{@pascalCase sliceName}}Props`
          }
        },
        {
          type: 'add',
          path: `src/{{layerFolder}}/{{${sliceName}}}/ui/{{${sliceName}}}/{{${sliceName}}}.styled.ts`,
          templateFile: 'templates/architecture/instance/styled.hbs'
        },
        {
          type: 'add',
          path: `src/{{layerFolder}}/{{${sliceName}}}/ui/{{${sliceName}}}/index.ts`,
          template: `export * from './{{${sliceName}}}'`
        },
        {
          type: 'add',
          path: `src/{{layerFolder}}/{{${sliceName}}}/ui/index.ts`,
          template: `export * from './{{${sliceName}}}'`
        },
        {
          type: 'add',
          path: `src/{{layerFolder}}/{{${sliceName}}}/index.ts`,
          template: `export * from './ui'`
        }
      ]

      console.log(data)

      // if (data.variants.includes('with store')) {
      // actions.push({
      //     type: 'add',
      //     path: 'src/store.js',
      //     templateFile: 'plop-templates/store.hbs'
      // });
      // console.log(123)
      // }

      return actions
    }
  })

  // plop.setGenerator('add en', {
  //   description: 'application controller logic',
  //   prompts: [
  //     {
  //       type: 'list',
  //       name: 'layer',
  //       message: 'Please, choose layer',
  //       choices: ['entity', 'feature', 'widget', 'page']
  //     },
  //     {
  //       type: 'input',
  //       name: 'sliceName',
  //       message: 'Enter name of slice'
  //     },
  //     {
  //       type: 'input',
  //       name: 'sliceName',
  //       message: 'Enter name of slice'
  //     }
  //   ],
  //   actions: function (data) {
  //     const layersFolderNames = {
  //       entity: 'entities',
  //       feature: 'features',
  //       widget: 'widgets',
  //       page: 'pages'
  //     }
  //     data.layerFolder = layersFolderNames[data.layer]
  //
  //     const varStyle = 'kebabCase'
  //     const sliceName = `${varStyle} sliceName`
  //
  //     data.componentTypeName = `${data.sliceName}Props`
  //
  //     let actions = [
  //       {
  //         type: 'add',
  //         path: `src/{{layerFolder}}/{{${sliceName}}}/ui/{{${sliceName}}}/{{${sliceName}}}.tsx`,
  //         templateFile: 'templates/architecture/instance/component.hbs',
  //
  //         data: {
  //           componentTypeName: `{{@pascalCase sliceName}}Props`,
  //           sliceName: '{{@kebabCase sliceName}}'
  //         }
  //       },
  //       {
  //         type: 'add',
  //         path: `src/{{layerFolder}}/{{${sliceName}}}/ui/{{${sliceName}}}/{{${sliceName}}}.types.ts`,
  //         templateFile: 'templates/architecture/instance/types.hbs',
  //         data: {
  //           componentTypeName: `{{@pascalCase sliceName}}Props`
  //         }
  //       },
  //       {
  //         type: 'add',
  //         path: `src/{{layerFolder}}/{{${sliceName}}}/ui/{{${sliceName}}}/{{${sliceName}}}.styled.ts`,
  //         templateFile: 'templates/architecture/instance/styled.hbs'
  //       },
  //       {
  //         type: 'add',
  //         path: `src/{{layerFolder}}/{{${sliceName}}}/ui/{{${sliceName}}}/index.ts`,
  //         template: `export * from './{{${sliceName}}}'`
  //       },
  //       {
  //         type: 'add',
  //         path: `src/{{layerFolder}}/{{${sliceName}}}/ui/index.ts`,
  //         template: `export * from './{{${sliceName}}}'`
  //       },
  //       {
  //         type: 'add',
  //         path: `src/{{layerFolder}}/{{${sliceName}}}/index.ts`,
  //         template: `export * from './ui'`
  //       }
  //     ]
  //
  //     console.log(data)
  //
  //     // if (data.variants.includes('with store')) {
  //     // actions.push({
  //     //     type: 'add',
  //     //     path: 'src/store.js',
  //     //     templateFile: 'plop-templates/store.hbs'
  //     // });
  //     // console.log(123)
  //     // }
  //
  //     return actions
  //   }
  // })
}
