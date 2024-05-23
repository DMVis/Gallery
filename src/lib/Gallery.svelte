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

<article class="w-100 col-span-4 m-4">
  <section class="grid w-full grid-cols-3 gap-2">
    {#each filteredVisualisations as vis}
      <div class="w-full" in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>
        <Card
          img={vis.img ? vis.img : ''}
          href={vis.src}
          horizontal={vis.img ? true : false}
          size="md"
          class="w-full">
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
