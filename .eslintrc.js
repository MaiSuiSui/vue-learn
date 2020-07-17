module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "parser": 'babel-eslint',
        "ecmaVersion": 2018,
        "sourceType": "module",
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "semi": 2,
        "no-console":0,
        "no-eval":0,
        "no-multi-spaces":0
    }
};