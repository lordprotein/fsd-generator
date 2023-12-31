import { ENTITY_ACTIONS } from '../../templates/architecture/general-slice/actions.js'

export const generatorAddEntity = (
  /** @type {import('plop').NodePlopAPI} */ plop
) => {
  console.log(plop.getPlopfilePath())

  plop.setGenerator('entity-slice', {
    description: 'add new entity slice instance',
    prompts: [
      {
        type: 'input',
        name: 'sliceName',
        message: 'Enter new slice name:'
      }
    ],
    actions: function () {
      return ENTITY_ACTIONS({
        fileName: `{{kebabCase sliceName}}`,
        layerName: `entities`,
        rootPath: plop.getPlopfilePath()
      })
    }
  })
}
