// @ts-check
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['./ts'],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      extends: ['plugin:vue/vue3-recommended'],
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',

        'vue/max-attributes-per-line': 'off',
        'vue/no-v-html': 'off',
        'vue/require-prop-types': 'off',
        'vue/require-default-prop': 'off',
        'vue/multi-word-component-names': 'off',

        // reactivity transform
        'vue/no-setup-props-destructure': 'off',

        // style
        'vue/component-tags-order': ['error', { order: ['script[setup]', 'script', 'template', 'style[scoped]', 'style'] }],
        'vue/array-bracket-spacing': ['error', 'never'],
        'vue/arrow-spacing': ['error', { before: true, after: true }],
        'vue/block-spacing': ['error', 'always'],
        'vue/brace-style': ['error', '1tbs', { allowSingleLine: true }],
        'vue/camelcase': ['error', { properties: 'always' }],
        'vue/comma-dangle': ['error', 'always-multiline'],
        'vue/comma-spacing': ['error', { before: false, after: true }],
        'vue/comma-style': ['error', 'last'],
        'vue/dot-location': ['error', 'property'],
        'vue/dot-notation': ['error', { allowKeywords: true, allowPattern: '^[a-z]+(_[a-z]+)+$' }],
        'vue/eqeqeq': ['error', 'smart'],
        'vue/func-call-spacing': ['error', 'never'],
        'vue/html-comment-content-spacing': ['error', 'always'],
        'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],
        'vue/keyword-spacing': ['error', { before: true, after: true }],
        'vue/no-constant-condition': 'error',
        'vue/no-empty-pattern': 'error',
        'vue/no-extra-parens': ['error', 'all'],
        'vue/no-irregular-whitespace': 'error',
        'vue/no-loss-of-precision': 'error',
        'vue/no-useless-concat': 'error',
        'vue/object-curly-newline': ['error', { consistent: true }],
        'vue/object-curly-spacing': ['error', 'always'],
        'vue/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
        'vue/object-shorthand': ['error', 'always', { avoidQuotes: true }],
        'vue/operator-linebreak': ['error', 'before'],
        'vue/prefer-template': 'error',
        'vue/prefer-true-attribute-shorthand': ['error', 'always'],
        'vue/space-in-parens': ['error', 'never'],
        'vue/space-infix-ops': ['error'],
        'vue/space-unary-ops': ['error', { words: false, nonwords: false }],
        'vue/template-curly-spacing': ['error', 'never'],
      },
    },
  ],
})
