module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['off', { allowConstantExport: true }],
    'react/prop-types': ['off'],
    'react/react-in-jsx-scope': 'off', // Not needed with new JSX transform
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^React$|^_',
        argsIgnorePattern: '^_',
      },
    ], // Ignore React and variables starting with underscore
  },
};
