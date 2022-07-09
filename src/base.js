module.exports = {
  extends: [
    'standard',
    'plugin:eslint-comments/recommended',
  ],
  plugins: ['markdown'],
  ignorePatterns: [
    '*.min.*', '*.d.ts',
    'dist', 'output',
    'CHANGELOG.md', 'LICENSE*',
    'coverage', '__snapshots__',
    'public', 'temp',
    'packages-lock.json', 'yarn.lock', 'pnpm-lock.yaml',
  ],
  overrides: [
    {
      files: ['*.yaml', '*.yml'],
      extends: ['plugin:yml/recommended'],
      rules: {
        'spaced-comment': 'off',
        'yml/quotes': ['error', { prefer: 'single', avoidEscape: false }],
        'yml/no-empty-document': 'off',
      },
    },
    {
      files: ['*.json', '*.jsonc', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'quotes': ['error', 'double'],
        'quote-props': ['error', 'always'],
        'comma-dangle': ['error', 'never'],
      },
    },
    {
      files: ['*.jsonc', '*.jsonc'],
      extends: ['plugin:jsonc/recommended-with-jsonc'],
    },
    {
      files: ['*.json5'],
      extends: ['plugin:jsonc/recommended-with-json5'],
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': ['error', {
          pathPattern: '^$',
          order: [
            'name', 'type', 'version', 'private', 'packageManager',
            'description', 'categories', 'keywords', 'license',
            'author', 'contributors', 'repository',
            'homepage', 'bugs', 'funding',
            'engines',
            'main', 'module', 'browser', 'bin',
            'types', 'typesVersions', 'unpkg', 'jsdelivr',
            'exports', 'files',
            'sideEffects', 'scripts',
            'peerDependencies', 'peerDependenciesMeta',
            'optionalDependencies', 'dependencies',
            'devDependencies', 'bundledDependencies',
            'pnpm', 'overrides', 'resolutions',
            'husky', 'lint-staged', 'simple-git-hooks',
            'config', 'eslintConfig', 'publishConfig', 'workspaces',
          ],
        },
        {
          pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
          order: { type: 'asc' },
        },
        {
          pathPattern: '^exports.*$',
          order: ['types', 'require', 'import'],
        },
        {
          pathPattern: 'scripts',
          order: [
            'dev', 'build', 'generate', 'preview',
            'test', 'typecheck', 'lint', 'release',
          ],
        },
        ],
      },
    },
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown',
      extends: ['plugin:markdown/recommended'],
    },
  ],
}
