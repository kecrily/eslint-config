import { defineConfig } from 'eslint/config'
import { GLOB_JSONC5 } from '../globs'
import { parserJsonc } from '../parsers'
import { pluginJsonc } from '../plugins'

export const json = defineConfig([
  {
    files: [GLOB_JSONC5],
    languageOptions: { parser: parserJsonc },
    plugins: { jsonc: pluginJsonc },
    rules: {
      'strict': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',

      'jsonc/no-bigint-literals': 'error',
      'jsonc/no-binary-expression': 'error',
      'jsonc/no-binary-numeric-literals': 'error',
      'jsonc/no-dupe-keys': 'error',
      'jsonc/no-escape-sequence-in-identifier': 'error',
      'jsonc/no-floating-decimal': 'error',
      'jsonc/no-hexadecimal-numeric-literals': 'error',
      'jsonc/no-infinity': 'error',
      'jsonc/no-multi-str': 'error',
      'jsonc/no-nan': 'error',
      'jsonc/no-number-props': 'error',
      'jsonc/no-numeric-separators': 'error',
      'jsonc/no-octal-numeric-literals': 'error',
      'jsonc/no-octal': 'error',
      'jsonc/no-parenthesized': 'error',
      'jsonc/no-plus-sign': 'error',
      'jsonc/no-regexp-literals': 'error',
      'jsonc/no-sparse-arrays': 'error',
      'jsonc/no-template-literals': 'error',
      'jsonc/no-undefined-value': 'error',
      'jsonc/no-unicode-codepoint-escapes': 'error',
      'jsonc/no-useless-escape': 'error',
      'jsonc/quote-props': 'error',
      'jsonc/quotes': 'error',
      'jsonc/space-unary-ops': 'error',
      'jsonc/valid-json-number': 'error',
      'jsonc/vue-custom-block/no-parsing-error': 'error',
      'jsonc/no-irregular-whitespace': 'error',

      'jsonc/array-bracket-spacing': ['error', 'never'],
      'jsonc/comma-style': ['error', 'last'],
      'jsonc/comma-dangle': ['error', 'never'],
      'jsonc/indent': ['error', 2],
      'jsonc/key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'jsonc/object-curly-newline': ['error', { consistent: true, multiline: true }],
      'jsonc/object-curly-spacing': ['error', 'always'],
      'jsonc/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }]
    }
  },

  {
    files: ['*.json5'],
    rules: {
      'jsonc/no-hexadecimal-numeric-literals': 'off',
      'jsonc/no-infinity': 'off',
      'jsonc/no-nan': 'off',
      'jsonc/no-plus-sign': 'off',
      'jsonc/quote-props': 'off',
      'jsonc/quotes': 'off',
      'jsonc/valid-json-number': 'off'
    }
  },
  {
    files: ['package.json'],
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
])
