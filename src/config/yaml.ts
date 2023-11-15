import { GLOB_YAML } from '../globs'
import { parserYaml } from '../parsers'
import { pluginYaml } from '../plugins'
import type { ConfigItem } from '../types'

export const yaml: ConfigItem = {
  files: [GLOB_YAML],
  languageOptions: { parser: parserYaml },
  plugins: { yaml: pluginYaml },
  rules: {
    'no-irregular-whitespace': 'off',
    'no-unused-vars': 'off',
    'spaced-comment': 'off',

    'yaml/no-empty-document': 'error',
    'yaml/no-empty-key': 'error',
    'yaml/no-empty-mapping-value': 'error',
    'yaml/no-empty-sequence-entry': 'error',
    'yaml/no-irregular-whitespace': 'error',
    'yaml/no-tab-indent': 'error',
    'yaml/vue-custom-block/no-parsing-error': 'error',

    'yaml/quotes': ['error', { prefer: 'single', avoidEscape: false }]
  }
}
