const nodeModulesExclude = {
  and: [/node_modules/],
  not: [/@guardian\//],
}

module.exports = ({ config, mode }) => {
  config.module.rules.find(
    (rule) => String(rule.test) === String(/\.(mjs|tsx?|jsx?)$/)
  ).exclude = nodeModulesExclude

  return config
}
