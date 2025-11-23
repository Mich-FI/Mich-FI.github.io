import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        cybersec_projects: './subsites/cybersec_projects/index.html',
        minihtmlcssprojects: './subsites/minihtmlcssprojects/index.html',
        portfoliodev: './subsites/portfoliodev/index.html',
        tech_projects: './subsites/tech_projects/index.html',
      },
    },
  },
});