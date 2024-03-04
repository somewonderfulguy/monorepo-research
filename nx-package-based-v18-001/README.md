```sh
npx nx dev cyberpunk
npx nx build cyberpunk
npx nx graph
npx nx affected:graph
npx nx affected:build
npx nx add shared --filter sub-application --workspace
npx nx run-many --target=build --all
npx nx run-many --target=build --projects=cyberpunk,shared
```
