<script lang="ts">
  import { LineChart, Scatterplot, BarChartHorizontal, BarChartVertical } from 'dmvis';

  import { page } from '$app/stores';
  import { type Data } from '$lib/stores/dataStore';

  export let dataset: Data;
  const current_page = $page.params.slug.split('/').pop() || '';
  const width = 640;
  const height = 640;

  // Update dataset.data for barchart
  $: barData = dataset.data.map((d) => {
    return { label: d.x.toString(), value: d.y };
  });
</script>

<article>
  <section>
    {#if current_page === 'line-chart'}
      <LineChart marginLeft={40} marginBottom={40} {width} {height} data={dataset.data} />
    {:else if current_page === 'scatterplot'}
      <Scatterplot marginLeft={40} marginBottom={40} {width} {height} data={dataset.data} />
    {:else if current_page === 'bar-chart'}
      <BarChartHorizontal
        marginLeft={40}
        marginBottom={40}
        minX={0}
        maxX={8}
        {width}
        {height}
        data={barData} />
      <BarChartVertical
        marginLeft={40}
        marginBottom={40}
        minY={0}
        maxY={8}
        {width}
        {height}
        data={barData} />
    {:else}
      <p>404</p>
    {/if}
  </section>
</article>
