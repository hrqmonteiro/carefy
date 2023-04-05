import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next']
  },
  theme: {
    extend: {
      backgroundColor: {
        carefy: '#0073d8'
      },
      borderColor: {
        carefy: '#0073d8'
      },
      textColor: {
        carefy: '#0073d8'
      }
    }
  }
})
