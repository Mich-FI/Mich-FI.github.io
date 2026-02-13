import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        it_projects: './subsites/it_projects/index.html',
        minihtmlcssprojects: './subsites/minihtmlcssprojects/index.html',
        portfoliodev: './subsites/portfoliodev/index.html',
        tech_projects: './subsites/tech_projects/index.html',
        sql_project: './subsites/it_projects/SQL-database/index.html',
        professional_statement: './subsites/index.html',
      },
    },
  },
});