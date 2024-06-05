import ValueChart from '$lib/assets/valuechart.png';
import TabularVisualisation from '$lib/assets/tabular.png';

interface Visualisation {
  title: string;
  src: string;
  description: string;
  img?: string;
}

const visualisations = [
  {
    title: 'Parallel Coordinates',
    src: '/parallel-coordinates',
    description:
      'Parallel coordinates is a common way of visualising high-dimensional geometry and analysing multivariate data.',
    img: 'https://upload.wikimedia.org/wikipedia/en/4/4a/ParCorFisherIris.png'
  },
  {
    title: 'Stacked Bar Chart',
    src: '/stacked-bar-chart',
    description:
      'A stacked bar chart is a type of bar chart that is used to display and compare the parts of a whole.',
    img: 'https://www.jaspersoft.com/content/dam/jaspersoft/images/graphics/infographics/stacked-chart-example.svg'
  },
  {
    title: 'Scatterplot Matrix',
    src: '/scatterplot-matrix',
    description:
      'A scatterplot matrix is a grid of scatterplots that shows the relationships between pairs of variables.',
    img: 'https://seaborn.pydata.org/_images/scatterplot_matrix.png'
  },
  {
    title: 'Tabular Visualisation',
    src: '/tabular',
    description:
      'A tabular visualisation is a table that displays data in rows and columns. It is useful for comparing values.',
    img: TabularVisualisation
  },
  {
    title: 'ValueChart',
    src: '/value-chart',
    description:
      'A ValueChart is a combination of both invidivual and stacked bars to compare data and the weight each attributes hold.',
    img: ValueChart
  },
  {
    title: 'LineUp',
    src: '/line-up',
    description:
      'LineUp is a visualisation used to rank and compare rows of data on many attributes.',
    img: 'https://user-images.githubusercontent.com/4129778/48187839-898c0d00-e33c-11e8-9d4a-360bc35741f4.png'
  }
];

export function getVisualisations(): Visualisation[] {
  return visualisations;
}
