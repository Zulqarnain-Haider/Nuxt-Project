// @ts-ignore
export default defineAppConfig({
  ui: {
    primary: 'none',   // disable nuxt ui primary color (let tailwind handle)
    gray: 'neutral',
    strategy: 'merge', // ensures ui and tailwind can merge, not conflict
  }
})
