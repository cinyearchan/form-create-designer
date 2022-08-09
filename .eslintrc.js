const { version } = require("vue/package.json")

const isVue2 = version.split(".")[0] === "2"

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    commonjs: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    parser: "babel-eslint"
  },
  plugins: ["vue", "prettier"],
  rules: {
    // indent: ["error", 2],
    // semi: ["error"],
    // quotes: ["error", "single"],
    "block-spacing": "error",
    "no-unused-vars": "warn",
    "vue/no-v-for-template-key": isVue2 ? "error" : "off",
    "vue/no-v-for-template-key-on-child": isVue2 ? "off" : "error",
    "vue/no-v-model-argument": isVue2 ? "off" : "error",
    "vue/no-deprecated-slot-attribute": isVue2 ? "off" : "error",
    "vue/multi-word-component-names": isVue2 ? "off" : "error",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "object-curly-spacing": "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": "error"
  }
}
