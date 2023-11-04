const { getRootPath } = require('../../../utils/get-root-path')
const sliceName = `kebabCase sliceName`
const componentTypeName = `Page{{@pascalCase sliceName}}Props`

module.exports.PAGE_ACTIONS = [
  {
    type: 'add',
    path: `${getRootPath()}/{{layerFolder}}/{{${sliceName}}}/ui/{{${sliceName}}}/{{${sliceName}}}.tsx`,
    templateFile: 'templates/architecture/page-slice/component.hbs',

    data: {
      componentTypeName
    }
  },
  {
    type: 'add',
    path: `${getRootPath()}/{{layerFolder}}/{{${sliceName}}}/ui/{{${sliceName}}}/{{${sliceName}}}.types.ts`,
    templateFile: 'templates/architecture/page-slice/types.hbs',
    data: {
      componentTypeName
    }
  },
  {
    type: 'add',
    path: `${getRootPath()}/{{layerFolder}}/{{${sliceName}}}/ui/{{${sliceName}}}/{{${sliceName}}}.styled.ts`,
    templateFile: 'templates/architecture/page-slice/styled.hbs'
  },
  {
    type: 'add',
    path: `${getRootPath()}/{{layerFolder}}/{{${sliceName}}}/ui/{{${sliceName}}}/index.ts`,
    template: `export * from './{{${sliceName}}}'`
  },
  {
    type: 'add',
    path: `${getRootPath()}/{{layerFolder}}/{{${sliceName}}}/ui/index.ts`,
    template: `export * from './{{${sliceName}}}'`
  },
  {
    type: 'add',
    path: `${getRootPath()}/{{layerFolder}}/{{${sliceName}}}/index.ts`,
    template: `export * from './ui'`
  }
]
