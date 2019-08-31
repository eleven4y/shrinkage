module.exports = {
    'env': {
        'es6': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:node/recommended'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'rules': {
        'indent': ['error', 2],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],

        'node/no-unsupported-features/es-syntax': ['off']
    }
};