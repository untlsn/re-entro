// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import 'eslint-plugin-only-warn'

export default withNuxt({
  rules: {
    'vue/html-button-has-type': 1,
  },
})
