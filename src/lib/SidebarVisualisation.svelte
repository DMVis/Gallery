<script lang="ts">
  import { Button, Search, Radio, Checkbox } from 'flowbite-svelte';
  import { fade } from 'svelte/transition';

  import { dataStore, showFilter, scrollable, datasets, type Data } from '$lib/stores/dataStore';

  // Update the dataStore with the new data
  $: if (selectedDataset !== '') {
    $dataStore = $datasets.find((dataset) => dataset.name === selectedDataset)!;
  } else {
    $dataStore = {} as Data;
  }

  // Only show datasets dat are being searched
  $: visibleDatasets = $datasets.filter((dataset) => dataset.name.includes(search));

  let search = '';
  let selectedDataset = '';
</script>

<article>
  <div class="flex flex-col">
    <Search placeholder="Search datasets" size="md" bind:value={search} />
    <ul
      class=" mt-2 max-h-48 w-48 w-full divide-y divide-gray-200 overflow-y-auto rounded-lg border border-gray-200 bg-white dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800">
      {#each visibleDatasets as dataset}
        <li in:fade={{ duration: 200 }} out:fade={{ duration: 200 }}>
          <Radio class="cursor-pointer p-3" bind:group={selectedDataset} value={dataset.name}
            >{dataset.name}</Radio>
        </li>
      {/each}
    </ul>

    {#if selectedDataset !== ''}
      <Button
        on:click={() => {
          selectedDataset = '';
        }}
        class="mt-2">Reset</Button>
    {/if}

    <div class="mb-0 mt-5">
      <Checkbox bind:checked={$showFilter}>Show Filter</Checkbox>
      <Checkbox bind:checked={$scrollable}>Make visualisation scrollable</Checkbox>
    </div>
  </div>
</article>
