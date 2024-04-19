<script lang="ts">
  import { DataUtils } from 'dmvis';
  import { ChevronDownSolid } from 'flowbite-svelte-icons';
  import {
    Button,
    Heading,
    Dropdown,
    DropdownItem,
    Fileupload,
    Label,
    Span
  } from 'flowbite-svelte';

  import { dataStore, datasets, type Data } from '$lib/stores/dataStore';

  // Update the dataStore with the new data
  function selectDataset(newDataSet: Data) {
    dataStore.set(newDataSet);
  }

  async function handleFileUpload(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (!file) return;

    const dataUtil = new DataUtils();
    await dataUtil.parseData(URL.createObjectURL(file), getFileExtension(file));
    console.log(dataUtil);
    dataStore.set({ name: file.name, dataUtil: dataUtil });
  }

  function getFileExtension(file: File): string {
    return file.name.split('.').pop() ?? '';
  }
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
    <br />
    <Label class="mb-2 space-y-2">
      <Span>Upload file</Span>
      <Fileupload on:change={handleFileUpload} />
    </Label>
  </div>
</section>
