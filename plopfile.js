import { generatorAddSegment } from './generators/add-segment/add-segment.js'
import { generatorAddEntity } from './generators/add-entity/add-entity.js'
import { generatorAddFeature } from './generators/add-feature/add-feature.js'
import { generatorAddWidget } from './generators/add-widget/add-widget.js'
import { generatorAddPage } from './generators/add-page/add-page.js'
import { generatorAddShared } from './generators/add-shared/add-shared.js'

export default function (plop) {
  plop.setWelcomeMessage('[FSD-codegen] Please choose a generator')

  generatorAddSegment(plop)
  generatorAddEntity(plop)
  generatorAddFeature(plop)
  generatorAddWidget(plop)
  generatorAddPage(plop)
  generatorAddShared(plop)
}
