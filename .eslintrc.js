module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:unicorn/all',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['svelte3', 'unicorn'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],

  rules: {
    // Eslint Standard Disables
    'linebreak-style': 0,
    'comma-dangle': 0,
    'max-len': 0,
    'no-restricted-syntax': 0, // This one is a bitch because it prefers array.forEach over for of/in which is actually more performant.
    'no-param-reassign': 0,
    // Unicorn Disables.
    'unicorn/prefer-module': 0,
    'unicorn/no-null': 0,
    'unicorn/filename-case': 0,
    'unicorn/prevent-abbreviations': 0,
  },
};
