module.exports = {
    'env': {
        'browser': true,
        'es6': true,
    },
    'extends': [
        // Базовый набор правил eslint
        "eslint:recommended",
        // Отключаем правила из базового набора
        "plugin:@typescript-eslint/eslint-recommended",
        // Базовые правила для TypeScript
        "plugin:@typescript-eslint/recommended",
        // Правила TS, требующие инфо о типах
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        // Движку нужен проект TS для правил с типами
        "project": "tsconfig.json",
        "tsconfigRootDir": ".",
    },
    // Плагин с наборами правил для TypeScript
    "plugins": ["@typescript-eslint"],
    'rules': {
        // mine
        "indent": ["error", 4, {SwitchCase: 1}],
        "import/prefer-default-export": "off",
        "no-console": "off",
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/order': 'off',
        'no-unused-vars': ['error', {'args': 'none'}],
        'padded-blocks': 'off',
        'semi': [2, "always"],
        'comma-dangle': ["error", {
            "functions": "never",
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "exports": "always-multiline",
            "imports": "always-multiline",
        }],
        'object-curly-newline': "error",
        'object-property-newline': ["error", { "allowAllPropertiesOnSameLine": true }],
        'quotes': ["error", "single", { "avoidEscape": true }],
        'arrow-parens': ['error', 'as-needed'],
        'dot-location': ["error", "property"],
        'curly': "error",
        'brace-style': "error",
        'function-call-argument-newline': ["error", "consistent"],
        'function-paren-newline': ["error", "multiline-arguments"],
        'no-duplicate-imports': "error",
        'array-element-newline': ["error", "consistent"],


        // Ya-Market copy
        'react/prop-types': 'off',
        'react/display-name': 'off',

        'array-callback-return': 'error',
        'class-methods-use-this': 'error',
        'consistent-return': 'error',
        'default-case': 'error',
        'eqeqeq': 'error',
        'guard-for-in': 'error',
        'no-case-declarations': 'error',
        'no-else-return': 'error',
        'no-loop-func': 'error',
        'no-param-reassign': 'error',
        'no-return-assign': 'error',
        'no-void': 'error',
        'radix': 'error',
        'no-cond-assign': 'error',
        'no-prototype-builtins': 'error',
        'no-template-curly-in-string': 'error',
        'global-require': 'error',
        'no-path-concat': 'error',
        'camelcase': 'error',
        'new-cap': 'error',
        'no-bitwise': 'error',
        'no-continue': 'error',
        'no-lonely-if': 'error',
        'no-mixed-operators': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-tabs': 'error',
        'no-unneeded-ternary': 'error',
        'no-shadow': 'error',
        'no-shadow-restricted-names': 'error',
        'no-undef-init': 'error',
        'no-use-before-define': 'error',
        'arrow-body-style': 'error',
        'constructor-super': 'error',
        'no-confusing-arrow': 'error',
        'no-const-assign': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-numeric-literals': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'symbol-description': 'error',
        'template-curly-spacing': 'error',
    },
};
