<script lang="ts">
  import { Card, Heading, A, P } from 'flowbite-svelte';
  import { onDestroy } from 'svelte';
  import { page } from '$app/stores';
  import SidebarVisualisation from '$lib/SidebarVisualisation.svelte';
  import Visualisation from '$lib/Visualisation.svelte';
  import Sidebar from '$lib/Sidebar.svelte';
  import { dataStore, type Data } from '../../stores/dataStore';

  let dataset: Data = { name: '', data: [] };
  const available_vis = ['line-chart', 'scatterplot'];
  const current_page = $page.params.slug.split('/').pop() || '';
  const unsubscribe = dataStore.subscribe((value) => (dataset = value));

  onDestroy(() => {
    return unsubscribe;
  });
</script>

<main class="grid grid-cols-5">
  {#if available_vis.includes(current_page)}
    <Sidebar>
      <SidebarVisualisation {dataset} />
    </Sidebar>
    <article class="col-span-4">
      <section>
        {#if dataset.name !== undefined}
          <svelte:component this={Visualisation} {dataset} />
        {:else}
          <Card class="col-span-5 m-auto">
            <Heading tag="h2">No data</Heading>
            <P>
              This visualisation doesn't have any data. Pick a dataset from the selector on the
              left.
            </P>
          </Card>
        {/if}
      </section>
    </article>
  {:else}
    <Card class="col-span-5 place-self-center">
      <Heading tag="h2">404</Heading>
      <P
        >This visualisation doesn't exist. Go back to the <A href="/">home page</A> and try again</P>
    </Card>
  {/if}
</main>
