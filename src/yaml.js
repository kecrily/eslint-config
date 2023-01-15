module.exports = {
  /** @type { import('eslint').Linter.Config } */
  overrides: [
    {
      files: ['*.yaml', '*.yml'],
      extends: ['plugin:yml/recommended'],
      rules: {
        'spaced-comment': 'off',
        'yml/quotes': ['error', { prefer: 'single', avoidEscape: false }],
        'yml/no-empty-document': 'off'
      }
    }
  ]
}
