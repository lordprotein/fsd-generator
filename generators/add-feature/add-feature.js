const {
  ENTITY_ACTIONS
} = require('../../templates/architecture/general-slice/actions')

const generatorAddFeature = (
  /** @type {import('plop').NodePlopAPI} */ plop
) => {
  plop.setGenerator('add_feature', {
    description: 'add new Feature slice instance',
    prompts: [
      {
        type: 'input',
        name: 'sliceName',
        message: 'Enter slice name of Feature'
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

module.exports = { generatorAddFeature }
