import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Je configure le chemin de base pour pointer vers mon dépôt afin de garantir le bon chargement des ressources sur GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
})