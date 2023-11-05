const {
  ENTITY_ACTIONS
} = require('../../templates/architecture/general-slice/actions')

const generatorAddFeature = (
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

module.exports = { generatorAddFeature }
