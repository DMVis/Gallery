# DMVis-Gallery

Gallery of decision matrix visualisations created with DMVis.

## Project context

The Gallery for the DMVis framework is designed to be flexible and extensible, allowing developers to create a wide range of visualisations to suit their needs. DMVis is built using [Svelte](https://svelte.dev/) and [D3.js](https://d3js.org/), making it easy to integrate with existing web applications.

This application was written for the [Softwareproject](https://softwareprojecten.sites.uu.nl/) course at [Utrecht University](https://www.uu.nl/). The goal of the course is to develop a software application for a real-world client. The client for this project is [Evanthia Dimara](https://www.uu.nl/staff/EDimara/0), an Assistant Professor and a researcher in Information Visualization at the [Visualization and Graphics Group (VIG)](https://www.uu.nl/en/research/interaction/visualization-and-graphics/people) at Utrecht University.

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
and stored in the same parent directory as `DMVis-Gallery`. This is because the
`DMVis-Gallery` package is dependent on the `DMVis` package. You can install the
`DMVis` package by running the following command in the terminal inside of the
`DMVis` directory:

```bash
npm run build
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
