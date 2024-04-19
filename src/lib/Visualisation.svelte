<script lang="ts">
  import {
    ParallelCoordinates,
    StackedBarChart,
    ScatterplotMatrix,
    TabularVisualisation
  } from 'dmvis';

  import { page } from '$app/stores';
  import { type Data } from '$lib/stores/dataStore';

  export let data: Data;
  const current_page = $page.params.slug.split('/').pop() || '';
</script>

<article>
  <section>
    {#key data}
      {#if current_page === 'parallel-coordinates'}
        <ParallelCoordinates
          marginLeft={100}
          marginTop={40}
          marginRight={50}
          dataUtil={data.dataUtil} />
      {:else if current_page === 'stacked-bar-chart'}
        <StackedBarChart marginLeft={100} dataUtil={data.dataUtil} />
      {:else if current_page === 'scatterplot-matrix'}
        <ScatterplotMatrix dataUtil={data.dataUtil} pointOpacity={0.3} />
      {:else if current_page === 'tabular'}
        <TabularVisualisation dataUtil={data.dataUtil} />
      {:else}
        <p>404</p>
      {/if}
    {/key}
  </section>
</article>
