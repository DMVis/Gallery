<script lang="ts">
  import { LineChart, Scatterplot } from 'dmvis';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { dataStore } from '../stores/dataStore';

  const current_page = $page.params.slug.split('/').pop() || '';

  let data: { x: number; y: number }[] = [];

  // Subscribe to the data store and update `datasetName` and `data` when it changes
  const unsubscribe = dataStore.subscribe((value) => {
    data = value.data;
  });

  onMount(() => {
    return unsubscribe; // Unsubscribe when the component is destroyed
  });
  const width = 640;
  const height = 640;
</script>

<article>
  <section>
    {#if current_page === 'line-chart'}
      <LineChart marginLeft={40} marginBottom={40} {width} {height} {data} />
    {:else if current_page === 'scatterplot'}
      <Scatterplot marginLeft={40} marginBottom={40} {width} {height} {data} />
    {/if}
  </section>
</article>
