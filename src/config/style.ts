import { defineConfig } from 'eslint/config'
import { pluginStylistic } from '../plugins'

export const style = defineConfig({
  plugins: { style: pluginStylistic },
  rules: {
    'style/array-bracket-spacing': ['error', 'never'],
    'style/arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'style/arrow-spacing': ['error', { before: true, after: true }],
    'style/block-spacing': ['error', 'always'],
    'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'style/comma-dangle': ['error', 'never'],
    'style/comma-spacing': ['error', { before: false, after: true }],
    'style/comma-style': ['error', 'last'],
    'style/computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
    'style/dot-location': ['error', 'property'],
    'style/eol-last': 'error',
    'style/func-call-spacing': ['error', 'never'],
    'style/indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: { parameters: 1, body: 1 },
      FunctionExpression: { parameters: 1, body: 1 },
      CallExpression: { arguments: 1 },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoreComments: false,
      ignoredNodes: [
        'JSXText', 'JSXElement', 'JSXElement > *', 'TemplateLiteral *',
        'JSXIdentifier', 'TSTypeParameterInstantiation', 'JSXNamespacedName',
        'JSXMemberExpression', 'JSXExpressionContainer', 'JSXEmptyExpression',
        'JSXAttribute', 'JSXSpreadAttribute', 'JSXSpreadChild',
        'JSXOpeningElement', 'JSXClosingElement',
        'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment'
      ],
      offsetTernaryExpressions: true
    }],
    'style/key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'style/keyword-spacing': ['error', { before: true, after: true }],
    'style/multiline-ternary': ['error', 'always-multiline'],
    'style/new-parens': 'error',
    'style/no-extra-parens': ['error', 'all', { nestedBinaryExpressions: false, ternaryOperandBinaryExpressions: false }],
    'style/no-mixed-operators': ['error', {
      groups: [
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||', '?:'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: true
    }],
    'style/no-mixed-spaces-and-tabs': 'error',
    'style/no-multi-spaces': 'error',
    'style/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'style/no-tabs': 'error',
    'style/no-trailing-spaces': 'error',
    'style/no-whitespace-before-property': 'error',
    'style/object-curly-newline': ['error', { consistent: true, multiline: true }],
    'style/object-curly-spacing': ['error', 'always'],
    'style/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'style/operator-linebreak': ['error', 'before'],
    'style/padded-blocks': ['error', { blocks: 'never', switches: 'never', classes: 'never' }],
    'style/quote-props': ['error', 'consistent-as-needed'],
    'style/quotes': ['error', 'single', { avoidEscape: true }],
    'style/rest-spread-spacing': ['error', 'never'],
    'style/semi': ['error', 'never'],
    'style/semi-spacing': ['error', { before: false, after: true }],
    'style/space-before-blocks': ['error', 'always'],
    'style/space-before-function-paren': ['error', 'never'],
    'style/space-in-parens': ['error', 'never'],
    'style/space-infix-ops': ['error'],
    'style/space-unary-ops': ['error', { words: false, nonwords: false }],
    'style/spaced-comment': ['error', 'always', {
      line: {
        markers: ['/'],
        exceptions: ['/', '#']
      },
      block: {
        markers: ['!'],
        exceptions: ['*'],
        balanced: true
      }
    }],
    'style/template-curly-spacing': ['error', 'never'],
    'style/template-tag-spacing': ['error', 'never'],
    'style/wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
    'style/yield-star-spacing': ['error', 'both'],
    'style/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
    'style/type-annotation-spacing': ['error']
  }
})
