module.exports = {
    "extends": ["eslint:recommended"],
    "rules": {
        "semi": ["error", "always"],
        "no-console": [0],
        "no-extra-parens": ["error", "all"],
        "valid-jsdoc": ["error"],
        "complexity": ["error", 10],
        "consistent-return": "error",
        "default-case": "error",
        "eqeqeq": "error",
        "no-use-before-define": "error",
        "max-depth": ["error", 5],
        "no-duplicate-imports": "error"
    },
    "env": {
        "node": true,
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 8,
    }
}
