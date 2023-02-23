# Development Boilerplate

This repo is meant to used for boilerplating a `React` app with help of `Vite` and uses
`Typescript`,`Vitest`,`Tailwind`,`React-Router-DOM` and `Firebase` for authentication. This repo
also contains `eslint` and `prettier` configured alongside `github` actions for CI.

## Configuration

You can configure the firebase config from `src/config/firebase.ts`. You can change the tailwind
config and theming from `tailwind.config.cjs`. You can also change bundler/compiler/test config from
`vite.config.ts`. Please refer to vite docs [here](https://vitejs.dev/config/)

## Running on development

```bash
  yarn dev
```

## Building for production

```bash
  yarn build
```

## Preview

```bash
  yarn preview
```

## Running tests

```bash
  yarn test
```

## Checking for lint errors

```bash
  yarn lint
```

## Checking for lint errors and fixing them

```bash
  yarn lint:fix
```

## Checking for formatting errors

```bash
  yarn format
```

## Checking for formatting errors and fixing them

```bash
  yarn format:fix
```
