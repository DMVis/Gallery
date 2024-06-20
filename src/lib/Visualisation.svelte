<script lang="ts">
  import {
    ParallelCoordinates,
    StackedBarChart,
    ScatterplotMatrix,
    TabularVisualisation,
    ValueChart,
    LineUp
  } from '@dmvis/dmvis';

  import { page } from '$app/stores';
  import { showFilter, scrollable, type Data } from '$lib/stores/dataStore';

  // Variables
  export let data: Data;

  // Reactive statements
  $: current_page = $page.params.slug.split('/').pop() || '';
</script>

<article id="visualisation" class="h-full max-h-full w-full rounded bg-white dark:bg-[#f3f4f6]">
  <section class="h-full w-full">
    {#key data || scrollable}
      {#if current_page === 'parallel-coordinates'}
        <ParallelCoordinates
          marginLeft={200}
          marginTop={40}
          marginRight={50}
          dataUtil={data.dataUtil}
          isScrollable={$scrollable}
          showFilter={$showFilter} />
      {:else if current_page === 'stacked-bar-chart'}
        <StackedBarChart
          marginLeft={200}
          dataUtil={data.dataUtil}
          isScrollable={$scrollable}
          showFilter={$showFilter} />
      {:else if current_page === 'scatterplot-matrix'}
        <ScatterplotMatrix
          dataUtil={data.dataUtil}
          pointOpacity={0.3}
          isScrollable={$scrollable}
          showFilter={$showFilter} />
      {:else if current_page === 'tabular'}
        <TabularVisualisation
          dataUtil={data.dataUtil}
          isScrollable={$scrollable}
          showFilter={$showFilter} />
      {:else if current_page === 'value-chart'}
        <ValueChart
          dataUtil={data.dataUtil}
          width={1500}
          height={1000}
          isScrollable={$scrollable}
          showFilter={$showFilter} />
      {:else if current_page === 'line-up'}
        <LineUp dataUtil={data.dataUtilId} isScrollable={$scrollable} showFilter={$showFilter} />
      {:else}
        <p>404</p>
      {/if}
    {/key}
  </section>
</article>
