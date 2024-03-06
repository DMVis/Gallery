# DMVis-Gallery

Gallery of decision matrix visualizations created with DMVis.

## Useful docs

- [SvelteKit docs](https://kit.svelte.dev/docs).

## Prerequisites

We develop inside Visual Studio Code

- [Visual Studio Code](https://code.visualstudio.com/download)

The recommended extensions for Visual Studio Code can be installed by typing
`@recommended` in the extensions tab. Install all the recmmended workspace
extensions.

We have created a `.editorconfig` file to ensure that all developers use the same
settings for their code editor. This is used by the EditorConfig plugin for
Visual Studio Code.

Also make sure that, when developing, you have the `DMVis` package locally installed
and linked to this project. You can do this by running the following command in the
`DMVis` package:

```bash
npm link ../dmvis
```

## Setting up

You will need to install the following dependencies:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)

We have pinned our node version in `.nvmrc` so you can use `nvm` to install the
correct version of node. If you have `nvm` installed (instructions for
[Linux](https://github.com/nvm-sh/nvm) and
[Windows](https://github.com/coreybutler/nvm-windows)),
you can use the following command to install the correct version of node:

```bash
nvm install
```

Once you have installed the above dependencies, you can install the packages
using the following commands:

```bash
npm install --save-dev husky
npm install
```

## Developing

Start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To build your library:

```bash
npm run package
```

To create a production version of your showcase app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
