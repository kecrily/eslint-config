module.exports = {
  /** @type { import('eslint').Linter.Config } */
  extends: [
    './astro',
    './js',
    './json',
    './md',
    './ts',
    './vue',
    './yaml',
    'plugin:eslint-comments/recommended'
  ],
  reportUnusedDisableDirectives: true,
  ignorePatterns: [
    '!./.*',
    '*.min.*', '*.d.ts',
    'dist', 'output',
    'CHANGELOG.md', 'LICENSE*',
    'coverage', '__snapshots__',
    'public', 'temp',
    'packages-lock.json', 'yarn.lock', 'pnpm-lock.yaml'
  ]
}
