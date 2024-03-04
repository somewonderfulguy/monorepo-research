```sh
# pnpm --filter [name in package.json] [script]
pnpm --filter cyberpunk dev
# -r for recursive
pnpm run -r build
pnpm run --parallel -r build
pnpm add shared --filter sub-application --workspace
```
