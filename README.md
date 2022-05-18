# Turborepo Design System starter

This is an official React design system starter powered by Turborepo.

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `docs`: A placeholder documentation site powered by [Next.js](https://nextjs.org)
- `@pear-ui/core`: core React components
- `@pear-ui/utils`: shared React utilities
- `@pear-ui/tsconfig`: shared `tsconfig.json`s used throughout the monorepo
- `eslint-config-hazy`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Using this example

We do not have a starter yet in `create-turbo` for this quite yet. If you want to use this in the interim, you run the following command:

```sh
npx degit vercel/turborepo/examples/design-system design-system
cd design-system
yarn install
git init . && git add . && git commit -m "Init"
```

### Changing the npm organization scope

The npm organization scope for this design system starter is `@pear-ui`. To change this, it's a bit manual at the moment, but you'll need to do the following:

- Rename folders in `packages/*` to replace `hazy` with your desired scope
- Search and replace `hazy` with your desired scope
- Re-run `yarn install`

### Publishing packages

#### npm

If you want to publish package to the public npm registry and make them publicly available, this is already setup for you.

To publish packages to a private npm organization scope, **remove** the following from each of the `package.json`'s

```diff
- "publishConfig": {
-  "access": "public"
- },
```

#### GitHub Package Registry

See [Working with the npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#publishing-a-package-using-publishconfig-in-the-packagejson-file)
