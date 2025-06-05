import { defineConfig } from 'eslint/config'
import { GLOB_ASTRO } from '../globs'
import { parserAstro, parserTs } from '../parsers'
import { pluginAstro } from '../plugins'

export const astro = defineConfig({
  files: [GLOB_ASTRO],
  languageOptions: {
    parser: parserAstro,
    parserOptions: {
      parser: parserTs,
      sourceType: 'module',
      extraFileExtensions: ['.astro']
    }
  },
  plugins: { astro: pluginAstro },
  rules: {
    'astro/no-conflict-set-directives': 'error',
    'astro/no-deprecated-astro-canonicalurl': 'error',
    'astro/no-deprecated-astro-fetchcontent': 'error',
    'astro/no-deprecated-astro-resolve': 'error',
    'astro/no-deprecated-getentrybyslug': 'error',
    'astro/no-unused-define-vars-in-style': 'error',
    'astro/valid-compile': 'error',

    'no-undef': 'off',
    'semi': 'off',
    'astro/semi': ['error', 'never']
  }
})
