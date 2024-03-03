import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    exclude: ['**/node_modules/**', '**/lib/**'],
    coverage: {
      exclude: [
        '**/node_modules/**',
        '**/lib/**',
        '**/.eslintrc.js',
        '**/src/interfaces/**',
        '**/src/types/**',
      ],
      provider: 'v8',
      reporter: ['text-summary', 'html', 'lcov'],
    },
  },
});
