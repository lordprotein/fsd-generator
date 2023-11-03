module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  rules: {
    camelcase: 'off',
    'import/no-extraneous-dependencies': 'off',
    'global-require': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-else-return': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-nested-ternary': 'off',
    'no-return-await': 'off',
    'import/prefer-default-export': 'off',
    'import/no-dynamic-require': 'off',
    '@typescript-eslint/no-use-before-define': ['off'],
    'testing-library/prefer-screen-queries': 'off',
    'no-throw-literal': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/no-cycle': 'off',
    'prettier/prettier': 'error',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'consistent-return': 'off',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
        pathGroups: [
          { group: 'internal', position: 'after', pattern: 'pages/**' },
          { group: 'internal', position: 'after', pattern: 'widgets/**' },
          { group: 'internal', position: 'after', pattern: 'features/**' },
          { group: 'internal', position: 'after', pattern: 'entities/**' },
          { group: 'internal', position: 'after', pattern: 'shared/**' }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ]
      }
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            message:
              'Private imports are prohibited, use public imports instead',
            group: ['app/**']
          },
          {
            message:
              'Private imports are prohibited, use public imports instead',
            group: ['pages/*/**']
          },
          {
            message:
              'Private imports are prohibited, use public imports instead',
            group: ['widgets/*/**']
          },
          {
            message:
              'Private imports are prohibited, use public imports instead',
            group: ['features/*/**']
          },
          {
            message:
              'Private imports are prohibited, use public imports instead',
            group: ['entities/*/**']
          },
          {
            message:
              'Private imports are prohibited, use public imports instead',
            group: ['shared/*/*/**']
          },
          {
            message:
              'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/app']
          },
          {
            message:
              'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/pages']
          },
          {
            message:
              'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/widgets']
          },
          {
            message:
              'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/features']
          },
          {
            message:
              'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/entities']
          },
          {
            message:
              'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/shared']
          }
        ]
      }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['.', 'src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts']
      }
    }
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        'no-undef': 'off'
      }
    }
  ]
}
