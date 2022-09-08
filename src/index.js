module.exports = {
  /** @type { import('eslint').Linter.Config } */
  extends: ['./base', './vue', './astro'],
  reportUnusedDisableDirectives: true,
}
