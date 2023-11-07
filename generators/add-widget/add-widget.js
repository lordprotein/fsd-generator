import { ENTITY_ACTIONS } from '../../templates/architecture/general-slice/actions.js'

export const generatorAddWidget = (
  /** @type {import('plop').NodePlopAPI} */ plop
) => {
  plop.setGenerator('widget-slice', {
    description: 'add new Widget slice instance',
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
        layerName: `widgets`
      })
    }
  })
}
