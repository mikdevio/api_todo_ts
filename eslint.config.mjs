// @ts-check
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  js.configs.recommended,           // Reglas recomendadas de JavaScript
  ...tseslint.configs.recommended,  // Reglas recomendadas de TypeScript
  {
    // Aplica esta configuración a archivos JS y TS
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    rules: {
      // Aquí puedes añadir o modificar reglas personalizadas más adelante
    },
  }
);

