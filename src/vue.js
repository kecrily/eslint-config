module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    './ts.js',
  ],
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',

    // space
    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/block-spacing': ['error', 'always'],
    'vue/comma-spacing': ['error', { before: false, after: true }],
    'vue/func-call-spacing': ['error', 'never'],
    'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'vue/keyword-spacing': ['error', { before: true, after: true }],
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/template-curly-spacing': ['error', 'never'],

    // reactivity transform
    'vue/no-setup-props-destructure': 'off',

    'vue/component-tags-order': ['error', {
      order: ['script', 'template', 'style'],
    }],
  },
}
