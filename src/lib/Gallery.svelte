<script lang="ts">
  import { Card } from 'flowbite-svelte';
  import { fade } from 'svelte/transition';

  import { searchStore } from '$lib/stores/searchStore';

  const visualisations = [
    {
      title: 'Line Chart',
      src: '/line-chart',
      description:
        "A line chart is a type of chart which displays information as a series of data points called 'markers' connected by straight line segments."
    },
    {
      title: 'Bar Chart',
      src: '/bar-chart',
      description:
        'A bar chart or bar visualisation is a chart or visualisation that presents categorical data with rectangular bars with heights or lengths proportional to the values that they represent.'
    },
    {
      title: 'Scatterplot',
      src: '/scatterplot',
      description:
        'A scatter plot is a type of plot or mathematical diagram using Cartesian coordinates to display values for typically two variables for a set of data.'
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
