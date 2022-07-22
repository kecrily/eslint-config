// @ts-check
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['./base', './vue'],
  reportUnusedDisableDirectives: true,
})
