const {
  ENTITY_ACTIONS
} = require('../../templates/architecture/general-slice/actions')

const generatorAddWidget = (/** @type {import('plop').NodePlopAPI} */ plop) => {
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

module.exports = { generatorAddWidget }
