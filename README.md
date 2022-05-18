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


### publishing
This repo publishes using changeset: https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md

Once you decide you want to do a release, you can run
```
yarn changeset version
```

and then

```
npx changeset publish
```

### local development
npm link in the package repo (for example, in pear-ui/core)
npm link @pear-ui/core in the product repo

#### GitHub Package Registry

See [Working with the npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#publishing-a-package-using-publishconfig-in-the-packagejson-file)
