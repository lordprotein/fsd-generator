const { generatorAddEntity } = require('./generators/add-entity')
const { generatorAddFeature } = require('./generators/add-feature')
const { generatorAddPage } = require('./generators/add-page')
const { generatorAddSegment } = require('./generators/add-segment')
const { generatorAddWidget } = require('./generators/add-widget')

module.exports = function (plop) {
  plop.setWelcomeMessage('Hello! Choose generator')

  generatorAddSegment(plop)
  generatorAddEntity(plop)
  generatorAddFeature(plop)
  generatorAddWidget(plop)
  generatorAddPage(plop)
}
