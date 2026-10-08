import { defineConfig } from 'vite'

const jsx = {
  runtime: 'classic',
  pragma: 'h',
  pragmaFrag: 'Fragment',
  development: false,
}

export default defineConfig({
  oxc: {
    jsx,
    jsxInject: "import { h, Fragment } from 'woodjsx'",
  },
  optimizeDeps: {
    rolldownOptions: { transform: { jsx } },
  },
})
