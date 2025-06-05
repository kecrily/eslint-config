import { defineConfig } from 'eslint/config'
import { GLOB_MARKDOWN, GLOB_MARKDOWN_JTSX } from '../globs'
import { pluginMarkdown } from '../plugins'

export const md = defineConfig([
  {
    files: [GLOB_MARKDOWN],
    plugins: { md: pluginMarkdown },
    processor: 'md/markdown'
  },
  {
    files: [GLOB_MARKDOWN_JTSX],
    languageOptions: {
      parserOptions: { ecmaFeatures: { impliedStrict: true } }
    },
    rules: {
      'import/no-unresolved': 'off',
      'no-alert': 'off',
      'no-console': 'off',
      'no-restricted-imports': 'off',

      'style/eol-last': 'off',

      'no-undef': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
      'padded-blocks': 'off',

      'strict': 'off',

      'unicode-bom': 'off'
    }
  }
])
