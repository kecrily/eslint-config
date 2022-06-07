module.exports = {
  env: { es6: true, browser: true, node: true },
  settings: {
    'import/resolver': { node: { extensions: ['.js', '.mjs'] } },
  },
  overrides: [
    {
      files: ['*.js', '*.ts'],
      extends: ['plugin:import/recommended'],
      plugins: ['unicorn'],
      rules: {
        // import
        'import/order': 'error',
        'import/first': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-unresolved': 'off',
        'import/no-absolute-path': 'off',

        // es6
        'no-var': 'error',
        'prefer-const': [
          'error',
          {
            destructuring: 'any',
            ignoreReadBeforeAssign: true,
          },
        ],
        'prefer-arrow-callback': [
          'error',
          {
            allowNamedFunctions: false,
            allowUnboundThis: true,
          },
        ],
        'prefer-exponentiation-operator': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
        'generator-star-spacing': 'off',
        'spaced-comment': [
          'error', 'always', {
            line: {
              markers: ['/'],
              exceptions: ['/', '#'],
            },
            block: {
              markers: ['!'],
              exceptions: ['*'],
              balanced: true,
            },
          },
        ],

        // best-practice
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        'consistent-return': 'off',
        'complexity': ['off', 11],
        'no-alert': 'warn',
        'no-case-declarations': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-with': 'error',
        'no-void': 'error',
        'no-useless-escape': 'off',
        'vars-on-top': 'error',
        'require-await': 'off',
        'no-return-assign': 'off',

        // unicorns
        // Pass error message when throwing errors
        'unicorn/error-message': 'error',
        // Uppercase regex escapes
        'unicorn/escape-case': 'error',
        // Array.isArray instead of instanceof
        'unicorn/no-instanceof-array': 'error',
        // Prevent deprecated `new Buffer()`
        'unicorn/no-new-buffer': 'error',
        // Keep regex literals safe!
        'unicorn/no-unsafe-regex': 'off',
        // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
        'unicorn/number-literal-case': 'error',
        // includes over indexOf when checking for existence
        'unicorn/prefer-includes': 'error',
        // String methods startsWith/endsWith instead of more complicated stuff
        'unicorn/prefer-string-starts-ends-with': 'error',
        // textContent instead of innerText
        'unicorn/prefer-dom-node-text-content': 'error',
        // Enforce throwing type error when throwing error while checking typeof
        'unicorn/prefer-type-error': 'error',
        // Use new when throwing error
        'unicorn/throw-new-error': 'error',

        'no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
        'eslint-comments/disable-enable-pair': 'off',
        'import/no-named-as-default-member': 'off',
        'n/no-callback-literal': 'off',

        'sort-imports': [
          'error',
          {
            ignoreCase: false,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
            allowSeparatedGroups: false,
          },
        ],
      },
    },
    {
      files: ['scripts/**/*.*', 'cli.*'],
      rules: { 'no-console': 'off' },
    },
    {
      files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
      rules: { 'no-unused-expressions': 'off' },
    },
    {
      files: ['**/*.md/*.js', '**/*.md/*.ts'],
      rules: {
        'import/no-unresolved': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
      },
    },
  ],
}
