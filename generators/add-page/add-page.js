import { PAGE_ACTIONS } from '../../templates/architecture/page-slice/actions.js'

export const generatorAddPage = (
  /** @type {import('plop').NodePlopAPI} */ plop
) => {
  plop.setGenerator('page-slice', {
    description: 'add new page slice instance',
    prompts: [
      {
        type: 'input',
        name: 'sliceName',
        message: 'Enter new slice name:'
      }
      // {
      //   type: 'list',
      //   name: 'isEnumRoutes',
      //   message: 'Set page link to enum Routes?',
      //   choices: ['yes', 'no'],
      //   default: 'yes'
      // },
      // {
      //   type: 'input',
      //   name: 'page_link',
      //   message: 'Write url link page',
      //   when: (answers) => answers.isEnumRoutes === 'yes'
      // }
    ],
    actions: function (data) {
      data.layerFolder = 'pages'

      return PAGE_ACTIONS({ rootPath: plop.getPlopfilePath() })
    }
  })
}
