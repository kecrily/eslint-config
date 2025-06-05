import { defineConfig } from 'eslint/config'
import { GLOB_JTSX, GLOB_MARKDOWN, GLOB_TS, GLOB_TSX } from '../globs'
import { parserTs } from '../parsers'
import { pluginTs } from '../plugins'

export const ts = defineConfig([
  {
    files: [GLOB_TS, GLOB_TSX],
    languageOptions: {
      parser: parserTs,
      parserOptions: { project: true }
    },
    plugins: { ts: pluginTs },
    settings: {
      'import/extensions': GLOB_JTSX,
      'import/external-module-folders': ['node_modules', 'node_modules/@types'],
      'import/parsers': {
        'ts/parser': ['.ts', '.tsx']
      },
      'import/resolver': {
        node: { extensions: GLOB_JTSX }
      }
    },
    rules: {
      // off
      'import/named': 'off',

      'ts/explicit-function-return-type': 'off',
      'ts/explicit-member-accessibility': 'off',
      'ts/no-explicit-any': 'off',
      'ts/parameter-properties': 'off',
      'ts/no-empty-interface': 'off',
      'ts/ban-ts-ignore': 'off',
      'ts/no-empty-function': 'off',
      'ts/no-non-null-assertion': 'off',
      'ts/explicit-module-boundary-types': 'off',
      'ts/ban-types': 'off',
      'ts/no-namespace': 'off',

      // TypeScript
      'ts/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
      'ts/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }],
      'ts/consistent-type-definitions': ['error', 'interface'],
      'ts/consistent-indexed-object-style': ['error', 'record'],
      'ts/prefer-ts-expect-error': 'error',

      // override
      'no-undef': 'off',
      'no-useless-constructor': 'off',
      'no-unused-vars': 'off',
      'ts/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-redeclare': 'off',
      'ts/no-redeclare': 'error',
      'no-use-before-define': 'off',
      'ts/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],

      'camelcase': 'off',
      'ts/naming-convention': ['error',
        { selector: 'default', format: ['camelCase'] },
        { selector: 'variable', format: ['camelCase', 'UPPER_CASE'] },
        { selector: 'parameter', format: ['camelCase'], leadingUnderscore: 'allow' },
        { selector: 'typeLike', format: ['PascalCase'] },
        { selector: 'memberLike', modifiers: ['private'], format: ['camelCase'], leadingUnderscore: 'forbid' },
        { selector: 'variable', modifiers: ['destructured'], format: null },
        { selector: 'interface', format: ['PascalCase'], custom: { regex: '^I[A-Z]', match: false } },
        { selector: 'objectLiteralProperty', format: null }
      ],

      'no-array-constructor': 'off',
      'ts/no-array-constructor': 'error',
      'ts/no-duplicate-enum-values': 'error',
      'ts/no-extra-non-null-assertion': 'error',
      'no-loss-of-precision': 'off',
      'ts/no-loss-of-precision': 'error',
      'ts/no-misused-new': 'error',
      'ts/no-non-null-asserted-optional-chain': 'error',
      'ts/no-this-alias': 'error',
      'ts/no-unnecessary-type-constraint': 'error',
      'ts/no-unsafe-declaration-merging': 'error',
      'ts/no-var-requires': 'error',
      'ts/prefer-as-const': 'error',
      'ts/triple-slash-reference': 'error'
    }
  },
  {
    files: ['**/*.d.ts'],
    rules: { 'import/no-duplicates': 'off' }
  },
  {
    // code block
    files: [`${GLOB_MARKDOWN}/*.ts`],
    rules: {
      'ts/no-redeclare': 'off',
      'ts/no-unused-vars': 'off',
      'ts/no-use-before-define': 'off',
      'ts/no-var-requires': 'off'
    }
  }
])
