import { ENTITY_ACTIONS } from '../../templates/architecture/general-slice/actions.js'

export const generatorAddFeature = (
  /** @type {import('plop').NodePlopAPI} */ plop
) => {
  plop.setGenerator('feature-slice', {
    description: 'add new feature slice instance',
    prompts: [
      {
        type: 'input',
        name: 'sliceName',
        message: 'Enter slice name:'
      }
    ],
    actions: function () {
      return ENTITY_ACTIONS({
        fileName: `{{kebabCase sliceName}}`,
        layerName: `features`
      })
    }
  })
}
