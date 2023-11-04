const {
  ENTITY_ACTIONS
} = require('../../templates/architecture/general-slice/actions')

const generatorAddWidget = (/** @type {import('plop').NodePlopAPI} */ plop) => {
  plop.setGenerator('add_widget', {
    description: 'Add new Widget slice instance',
    prompts: [
      {
        type: 'input',
        name: 'sliceName',
        message: 'Enter slice name of Widget'
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
