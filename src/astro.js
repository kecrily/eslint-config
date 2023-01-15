module.exports = {
  /** @type { import('eslint').Linter.Config } */
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      extends: [
        'plugin:astro/recommended'
      ],
      rules: {
        'no-undef': 'off',
        'semi': 'off',
        'astro/semi': ['error', 'never']
      }
    }
  ]
}
