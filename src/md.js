module.exports = {
  /** @type { import('eslint').Linter.Config } */
  overrides: [
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown',
      extends: ['plugin:markdown/recommended'],
    },
  ],
}
