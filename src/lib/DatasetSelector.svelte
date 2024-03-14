<script lang="ts">
  import { Button, Heading, Dropdown, DropdownItem } from 'flowbite-svelte';
  import { ChevronDownSolid } from 'flowbite-svelte-icons';
  import { onDestroy } from 'svelte';

  import { dataStore, datasets } from '../stores/dataStore';

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
  <div class="flex flex-col">
    <Button class="mt-4"
      >Pick dataset<ChevronDownSolid class="ms-2 h-3 w-3 text-white dark:text-white" /></Button>
    <Dropdown>
      {#each [...$datasets] as dataset}
        <DropdownItem on:click={() => selectDataset(dataset)}>
          {dataset.name}
        </DropdownItem>
      {/each}
    </Dropdown>
  </div>
</section>
