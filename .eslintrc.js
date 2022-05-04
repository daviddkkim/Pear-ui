module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-hazy`
  extends: ["hazy"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
