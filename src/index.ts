import { defineConfig } from 'eslint/config'
import gitignore from 'eslint-config-flat-gitignore'
import { js } from './config/js'
import { json } from './config/json'
import { md } from './config/md'
import { ts } from './config/ts'
import { vue } from './config/vue'
import { yaml } from './config/yaml'
import { GLOB_EXCLUDE } from './globs'

const defaultConfig = defineConfig([
  { ignores: GLOB_EXCLUDE },
  gitignore(),
  ...js,
  ...ts,
  ...json,
  ...md,
  yaml,
  vue
])

export default defaultConfig
