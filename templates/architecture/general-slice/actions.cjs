exports.ENTITY_ACTIONS = ({ fileName, layerName }) => [
  {
    type: 'add',
    path: `src/${layerName}/${fileName}/ui/${fileName}/${fileName}.tsx`,
    templateFile: 'templates/architecture/general-slice/component.hbs',

    data: {
      componentTypeName: `${fileName}Props`
    }
  },
  {
    type: 'add',
    path: `src/${layerName}/${fileName}/ui/${fileName}/${fileName}.types.ts`,
    templateFile: 'templates/architecture/general-slice/types.hbs',
    data: {
      componentTypeName: `${fileName}Props`
    }
  },
  {
    type: 'add',
    path: `src/${layerName}/${fileName}/ui/${fileName}/${fileName}.styled.ts`,
    templateFile: 'templates/architecture/general-slice/styled.hbs'
  },
  {
    type: 'add',
    path: `src/${layerName}/${fileName}/ui/${fileName}/index.ts`,
    template: `export * from './${fileName}'`
  },
  {
    type: 'add',
    path: `src/${layerName}/${fileName}/ui/index.ts`,
    template: `export * from './${fileName}'`
  },
  {
    type: 'add',
    path: `src/${layerName}/${fileName}/index.ts`,
    template: `export * from './ui'`
  }
]

exports.SEGMENT_UI_ACTIONS = ({ fileName, path }) => [
  {
    type: 'add',
    path: `${path}/ui/${fileName}/${fileName}.tsx`,
    templateFile: 'templates/architecture/general-slice/component.hbs',

    data: {
      componentTypeName: `${fileName}Props`
    }
  },
  {
    type: 'add',
    path: `${path}/ui/${fileName}/${fileName}.types.ts`,
    templateFile: 'templates/architecture/general-slice/types.hbs',
    data: {
      componentTypeName: `${fileName}Props`
    }
  },
  {
    type: 'add',
    path: `${path}/ui/${fileName}/${fileName}.styled.ts`,
    templateFile: 'templates/architecture/general-slice/styled.hbs'
  },
  {
    type: 'add',
    path: `${path}/ui/${fileName}/index.ts`,
    template: `export * from './${fileName}'`
  },
  {
    type: 'add',
    path: `${path}/ui/index.ts`,
    template: `export * from './${fileName}'`
  },
  {
    type: 'add',
    path: `${path}/index.ts`,
    template: `export * from './ui'`
  }
]
