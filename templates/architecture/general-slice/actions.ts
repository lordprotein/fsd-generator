const sliceName = `kebabCase sliceName`

export const ENTITY_ACTIONS = [
  {
    type: 'add',
    path: `src/{{layerFolder}}/{{${sliceName}}}/ui/{{${sliceName}}}/{{${sliceName}}}.tsx`,
    templateFile: 'templates/architecture/general-slice/component.hbs',

    data: {
      componentTypeName: `{{@pascalCase sliceName}}Props`
    }
  },
  {
    type: 'add',
    path: `src/{{layerFolder}}/{{${sliceName}}}/ui/{{${sliceName}}}/{{${sliceName}}}.types.ts`,
    templateFile: 'templates/architecture/general-slice/types.hbs',
    data: {
      componentTypeName: `{{@pascalCase sliceName}}Props`
    }
  },
  {
    type: 'add',
    path: `src/{{layerFolder}}/{{${sliceName}}}/ui/{{${sliceName}}}/{{${sliceName}}}.styled.ts`,
    templateFile: 'templates/architecture/general-slice/styled.hbs'
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
