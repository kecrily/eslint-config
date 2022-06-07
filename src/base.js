module.exports = {
  extends: [
    'standard',
    'plugin:eslint-comments/recommended',
  ],
  plugins: ['markdown'],
  ignorePatterns: [
    '*.min.*', 'dist', 'output',
    'CHANGELOG.md', 'LICENSE*',
    'coverage', '__snapshots__',
    'public', 'temp',
    'packages-lock.json', 'yarn.lock', 'pnpm-lock.yaml',
    '!.github', '!.vitepress', '!.vscode',
  ],
  overrides: [
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
      files: ['*.json'],
      extends: ['plugin:jsonc/recommended-with-json'],
    },
    {
      files: ['*.jsonc'],
      extends: ['plugin:jsonc/recommended-with-jsonc'],
    },
    {
      files: ['*.json5'],
      extends: ['plugin:jsonc/recommended-with-json5'],
    },
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
      extends: ['plugin:yml/recommended'],
      rules: {
        'spaced-comment': 'off',
        'yml/quotes': ['error', { prefer: 'single', avoidEscape: false }],
        'yml/no-empty-document': 'off',
      },
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
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
  rules: {
    // Common
    'semi': ['error', 'never'],
    'curly': ['error', 'multi-or-nest', 'consistent'],
    'quotes': ['error', 'single'],
    'quote-props': ['error', 'consistent-as-needed'],
    'no-unused-vars': 'warn',
    'no-param-reassign': 'off',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'camelcase': 'off',
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-constant-condition': 'warn',
    'no-debugger': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-cond-assign': ['error', 'always'],
    'no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-return-await': 'off',
    'space-before-function-paren': ['error', 'never'],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
    'indent': ['error', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],

    /// space
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'comma-spacing': ['error', { before: false, after: true }],
    'func-call-spacing': ['error', 'never'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'object-curly-spacing': ['error', 'always'],
    'template-curly-spacing': ['error', 'never'],
  },
}
