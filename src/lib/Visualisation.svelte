<script lang="ts">
  import { LineChart, Scatterplot } from 'dmvis';
  import { page } from '$app/stores';
  import { type Data } from '../stores/dataStore';

  export let dataset: Data;
  const current_page = $page.params.slug.split('/').pop() || '';
  const width = 640;
  const height = 640;
</script>

<article>
  <section>
    {#if current_page === 'line-chart'}
      <LineChart marginLeft={40} marginBottom={40} {width} {height} data={dataset.data} />
    {:else if current_page === 'scatterplot'}
      <Scatterplot marginLeft={40} marginBottom={40} {width} {height} data={dataset.data} />
    {/if}
  </section>
</article>
