module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint', '@emotion'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest-dom/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        eqeqeq: 'error',
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'react/prop-types': 'off',
        'react/display-name': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'warn',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/ban-ts-comment': [
            'error',
            {
                'ts-expect-error': 'allow-with-description',
            },
        ],
        // Fix for Emotion CSS prop
        'react/no-unknown-property': ['error', { ignore: ['css'] }],
    },
};
