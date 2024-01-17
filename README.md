# ts-exercise-02
create a repo called ts-exercise-02
manually configure for TypeScript (just like ts-exercise-01), with the following changes
tsconfig.json
{
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "target": "ESNext",
    "esModuleInterop": true,
    "noImplicitAny": false,
    "sourceMap": false,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "outDir": "dist",
    "baseUrl": ".",
    "types": ["node"]
  },
  "exclude": ["node_modules", "dist", "build"],
  "include": ["src/**/*.ts"],
  "compileOnSave": false
}
change package.json type to module
eslintrc.json
{
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [".eslintrc.{js,cjs}"],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "no-console": "error"
  },
  "ignorePatterns": ["node_modules", "dist"]
}
add prettierrc.json
{
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true
}
refactor https://github.com/siteminder-grads-2023/12-exercise-01 in TypeScript
imports MUST include .js extension (even though we're doing TypeScript)
add types EVERYWHERE you can think of (I want to see if you can figure out where you should add types on your own)
 (edited) 
:ph-heart:
12

11:55
Not done ... hold on
:ph-heart:
12

New


Johnny Estilles
:spiral_calendar_pad:  12:00 PM
FYI ... I usually add these two scripts to my package.json as well:
    "start": "tsc && node dist/index.js",
    "format": "prettier --ignore-path .gitignore --write \"**/*.+(js|ts|json)\"",
:ph-heart:
12

12:00
And I use this as my .gitignore
# Logs
logs
*.log
npm-debug.log*

# Dependency directories
node_modules/

# TypeScript
*.tsbuildinfo
dist

# NPM
.npm
package-lock.json

# ESLint
.eslintcache

# dotenv environment variable files
.env
.env.development.local
.env.test.local
.env.production.local
.env.local

# MacOS
.DS_Store