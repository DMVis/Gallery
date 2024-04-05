<script lang="ts">
  import { Card } from 'flowbite-svelte';
  import { fade } from 'svelte/transition';

  import { searchStore } from '$lib/stores/searchStore';

  const visualisations = [
    {
      title: 'Parallel Coordinates',
      src: '/parallel-coordinates',
      description:
        'Parallel coordinates is a common way of visualising high-dimensional geometry and analysing multivariate data.'
    },
    {
      title: 'Stacked Bar Chart',
      src: '/stacked-bar-chart',
      description:
        'A stacked bar chart is a type of bar chart that is used to display and compare the parts of a whole.'
    },
    {
      title: 'Scatterplot Matrix',
      src: '/scatterplot-matrix',
      description:
        'A scatterplot matrix is a grid of scatterplots that shows the relationships between pairs of variables.'
    },
    {
      title: 'Tabular Visualisation',
      src: '/tabular',
      description:
        'A tabular visualisation is a table that displays data in rows and columns. It is useful for comparing values.'
    }
  ];

  // Reactive statement to filter visualisations based on the search term
  let filteredVisualisations = visualisations;
  $: $searchStore,
    (filteredVisualisations = visualisations.filter(
      (vis) =>
        vis.title.toLowerCase().includes($searchStore.toLowerCase()) ||
        vis.description.toLowerCase().includes($searchStore.toLowerCase())
    ));
</script>

<article class="w-100 col-span-4 m-4">
  <section class="grid grid-cols-3 gap-4">
    {#each filteredVisualisations as vis}
      <div in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>
        <Card href={vis.src} class="place-self-center">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {vis.title}
          </h5>
          <p class="font-normal leading-tight text-gray-700 dark:text-gray-400">
            {vis.description}
          </p>
        </Card>
      </div>
    {/each}
  </section>
</article>
