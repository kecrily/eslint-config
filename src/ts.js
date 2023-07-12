module.exports = {
  /** @type { import('eslint').Linter.Config } */
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] }
    }
  },
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        './js'
      ],
      rules: {
        // off
        'import/named': 'off',

        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/parameter-properties': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-namespace': 'off',

        // style
        'indent': 'off',
        '@typescript-eslint/indent': ['error', 2, {
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
        '@typescript-eslint/semi': ['error', 'never'],
        'quotes': 'off',
        '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],
        'block-spacing': 'off',
        'brace-style': 'off',
        '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'never'],
        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': ['error', 'never'],
        'key-spacing': 'off',
        '@typescript-eslint/key-spacing': ['error', { beforeColon: false, afterColon: true }],
        'keyword-spacing': 'off',
        '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],
        'no-extra-parens': 'off',
        '@typescript-eslint/no-extra-parens': ['error', 'all', { nestedBinaryExpressions: false, ternaryOperandBinaryExpressions: false }],
        'object-curly-spacing': 'off',
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': ['error', 'never'],
        'space-infix-ops': 'off',
        '@typescript-eslint/space-infix-ops': ['error'],
        '@typescript-eslint/type-annotation-spacing': ['error'],

        // TypeScript
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
        '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
        '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
        '@typescript-eslint/prefer-ts-expect-error': 'error',

        // override
        'no-undef': 'off',
        'no-useless-constructor': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],

        'camelcase': 'off',
        '@typescript-eslint/naming-convention': ['error',
          { selector: 'default', format: ['camelCase'] },
          { selector: 'variable', format: ['camelCase', 'UPPER_CASE'] },
          { selector: 'parameter', format: ['camelCase'], leadingUnderscore: 'allow' },
          { selector: 'typeLike', format: ['PascalCase'] },
          { selector: 'memberLike', modifiers: ['private'], format: ['camelCase'], leadingUnderscore: 'forbid' },
          { selector: 'variable', modifiers: ['destructured'], format: null },
          { selector: 'interface', format: ['PascalCase'], custom: { regex: '^I[A-Z]', match: false } },
          { selector: 'objectLiteralProperty', format: null }
        ]
      }
    },
    {
      files: ['*.d.ts'],
      rules: { 'import/no-duplicates': 'off' }
    },
    {
    // code block
      files: ['**/*.md/*.ts'],
      rules: {
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ]
}
