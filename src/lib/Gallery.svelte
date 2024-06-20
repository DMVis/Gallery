<script lang="ts">
  import { Card } from 'flowbite-svelte';
  import { fade } from 'svelte/transition';

  import { searchStore } from '$lib/stores/searchStore';
  import { getVisualisations } from '$lib/visualisationMapper';

  let visualisations = getVisualisations();

  // Reactive statement to filter visualisations based on the search term
  let filteredVisualisations = visualisations;
  $: $searchStore,
    (filteredVisualisations = visualisations.filter(
      (vis) =>
        vis.title.toLowerCase().includes($searchStore.toLowerCase()) ||
        vis.description.toLowerCase().includes($searchStore.toLowerCase())
    ));
</script>

<article class="w-100 overflow-y col-span-4 m-4">
  <section class="grid w-full">
    {#each filteredVisualisations as vis}
      <div in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>
        <Card img={vis.img ? vis.img : ''} href={vis.src} class="visualisation-card">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {vis.title}
          </h5>
          <p class="font-normal leading-tight text-gray-700 dark:text-gray-400">
            {vis.description}
          </p>
        </Card>
      </div>
    {/each}
  </section>
</article>

<style>
  :global(.visualisation-card > img) {
    color: red !important;
    height: 300px;
    width: 300px;
    margin: 0 auto;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .grid {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      grid-auto-rows: 1fr;
    }

    :global(.grid > div) {
      margin: auto;
      margin-bottom: 20px;
    }
  }

  @media (min-width: 768px) {
    .grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-auto-rows: 1fr;
      gap: 0.5rem;
    }

    :global(.grid > div) {
      width: 100%;
    }

    :global(.visualisation-card) {
      height: 100%;
      margin: auto;
    }
  }
</style>
