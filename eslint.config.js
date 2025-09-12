import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import eslintImport from 'eslint-plugin-import';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: { version: '18.3' },
      'import/resolver': {
        alias: {
          map: [
            ['@hooks', './src/hooks'],
            ['@components', './src/components'],
            ['@utils', './src/utils'],
            ['@layouts', './src/layouts'],
            ['@api', './src/api'],
            ['@pages', './src/pages'],
            ['@store', './src/store'],
            ['@styles', './src/styles'],
            ['@config', './src/config'],
            ['@', './node_modules'],
            ['@tailwindcss', './node_modules/tailwindcss'],
            ['@/*', ['*']],
          ],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
        },
        node: {
          moduleDirectory: ['node_modules', 'src'], // To read aliases
        },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: eslintImport,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'import/no-unresolved': 'error', // Ensure imports are resolved correctly
    },
  },
]
