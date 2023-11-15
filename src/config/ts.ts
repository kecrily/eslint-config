import { GLOB_JTSX, GLOB_MARKDOWN, GLOB_TS, GLOB_TSX } from '../globs'
import { parserTs } from '../parsers'
import { pluginTs } from '../plugins'
import type { ConfigItem } from '../types'

export const ts: ConfigItem[] = [
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

      // style
      'indent': 'off',
      'ts/indent': ['error', 2, {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
        ignoredNodes: [
          'JSXText', 'JSXElement', 'JSXElement > *', 'TemplateLiteral *',
          'JSXIdentifier', 'TSTypeParameterInstantiation', 'JSXNamespacedName',
          'JSXMemberExpression', 'JSXExpressionContainer', 'JSXEmptyExpression',
          'JSXAttribute', 'JSXSpreadAttribute', 'JSXSpreadChild',
          'JSXOpeningElement', 'JSXClosingElement',
          'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment'
        ],
        offsetTernaryExpressions: true
      }],
      'semi': 'off',
      'ts/semi': ['error', 'never'],
      'quotes': 'off',
      'ts/quotes': ['error', 'single', { avoidEscape: true }],
      'block-spacing': 'off',
      'brace-style': 'off',
      'ts/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'comma-dangle': 'off',
      'ts/comma-dangle': ['error', 'never'],
      'comma-spacing': 'off',
      'ts/comma-spacing': ['error', { before: false, after: true }],
      'func-call-spacing': 'off',
      'ts/func-call-spacing': ['error', 'never'],
      'key-spacing': 'off',
      'ts/key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'keyword-spacing': 'off',
      'ts/keyword-spacing': ['error', { before: true, after: true }],
      'no-extra-parens': 'off',
      'ts/no-extra-parens': ['error', 'all', { nestedBinaryExpressions: false, ternaryOperandBinaryExpressions: false }],
      'object-curly-spacing': 'off',
      'ts/object-curly-spacing': ['error', 'always'],
      'space-before-function-paren': 'off',
      'ts/space-before-function-paren': ['error', 'never'],
      'space-infix-ops': 'off',
      'ts/space-infix-ops': ['error'],
      'ts/type-annotation-spacing': ['error'],

      // TypeScript
      'ts/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
      'ts/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
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
]
