<script lang="ts">
  import { onDestroy } from 'svelte';
  import { dataStore, datasets } from '../stores/dataStore';
  import { Button, Heading, P } from 'flowbite-svelte';

  // Update the dataStore with the new data
  function selectDataset(newDataSet: { name: string; data: { x: number; y: number }[] }) {
    dataStore.set(newDataSet);
  }

  // Subscribe to datasets store
  let unsubscribe = datasets.subscribe(() => {});

  onDestroy(() => {
    return unsubscribe;
  });
</script>

<section>
  <Heading tag="h3">Data</Heading>
  <P>Here you will be able to pick a dataset</P>
  <div class="flex flex-col">
    {#each [...$datasets] as dataset}
      <Button size="md" pill={true} class="mb-2 mt-2" on:click={() => selectDataset(dataset)}>
        {dataset.name}
      </Button>
    {/each}
  </div>
</section>
