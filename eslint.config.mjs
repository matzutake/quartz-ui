export default {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/no-unused-vars': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  overrides: [
    {
      files: ['**/*.vue'],
      rules: {
        'vue/script-setup-uses-vars': 'error',
      },
    },
  ],
}
