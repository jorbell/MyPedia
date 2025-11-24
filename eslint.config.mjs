import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default defineConfig([
  // 1. Global ignores
  globalIgnores(['**/node_modules/', '**/dist/', '**/build/']),

  // 2. Base configuration for all files
  {
    extends: compat.extends(
      'eslint:recommended',
      'plugin:prettier/recommended'
    ),
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },

  // 3. Backend-specific configuration
  {
    files: ['backend/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  // 4. Frontend-specific configuration
  {
    files: ['frontend/src/**/*.js', 'frontend/src/**/*.jsx'],
    extends: compat.extends(
      'plugin:react/recommended',
      'plugin:react/jsx-runtime'
    ),
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/prop-types': 'off',
    },
  },
])
