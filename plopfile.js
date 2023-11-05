const { generatorAddEntity } = require('./generators/add-entity')
const { generatorAddFeature } = require('./generators/add-feature')
const { generatorAddPage } = require('./generators/add-page')
const { generatorAddSegment } = require('./generators/add-segment')
const { generatorAddShared } = require('./generators/add-shared')
const { generatorAddWidget } = require('./generators/add-widget')

module.exports = function (plop) {
  plop.setWelcomeMessage('[FSD-codegen] Please choose a generator')

  generatorAddSegment(plop)
  generatorAddEntity(plop)
  generatorAddFeature(plop)
  generatorAddWidget(plop)
  generatorAddPage(plop)
  generatorAddShared(plop)
}
