# Next.js + Vitest Devlelopment

## 0. Setup

```sh
npx create-next-app --ts
```

## 1. Install vitest and associated packages

```sh
npm i -D vitest @vitejs/plugin-react @testing-library/react @testing-library/user-event jsdom
```

## 2. Setup configs

### Create and edit `vitest.config.ts` in the root

```ts
/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // use `describe, it, test` without importing them
    environment: "jsdom",
    setupFiles: "./tests/setup.ts",
  },
});
```

### edit `tsconfig.json` to use `describe, it, test`

```json
{
  "compilerOptions": {
    // ...
    "types": ["vitest/globals"]
  }
}
```
