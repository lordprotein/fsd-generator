const {
  ENTITY_ACTIONS
} = require('../../templates/architecture/general-slice/actions')

const generatorAddEntity = (/** @type {import('plop').NodePlopAPI} */ plop) => {
  plop.setGenerator('add_entity', {
    description: 'add new Entity slice instance',
    prompts: [
      {
        type: 'input',
        name: 'inputSliceNameValue',
        message: 'Enter slice name of Entities'
      }

      //Add with store
    ],
    actions: function () {
      return ENTITY_ACTIONS({
        fileName: `{{kebabCase inputSliceNameValue}}`,
        layerName: `entities`
      })
    }
  })
}

module.exports = { generatorAddEntity }
