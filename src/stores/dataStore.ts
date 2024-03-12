import { writable } from 'svelte/store';

// Initial dummy data
const dataset = {
  name: 'dataset0',
  data: [
    { x: 0, y: 0 },
    { x: 1, y: 2 },
    { x: 2, y: 4 },
    { x: 3, y: 4 }
  ]
};

export const dataStore = writable(dataset);
