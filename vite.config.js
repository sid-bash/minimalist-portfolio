import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration
export default defineConfig({
  plugins: [react({ include: /\.(mdx|js|jsx|ts|tsx)$/ })],
  resolve: {
    extensions: [".js", ".jsx"], // Support both .js and .jsx file extensions
  },
  server: {
    open: true, // Automatically open the browser on server start
  },
  esbuild: {
    loader: "jsx", // Parse .js files as JSX
    include: /\.[jt]sx?$/, // Include .js and .jsx files
    exclude: [/node_modules/], // Exclude node_modules
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx", // Parse .js files as JSX
      },
    },
  },
});
