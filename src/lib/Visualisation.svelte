<script lang="ts">
  import { LineChart, Scatterplot, HorizontalBarChart, VerticalBarChart } from 'dmvis';
  import { page } from '$app/stores';
  import { type Data } from '../stores/dataStore';

  export let dataset: Data;
  const current_page = $page.params.slug.split('/').pop() || '';
  const width = 640;
  const height = 640;

  // Hardcoding data for bar chart
  const barData: { label: string; value: number }[] = [
    { label: 'a', value: 0 },
    { label: 'b', value: 50 },
    { label: 'c', value: 100 },
    { label: 'd', value: 200 },
    { label: 'e', value: 400 },
    { label: 'f', value: 450 },
    { label: 'g', value: 500 }
  ];
</script>

<article>
  <section>
    {#if current_page === 'line-chart'}
      <LineChart marginLeft={40} marginBottom={40} {width} {height} data={dataset.data} />
    {:else if current_page === 'scatterplot'}
      <Scatterplot marginLeft={40} marginBottom={40} {width} {height} data={dataset.data} />
    {:else if current_page === 'bar-chart'}
      <HorizontalBarChart
        marginLeft={40}
        marginBottom={40}
        minX={0}
        maxX={500}
        {width}
        {height}
        {barData} />
      <VerticalBarChart
        marginLeft={40}
        marginBottom={40}
        minY={0}
        maxY={500}
        {width}
        {height}
        {barData} />
    {:else}
      <p>404</p>
    {/if}
  </section>
</article>
