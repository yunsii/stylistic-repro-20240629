import tsParser from '@typescript-eslint/parser'
import pluginStylistic from '@stylistic/eslint-plugin'

export default [
  {
    plugins: {
      '@stylistic': pluginStylistic
    },
    rules: {
      // Add your config here
      '@stylistic/indent': ['error',2, {
        ArrayExpression: 1,
        CallExpression: {
          arguments: 1
        },
        flatTernaryExpressions: false,
        FunctionDeclaration: {
          body: 1,
          parameters: 1
        },
        FunctionExpression: {
          body: 1,
          parameters: 1
        },
        ignoreComments: false,
        ignoredNodes: [
          'TemplateLiteral *',
          'TSUnionType',
          'TSIntersectionType',
          'TSTypeParameterInstantiation',
          'FunctionExpression > .params[decorators.length > 0]',
          'FunctionExpression > .params > :matches(Decorator, :not(:first-child))'
        ],
        ImportDeclaration: 1,
        MemberExpression: 1,
        ObjectExpression: 1,
        offsetTernaryExpressions: true,
        outerIIFEBody: 1,
        SwitchCase: 1,
        VariableDeclarator: 1
      }],
      // "@stylistic/jsx-indent": ['error', 2,{
      //   checkAttributes: false,
      //   indentLogicalExpressions: true
      // }],
    }
  },

  // Parser setup
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser
    }
  },
  {
    files: ['**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        jsx: true
      }
    }
  },
  {
    files: ['**/*.js'],
  },
  {
    files: ['**/*.jsx'],
    languageOptions: {
      parserOptions: {
        jsx: true
      }
    }
  }
]
