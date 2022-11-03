module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        babelOptions: {
            presets: ['@babel/preset-react'],
        },
    },
    extends: [
        'react-app',
        'plugin:react/recommended',
        'airbnb',
        'eslint:recommended',
    ],
    plugins: [
        'jsx-a11y',
        'react-hooks',
        'flowtype',
        'import',
    ],
    rules: {
    /* Restrict file extensions that may contain JSX */
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        /* This rule will warn when it encounters a reference to an identifier that has not yet been declared. */
        'no-use-before-define': ['error', { variables: false }],
        /* This rule enforces consistent line breaks inside braces of object literals or destructuring assignments. */
        'object-curly-newline': ['error', { ImportDeclaration: 'never' }],
        /* Enforce consistent usage of destructuring assignment of props, state, and context */
        'react/destructuring-assignment': 0,
        /* Prevent missing props validation in a React component definition */
        'react/prop-types': 0,
        /* Enforce require() on the top-level module scope */
        'global-require': 0,
        indent: ['error', 4],
        /* This rule is aimed to enforce consistent indentation style */
        'react/jsx-indent': ['error', 4],
        /* This rule is aimed to enforce consistent indentation style */
        'react/jsx-indent-props': ['error', 4],
        /* Enforces that there is no spreading for any JSX attribute.
         This enhances readability of code by being more explicit about what props are received by the component. */
        'react/jsx-props-no-spreading': 'off',
        'max-len': ['error', { code: 120 }],
        /* Enforces the rule of https://reactjs.org/docs/hooks-rules.html */
        'react-hooks/rules-of-hooks': 'error',
        /* This is a new ESLint rule that verifies the list of dependencies for Hooks like useEffect and similar,
         protecting against the stale closure pitfalls. For most cases it has an autofix. */
        'react-hooks/exhaustive-deps': 'warn',
        /* This rules enforces an explicit type attribute for all the button elements
         and checks that its value is valid per spec */
        'react/button-has-type': 0,
        'react/state-in-constructor': 0,
        'react/jsx-fragments': 0,
        'guard-for-in': 0,
        'no-underscore-dangle': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'react/function-component-definition': [1, {
            namedComponents: 'arrow-function',
        }],
    },
};
