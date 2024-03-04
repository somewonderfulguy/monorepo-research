# Monorepo Research

Trying different monorepo tools to achieve the same goal (application's structure).

## Required structure and dependencies

```
/apps
  /cyberpunk
  /design-system
  /sub-application
packages
  /shared
```

`/cyberpunk` - root application\
dependencies: `/design-system`, `/sub-application`, `/shared`

`/design-system` - shared components with Storybook\
dependencies: `/shared`

`/sub-application` - another application (can be build and deployed separately & used by other applications)\
dependencies: `/design-system`, `/shared`

`/shared` - shared code\
dependencies: none

## Other requirements

- Shared types
- Shared ESLint configuration
- Shared Prettier configuration
- Shared .editorconfig configuration
- Shared tsconfig.json configuration
- Shared Husky configuration (lint-staged, not necessarily)
- Storybook with plugins (1 external, 1 internal)

## Tools to try

Mandatory:

- [pnpm](https://pnpm.io/)
- [nx](https://nx.dev/)
- [turborepo](https://turborepo.com/)

Optional:

- [lerna](https://lerna.js.org/)
- [rush](https://rushjs.io/)
