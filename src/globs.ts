export const GLOB_JTSX_EXT = '?([cm])[jt]s?(x)'
export const GLOB_JTSX = `**/*.${GLOB_JTSX_EXT}`

export const GLOB_JS = '**/*.?([cm])js'
export const GLOB_JSX = '**/*.?([cm])jsx'

export const GLOB_TS = '**/*.?([cm])ts'
export const GLOB_DTS = '**/*.d.ts'
export const GLOB_TSX = '**/*.?([cm])tsx'

export const GLOB_STYLE = '**/*.{c,le,sc}ss'
export const GLOB_CSS = '**/*.css'
export const GLOB_LESS = '**/*.less'
export const GLOB_SCSS = '**/*.scss'

export const GLOB_JSONC5 = '**/*.json?([c5])'
export const GLOB_JSON = '**/*.json'
export const GLOB_JSONC = '**/*.jsonc'
export const GLOB_JSON5 = '**/*.json5'

export const GLOB_YAML = '**/*.y?(a)ml'

export const GLOB_HTML = '**/*.htm?(l)'
export const GLOB_VUE = '**/*.vue'
export const GLOB_ASTRO = '**/*.astro'

export const GLOB_MARKDOWN = '**/*.md'
export const GLOB_MARKDOWN_JTSX = `${GLOB_MARKDOWN}/${GLOB_JTSX}`

export const GLOB_JTSX_TEST = [
  `**/__tests__/${GLOB_JTSX}`,
  `**/*.spec.${GLOB_JTSX_EXT}`,
  `**/*.test.${GLOB_JTSX_EXT}`,
  `**/*.bench.${GLOB_JTSX_EXT}`,
  `**/*.benchmark.${GLOB_JTSX_EXT}`
]

export const GLOB_EXCLUDE = [
  '!./.*',
  '*.min.*', '*.d.ts',
  'dist', 'output',
  'CHANGELOG.md', 'LICENSE*',
  'coverage', '__snapshots__',
  'public', 'temp',
  'packages-lock.json', 'yarn.lock', 'pnpm-lock.yaml', 'bun.lockb'
]
