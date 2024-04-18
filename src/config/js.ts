import { style } from './style'
import { GLOB_JTSX, GLOB_JTSX_EXT, GLOB_JTSX_TEST } from '../globs'
import { pluginImport, pluginNode, pluginPromise, pluginUnicorn } from '../plugins'
import { extend } from '../utils'
import type { ConfigItem } from '../types'

export const js: ConfigItem[] = [
  extend({
    files: [GLOB_JTSX],
    plugins: {
      import: pluginImport,
      unicorn: pluginUnicorn,
      node: pluginNode,
      promise: pluginPromise
    },
    rules: {
      // common
      'curly': ['error', 'multi-or-nest', 'consistent'],
      'no-unused-vars': 'warn',
      'no-param-reassign': 'off',
      'no-debugger': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-cond-assign': ['error', 'always'],
      'no-restricted-syntax': [
        'error',
        'DebuggerStatement',
        'LabeledStatement',
        'WithStatement'
      ],
      'no-return-await': 'off',

      // style
      'camelcase': ['error', { properties: 'never', ignoreDestructuring: true }],
      'dot-notation': ['error', { allowKeywords: true, allowPattern: '^[a-z]+(_[a-z]+)+$' }],
      'eqeqeq': ['error', 'smart'],
      'no-constant-condition': 'error',
      'no-empty-pattern': 'error',
      'no-irregular-whitespace': 'error',
      'no-loss-of-precision': 'error',
      'no-useless-concat': 'error',
      'object-shorthand': ['error', 'always', { avoidQuotes: true }],
      'prefer-template': 'error',

      // es6
      'no-var': 'error',
      'prefer-const': ['error', {
        destructuring: 'any',
        ignoreReadBeforeAssign: true
      }],
      'prefer-arrow-callback': ['error', {
        allowNamedFunctions: false,
        allowUnboundThis: true
      }],
      'prefer-exponentiation-operator': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',

      // best-practice
      'array-callback-return': 'error',
      'block-scoped-var': 'error',
      'consistent-return': 'off',
      'complexity': ['off', 11],
      'no-alert': 'warn',
      'no-case-declarations': 'error',
      'no-multi-str': 'error',
      'no-with': 'error',
      'no-void': 'error',
      'no-useless-escape': 'off',
      'vars-on-top': 'error',
      'require-await': 'off',
      'no-return-assign': 'off',

      'no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
      'import/no-named-as-default-member': 'off',

      'sort-imports': ['error', {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false
      }],

      'accessor-pairs': ['error', { setWithoutGet: true, enforceForClassMembers: true }],
      'constructor-super': 'error',
      'default-case-last': 'error',
      'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
      'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true }],
      'no-array-constructor': 'error',
      'no-async-promise-executor': 'error',
      'no-caller': 'error',
      'no-class-assign': 'error',
      'no-compare-neg-zero': 'error',
      'no-const-assign': 'error',
      'no-control-regex': 'error',
      'no-delete-var': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-useless-backreference': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-empty-character-class': 'error',
      'no-eval': 'error',
      'no-ex-assign': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-boolean-cast': 'error',
      'no-fallthrough': 'error',
      'no-func-assign': 'error',
      'no-global-assign': 'error',
      'no-implied-eval': 'error',
      'no-import-assign': 'error',
      'no-invalid-regexp': 'error',
      'no-iterator': 'error',
      'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
      'no-lone-blocks': 'error',
      'no-misleading-character-class': 'error',
      'no-prototype-builtins': 'error',
      'no-useless-catch': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-object': 'error',
      'no-new-symbol': 'error',
      'no-new-wrappers': 'error',
      'no-obj-calls': 'error',
      'no-octal': 'error',
      'no-octal-escape': 'error',
      'no-proto': 'error',
      'no-redeclare': ['error', { builtinGlobals: false }],
      'no-regex-spaces': 'error',
      'no-self-assign': ['error', { props: true }],
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-shadow-restricted-names': 'error',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-this-before-super': 'error',
      'no-throw-literal': 'error',
      'no-undef': 'error',
      'no-undef-init': 'error',
      'no-unexpected-multiline': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-unreachable': 'error',
      'no-unreachable-loop': 'error',
      'no-unsafe-finally': 'error',
      'no-unsafe-negation': 'error',
      'no-unused-expressions': ['error', {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }],
      'no-useless-call': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-constructor': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'one-var': ['error', { initialized: 'never' }],
      'prefer-promise-reject-errors': 'error',
      'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
      'symbol-description': 'error',
      'unicode-bom': ['error', 'never'],
      'use-isnan': ['error', {
        enforceForSwitchCase: true,
        enforceForIndexOf: true
      }],
      'valid-typeof': ['error', { requireStringLiterals: true }],
      'yoda': ['error', 'never'],

      // import
      'import/order': ['error', {
        groups: ['builtin', 'external', 'internal', 'index', 'sibling', 'parent', 'object', 'type'],
        alphabetize: { order: 'asc', caseInsensitive: true }
      }],
      'import/first': 'error',
      'import/no-mutable-exports': 'error',

      'import/export': 'error',
      'import/no-duplicates': 'error',
      'import/no-named-default': 'error',
      'import/no-webpack-loader-syntax': 'error',

      // node
      'node/handle-callback-err': ['error', '^(err|error)$'],
      'node/no-deprecated-api': 'error',
      'node/no-exports-assign': 'error',
      'node/no-new-require': 'error',
      'node/no-path-concat': 'error',
      'node/process-exit-as-throw': 'error',
      'node/hashbang': 'error',
      'node/no-unpublished-bin': 'error',

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
      'unicorn/prefer-node-protocol': 'error',
      'unicorn/prefer-array-find': ['error', { checkFromLast: true }],
      'unicorn/prefer-set-has': 'error',
      'unicorn/prefer-export-from': 'error',
      'unicorn/no-unnecessary-polyfills': 'error',
      'unicorn/no-single-promise-in-promise-methods': 'error',
      'unicorn/no-await-in-promise-methods': 'error',
      'unicorn/no-anonymous-default-export': 'error',

      'promise/param-names': 'error'
    }
  }, style),
  {
    files: [`scripts/${GLOB_JTSX}`, `cli.${GLOB_JTSX_EXT}`],
    rules: { 'no-console': 'off' }
  },
  {
    files: GLOB_JTSX_TEST,
    rules: { 'no-unused-expressions': 'off' }
  }
]
