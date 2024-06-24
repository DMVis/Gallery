<div align="center">

<h1>DMVis Gallery</h1>

[Documentation](https://dmvis-docs.netlify.app/) • [Gallery website](https://dmvis.netlify.app/) • [DMVis](https://github.com/DMVis/DMVis)

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/dmvis/gallery/tests.yaml)
![GitHub License](https://img.shields.io/github/license/dmvis/dmvis)

Gallery of decision matrix visualisations created with [DMVis](https://github.com/DMVis/DMVis).

</div>

## Project context

The Gallery for the DMVis framework is designed to be flexible and extensible, allowing developers to create a wide range of visualisations to suit their needs. DMVis is built using [Svelte](https://svelte.dev/) and [D3.js](https://d3js.org/), making it easy to integrate with existing web applications.

This application was written for the [Softwareproject](https://softwareprojecten.sites.uu.nl/) course at [Utrecht University](https://www.uu.nl/). The goal of the course is to develop a software application for a real-world client. The client for this project is [Evanthia Dimara](https://www.uu.nl/staff/EDimara/0), an Assistant Professor and a researcher in Information Visualization at the [Visualization and Graphics Group (VIG)](https://www.uu.nl/en/research/interaction/visualization-and-graphics/people) at Utrecht University.

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
