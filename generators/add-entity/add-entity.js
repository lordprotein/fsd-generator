const {
  ENTITY_ACTIONS
} = require('../../templates/architecture/general-slice/actions')

const generatorAddEntity = (/** @type {import('plop').NodePlopAPI} */ plop) => {
  plop.setGenerator('entity-slice', {
    description: 'add new entity slice instance',
    prompts: [
      {
        type: 'input',
        name: 'sliceName',
        message: 'Enter slice name:'
      }

      //Add with store
    ],
    actions: function () {
      return ENTITY_ACTIONS({
        fileName: `{{kebabCase sliceName}}`,
        layerName: `entities`
      })
    }
  })
}

module.exports = { generatorAddEntity }
