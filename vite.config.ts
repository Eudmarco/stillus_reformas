import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Define o diretório raiz do projeto para a resolução de alias
const projectRootDir = path.resolve(__dirname);

export default defineConfig(({ mode }) => {
    // Carrega variáveis de ambiente (necessário para API Keys, etc.)
    const env = loadEnv(mode, projectRootDir, '');
    
    return {
      // *** CORREÇÃO CRÍTICA: Base ajustada para o nome do repositório! ***
      // Se não houver domínio personalizado, a base deve ser: /<NOME_DO_REPOSITORIO>/
      base: '/stillus_reformas/', 
      // ----------------------------------------------------------------------
      
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          // Mantém seu alias configurado
          '@': path.resolve(projectRootDir, '.'),
        }
      }
    };
});
