import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Je maintiens le chemin de base pour GitHub Pages et j'ajoute une règle d'exclusion.
// L'ignorance du dossier .vs empêche les crashs liés aux fichiers verrouillés par l'éditeur.
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  server: {
    watch: {
      ignored: ['**/.vs/**']
    }
  }
})