# Project-template

A template for an easy start on new projects.

## Installing dependencies

### Style frameworks

#### Bootstrap

```md
npm i bootstrap
```

#### SCSS

```md
npm i scss
```

#### SASS

```md
npm i sass
```

### Dev environment dependencies

Here are all the dependencies you should install for each project to create a good working environment for your project.

#### jsDocs

```md
npm i jsdoc
```

#### es-lint

Installing:

```md
npm install eslint --save-dev
```

Setting up:

```md
npx eslint --init
```

#### Prettier

```md
npm install --save-dev prettier
```

#### Creating pre-commit hooks

```md
npx mrm@2 lint-staged
```

Configure package.json with this after running the command over

```json
"lint-staged": {
  "*.js": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.html": [
    "prettier --write"
  ],
  "*.scss": [
    "prettier --write"
  ]
}
```

#### Jest

```md
npm i -D jest@29.2.0
```

Configure the environment for Jest

```md
npx eslint --init
```

Setting up Jest plugin

```md
npm i -D eslint-plugin-jest
```

Setting up babel to work with Jest

```md
npm -D install @babel/core@7.19.3 @babel/preset-env@7.19.4
```

#### Cypress for end-to-end testing

```md
npm install cypress --save-dev
```

Setting up cypress plugin for eslint

```md
npm i -D cypress@10.7.0 eslint-plugin-cypress@2.12.1
```
