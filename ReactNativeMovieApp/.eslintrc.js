module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier', '@typescript-eslint', 'react-hooks'],
  rules: {
    'func-names': 'off',
    'global-require': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/camelcase': 'off',
    'import/no-unresolved': 'off',
    'default-case': 'off',
    'consistent-return': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/no-multi-comp': 'off',
    'react/no-unused-prop-types': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/sort-comp': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/static-property-placement': 'off',
    'react/display-name': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
