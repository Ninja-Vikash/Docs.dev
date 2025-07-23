## Docs.dev - ESlint + Prettier

*Have you ever thought?*<br />
You're working in a team with multiple members.

And You're the head chef! ( I mean Lead 😁 ).

So, Now it is your responsiblity to setup the project's base.<br />
What do you mean by the **base of project**? 🤔

Base is nothing just the consistent structure, which will be followed by the entire team.

i.e., `naming convention`, `tab space`, and most important if any of the rule will not be followed by any one, it should throw error messages on the run time.

***

### `ESlint` + `Prettier`

Assuming, You've built a react application using vite!
```bash
npm create vite@latest
```

> [!caution]\
> Do not proceed, If you are not familiar with `reactjs`.

After initializing!<br />

You need to clean up a bit!
```bash
rm eslint.config.js
```

Then at the very top level of your application create some files as
```bash
touch .editorconfig .eslintignore .eslintrc.cjs .prettierignore prettier.config.mjs
```

#### Use these already written templates for efficiency

`.editorconfig`
```sh
root = true

[*]
charset = utf-8
indent_size = 2
end_of_line = lf
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true
```
___
`.eslintignore`
```sh
# Build directories
build/*
dist/*
public/*
**/out/*
**/.next/*
**/node_modules/*

# src/
**/reportWebVitals.*
**/service-worker.*
**/serviceWorkerRegistration.*
**/setupTests.*

# eslintrc
**/.eslintrc.*

# prettier
**/.prettier.*
**/prettier.config.*

# next
**/next.config.*

# vite
**/vite.config.*

# tailwind
**/postcss.config.*
**/tailwind.config.*

# craco
**/craco.config.*

# misc
**/jsconfig.json
```
___
`.prettierignore`
```sh
# Build directories
build/*
dist/*
public/*
**/out/*
**/.next/*
**/node_modules/*

package-lock.json
jsconfig.json
```
___
`prettier.config.mjs`
```mjs
/**
 * @type {import("prettier").Config}
 * Need to restart IDE when changing configuration
 * Open the command palette (Ctrl + Shift + P) and execute the command > Reload Window.
 */
const config = {
  semi: true,
  tabWidth: 2,
  endOfLine: 'lf',
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'es5',
};

export default config;
```

> [!important]\
> Now its time to talk about bosses of your configuration.

`package.json`
```json
{
  "name": "my-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint \"src/**/*.{js,jsx,ts,tsx}\"",
    "lint:fix": "eslint --fix \"src/**/*.{js,jsx,ts,tsx}\"",
    "fm:check": "prettier --check \"src/**/*.{js,jsx,ts,tsx}\"",
    "fm:fix": "prettier --write \"src/**/*.{js,jsx,ts,tsx}\"",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.30.1",
    "@types/react": "^19.1.8",
    "@types/react-dom": "^19.1.6",
    "@vitejs/plugin-react": "^4.6.0",
    "eslint": "^8.57.0",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-config-prettier": "^9.1.0",
    "eslint-import-resolver-alias": "^1.1.2",
    "eslint-plugin-import": "^2.29.1",
    "eslint-plugin-jsx-a11y": "^6.8.0",
    "eslint-plugin-perfectionist": "^2.11.0",
    "eslint-plugin-prettier": "^5.1.3",
    "eslint-plugin-react": "^7.34.2",
    "eslint-plugin-react-hooks": "^4.6.2",
    "eslint-plugin-unused-imports": "^3.2.0",
    "prettier": "^3.3.2",
    "vite": "^7.0.4",
    "vite-plugin-checker": "^0.6.4"
  }
}
```

Must include the proper `scripts` and `devDependencies`.

___
`vite.config.js`
```js
import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'

// --------------------------------------------------------

export default defineConfig({
  plugins: [
    react(),
    checker({
      eslint: {
        lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"',
      },
      overlay: {
        position: 'tl',
        initialIsOpen: false,
      }
    })
  ],
  resolve: {
    alias: [
      {
        find: /^~(.+)/,
        replacement: path.join(process.cwd(), 'node_modules/$1'),
      },
      {
        find: /^src(.+)/,
        replacement: path.join(process.cwd(), 'src/$1')
      }
    ]
  }
})
```

___

**Final BOSS 😎**
`.eslintrc.cjs`
```cjs
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  plugins: ['perfectionist', 'unused-imports', 'prettier'],
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [['src', './src']],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  /**
   * 0 ~ 'off'
   * 1 ~ 'warn'
   * 2 ~ 'error'
   */
  rules: {
    'no-use-before-define': 0,
    'no-alert': 0,
    camelcase: 0,
    'no-console': 0,
    'no-unused-vars': 0,
    'no-nested-ternary': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'no-restricted-exports': 0,
    'no-promise-executor-return': 0,
    'import/prefer-default-export': 0,
    'prefer-destructuring': [1, { object: true, array: false }],
    // react
    'react/prop-types': 0,
    'react/no-children-prop': 0,
    'react/react-in-jsx-scope': 0,
    'react/no-array-index-key': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'react/function-component-definition': 0,
    'react/jsx-no-duplicate-props': [1, { ignoreCase: false }],
    'react/jsx-no-useless-fragment': [1, { allowExpressions: true }],
    'react/no-unstable-nested-components': [1, { allowAsProps: true }],
    // jsx-a11y
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/control-has-associated-label': 0,
    // unused imports
    'unused-imports/no-unused-imports': 1,
    'unused-imports/no-unused-vars': [
      0,
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    // perfectionist
    'perfectionist/sort-exports': [1, { order: 'asc', type: 'line-length' }],
    'perfectionist/sort-named-imports': [1, { order: 'asc', type: 'line-length' }],
    'perfectionist/sort-named-exports': [1, { order: 'asc', type: 'line-length' }],
    'perfectionist/sort-imports': [
      1,
      {
        order: 'asc',
        type: 'line-length',
        'newlines-between': 'always',
        groups: [
          'style',
          'type',
          ['builtin', 'external'],
          'custom-mui',
          'custom-routes',
          'custom-hooks',
          'custom-utils',
          'internal',
          'custom-components',
          'custom-sections',
          'custom-auth',
          'custom-types',
          ['parent', 'sibling', 'index'],
          ['parent-type', 'sibling-type', 'index-type'],
          'object',
          'unknown',
        ],
        'custom-groups': {
          value: {
            ['custom-mui']: '@mui/**',
            ['custom-auth']: 'src/auth/**',
            ['custom-hooks']: 'src/hooks/**',
            ['custom-utils']: 'src/utils/**',
            ['custom-types']: 'src/types/**',
            ['custom-routes']: 'src/routes/**',
            ['custom-sections']: 'src/sections/**',
            ['custom-components']: 'src/components/**',
          },
        },
        'internal-pattern': ['src/**'],
      },
    ],
  }
}
```

___

Bingo!

**Now Reload your IDE**

*windows*: `ctrl` + `shift` + `P`<br />
*mac*: `cmd` + `shift` + `P`


**Made with 💖 by Ninja Vikash**