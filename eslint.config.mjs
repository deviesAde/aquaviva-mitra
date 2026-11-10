import js from "@eslint/js";

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "node_modules/**",
      "next-env.d.ts",
      "scripts/**",
    ],
  },
  js.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "off", // TypeScript handles global types
    },
  },
];

export default eslintConfig;
