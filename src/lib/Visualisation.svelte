<script lang="ts">
  import {
    ParallelCoordinates,
    StackedBarChart,
    ScatterplotMatrix,
    TabularVisualisation,
    ValueChart,
    LineUp
  } from 'dmvis';

  import { page } from '$app/stores';
  import { type Data } from '$lib/stores/dataStore';

  export let data: Data;
  $: current_page = $page.params.slug.split('/').pop() || '';
</script>

<article class="h-full max-h-full w-full rounded bg-white dark:bg-[#f3f4f6]">
  <section class="h-full w-full">
    {#key data}
      {#if current_page === 'parallel-coordinates'}
        <ParallelCoordinates
          marginLeft={100}
          marginTop={40}
          marginRight={50}
          dataUtil={data.dataUtil}
          isScrollable={true} />
      {:else if current_page === 'stacked-bar-chart'}
        <StackedBarChart marginLeft={100} dataUtil={data.dataUtil} isScrollable={true} />
      {:else if current_page === 'scatterplot-matrix'}
        <ScatterplotMatrix dataUtil={data.dataUtil} pointOpacity={0.3} isScrollable={true} />
      {:else if current_page === 'tabular'}
        <TabularVisualisation dataUtil={data.dataUtil} isScrollable={true} showFilter={true} />
      {:else if current_page === 'value-chart'}
        <ValueChart dataUtil={data.dataUtil} width={1500} height={1000} isScrollable={true} />
      {:else if current_page === 'line-up'}
        <LineUp dataUtil={data.dataUtilId} isScrollable={true} />
      {:else}
        <p>404</p>
      {/if}
    {/key}
  </section>
</article>
