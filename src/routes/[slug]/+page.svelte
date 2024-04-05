<script lang="ts">
  import { Card, Heading, A, P } from 'flowbite-svelte';

  import { page } from '$app/stores';
  import Sidebar from '$lib/Sidebar.svelte';
  import { dataStore } from '$lib/stores/dataStore';
  import Visualisation from '$lib/Visualisation.svelte';
  import SidebarVisualisation from '$lib/SidebarVisualisation.svelte';

  const available_vis = [
    'parallel-coordinates',
    'stacked-bar-chart',
    'scatterplot-matrix',
    'tabular'
  ];
  const current_page = $page.params.slug.split('/').pop() || '';
</script>

<main class="grid grid-cols-5">
  {#if available_vis.includes(current_page)}
    <Sidebar>
      <SidebarVisualisation dataset={$dataStore} />
    </Sidebar>
    <article class="col-span-4 h-screen overflow-y-auto">
      <section>
        {#if $dataStore.name !== undefined}
          <svelte:component this={Visualisation} data={$dataStore} />
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
