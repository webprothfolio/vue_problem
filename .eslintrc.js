module.exports = {
  // ...
  extends: [
    // '@vue/eslint-config-prettier',
    // ...
    'eslint:recommended',
    // ...
    'plugin:vue/vue3-recommended',
    // ...
    "prettier"
    // Make sure "prettier" is the last element in this list.
  ],
  // ...
  "rules": {
    "vue/attributes-order": "off"
  }
}
