module.exports = {
  /** @type { import('eslint').Linter.Config } */
  overrides: [
    {
      files: ['*.json', '*.jsonc', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'quotes': ['error', 'double'],
        'quote-props': ['error', 'always'],
        'comma-dangle': ['error', 'never'],

        'no-irregular-whitespace': 'off',
        'jsonc/no-irregular-whitespace': ['error']
      }
    },
    {
      files: ['*.jsonc', '*.jsonc'],
      extends: ['plugin:jsonc/recommended-with-jsonc']
    },
    {
      files: ['*.json5'],
      extends: ['plugin:jsonc/recommended-with-json5']
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': ['error', {
          pathPattern: '^$',
          order: [
            'name', 'type', 'version', 'private',
            'description', 'categories', 'keywords', 'license',
            'author', 'contributors', 'repository',
            'homepage', 'bugs', 'funding',
            'engines', 'packageManager',
            'main', 'module', 'browser', 'bin',
            'types', 'typesVersions', 'unpkg', 'jsdelivr',
            'exports', 'files',
            'sideEffects', 'scripts',
            'peerDependencies', 'peerDependenciesMeta',
            'optionalDependencies', 'dependencies',
            'devDependencies', 'bundledDependencies',
            'pnpm', 'overrides', 'resolutions',
            'husky', 'lint-staged', 'simple-git-hooks',
            'config', 'eslintConfig', 'publishConfig', 'workspaces'
          ]
        },
        {
          pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
          order: { type: 'asc' }
        },
        {
          pathPattern: '^exports.*$',
          order: ['types', 'require', 'import']
        },
        {
          pathPattern: '^scripts.*$',
          order: [
            { keyPattern: '^pre:.*$' },
            { keyPattern: '^dev.*$' },
            { keyPattern: '^build.*$' },
            { keyPattern: '^generate.*$' },
            { keyPattern: '^preview.*$' },
            { keyPattern: '^test.*$' },
            { keyPattern: '^typecheck.*$' },
            { keyPattern: '^lint.*$' },
            { keyPattern: '^release.*$' },
            { keyPattern: '^post:.*$' }
          ]
        }
        ]
      }
    }
  ]
}
