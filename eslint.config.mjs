// @ts-check

import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import importAlias from '@dword-design/eslint-plugin-import-alias';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  tseslint.configs.recommendedTypeChecked,
  importAlias.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  }
);
