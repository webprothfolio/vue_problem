module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    // "prettier",
    // "plugin:prettier/recommended",
  ],
  plugins: [],
  // add your custom rules
  rules: {
    "no-console": 0,
    "vue/no-v-html": 0,
    "vue/script-setup-uses-vars": 0,
  },
};
