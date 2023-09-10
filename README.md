# Electron backend with Typescript + Svelte Typescript with Vite
All in one repo with debuggers for backend and frontend set for VS Code 🔥

> As of 2023, Svelte debug capabilities are really poor 😢

## Scripts
### *npm run start*
Uses `concurrently` to build and run both Electron (backend) and Svelte (frontend) in watch mode
### *npm run test*
Uses `playwright` to test Electron rendering Svelte, so it's triggered calling the backend
### *npm run test-ui*
Uses `playwright` [in watch mode](https://playwright.dev/docs/test-ui-mode)
### *npm run build*
Uses `electron-forge` to generate both portable binaries and setup installs. The output will be inside `./dist`