<script lang="ts">
  import SidebarVisualisation from '$lib/SidebarVisualisation.svelte';
  import Visualisation from '$lib/Visualisation.svelte';
  import Sidebar from '$lib/Sidebar.svelte';
  import { Card, Heading, A, P } from 'flowbite-svelte';
  import { page } from '$app/stores';

  const available_vis = ['line-chart'];
  const current_page = $page.params.slug.split('/').pop() || '';
</script>

<main class="grid grid-cols-5">
  {#if available_vis.includes(current_page)}
    <Sidebar>
      <SidebarVisualisation />
    </Sidebar>
    <article class="col-span-4">
      <section>
        <svelte:component this={Visualisation} />
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
