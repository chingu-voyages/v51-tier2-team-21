module.exports = [
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended'
    ],
    plugins: [
      'react',
      '@typescript-eslint',
      'prettier'
    ],
    rules: {
      'quotes': ['error', 'single'],
      'prettier/prettier': 'error',
      // other ESLint rules here
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
  },
];
