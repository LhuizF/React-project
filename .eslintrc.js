module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/jsx-runtime'
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        'no-console': 'off',
        indent: ['error', 4, { ignoredNodes: ['JSXElement'], SwitchCase: 1 }],
        'class-methods-use-this': 'off',
        'no-param-reassign': 'off',
        'comma-dangle': ['error', 'never'],
        // 'keyword-spacing': [
        //     'error',
        //     {
        //         overrides: {
        //             if: { after: false }
        //         }
        //     }
        // ],
        // react
        'react/jsx-uses-react': 'error',
        'react/jsx-filename-extension': 'off',
        'react/state-in-constructor': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': [2, 4],
        'react/forbid-prop-types': 'off',
        'prettier/prettier': 'error',
        'import/prefer-default-export': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
    }
};
