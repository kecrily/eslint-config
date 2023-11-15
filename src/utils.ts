import type { ConfigItem } from './types'

export function extend(baseConfig: ConfigItem, extendConfig: ConfigItem | ConfigItem[]): ConfigItem {
  extendConfig = Array.isArray(extendConfig) ? extendConfig : [extendConfig]

  const plugins = Object.assign({}, ...extendConfig.map(config => config.plugins))
  const rules = Object.assign({}, ...extendConfig.map(config => config.rules))

  baseConfig.plugins = Object.assign({}, baseConfig.plugins, plugins)
  baseConfig.rules = Object.assign({}, baseConfig.rules, rules)

  return baseConfig
}
