import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        it_portfolio: './subsites/it_portfolio/index.html',
        miniprojects: './subsites/miniprojects/index.html',
        snowingscene: './subsites/miniprojects/snowingscene/index.html',
        portfoliodev: './subsites/portfoliodev/index.html',
        sql_project: './subsites/it_portfolio/SQL-database/index.html',
        cloud_storage_project: './subsites/it_portfolio/raspberry-pi-cloud-storage/index.html',
        professional_statement: './subsites/professional_statement/index.html',
      },
    },
  },
});