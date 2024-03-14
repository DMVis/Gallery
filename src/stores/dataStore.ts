import { writable } from 'svelte/store';
import * as d3 from 'd3';

// Type definitions
export type Row = {
  x: number;
  y: number;
};

export type Data = {
  name: string;
  data: Array<Row>;
};

// Get csv data
const files = ['dataset1.csv', 'dataset2.csv', 'dataset3.csv'];
if (typeof window !== 'undefined') {
  const currentUrl = window.location.origin;
  files.forEach(async (file) => {
    d3.csv(`${currentUrl}/datasets/${file}`).then((data) => {
      const dataSet = Array<Row>();
      for (let i = 0; i < data.length; i++) {
        dataSet.push({ x: i, y: Number(data[i]['Point']) });
      }
      datasets.update((d) => [...d, { name: file, data: dataSet }]);
    });
  });
}

export const dataStore = writable({} as Data);
export const datasets = writable([] as Array<Data>);
