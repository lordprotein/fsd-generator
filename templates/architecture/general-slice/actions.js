import { getRootPath } from '../../../utils/get-root-path/get-root-path.js'

export const ENTITY_ACTIONS = ({ fileName, layerName }) => [
  {
    type: 'add',
    path: `${getRootPath()}/${layerName}/${fileName}/ui/${fileName}/${fileName}.tsx`,
    templateFile: 'templates/architecture/general-slice/component.hbs'
  },
  {
    type: 'add',
    path: `${getRootPath()}/${layerName}/${fileName}/ui/${fileName}/${fileName}.types.ts`,
    templateFile: 'templates/architecture/general-slice/types.hbs'
  },
  {
    type: 'add',
    path: `${getRootPath()}/${layerName}/${fileName}/ui/${fileName}/${fileName}.styled.ts`,
    templateFile: 'templates/architecture/general-slice/styled.hbs'
  },
  {
    type: 'add',
    path: `${getRootPath()}/${layerName}/${fileName}/ui/${fileName}/index.ts`,
    template: `export * from './${fileName}'`
  },
  {
    type: 'add',
    path: `${getRootPath()}/${layerName}/${fileName}/ui/index.ts`,
    template: `export * from './${fileName}'`
  },
  {
    type: 'add',
    path: `${getRootPath()}/${layerName}/${fileName}/index.ts`,
    template: `export * from './ui'`
  }
]
