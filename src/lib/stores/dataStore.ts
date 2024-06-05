import { writable } from 'svelte/store';
import { DataUtils } from 'dmvis';

// Type definitions
export type Row = {
  x: number;
  y: number;
};

export type Data = {
  name: string;
  dataUtil: DataUtils;
  dataUtilId: DataUtils;
};

// Get csv data
const files = ['holidays-20.csv', 'holidays-21.csv', 'holidays-22.csv'];
if (typeof window !== 'undefined') {
  const currentUrl = window.location.origin;
  files.forEach(async (file) => {
    const url = `${currentUrl}/datasets/${file}`;
    const dataUtil = new DataUtils();
    const dataUtilId = new DataUtils(true);
    // Assuming DataUtils has a method like parseFile that accepts a File object
    await dataUtil.parseCSV(url);
    await dataUtilId.parseCSV(url);
    datasets.update((d) => [...d, { name: file, dataUtil, dataUtilId }]);
  });
}

export const dataStore = writable({} as Data);
export const datasets = writable([] as Array<Data>);
