<script lang="ts">
  import { Heading, P, Hr, Button, Search } from 'flowbite-svelte';
  import { dataStore } from '../stores/dataStore';
  import { searchStore } from '../stores/searchStore';

  // Update the dataStore with the new data
  function selectDataset(newDataSet: { name: string; data: { x: number; y: number }[] }) {
    dataStore.set(newDataSet);
  }

  // Dummy data
  const dataSet1 = {
    name: 'dataSet1',
    data: [
      { x: 0, y: 1 },
      { x: 1, y: 3 },
      { x: 2, y: 5 },
      { x: 3, y: 7 }
    ]
  };

  const dataSet2 = {
    name: 'dataset2',
    data: [
      { x: 0, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 4 },
      { x: 3, y: 8 }
    ]
  };

  const dataSet3 = {
    name: 'dataset3',
    data: [
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 0 },
      { x: 3, y: 5 }
    ]
  };

  const datasets = [dataSet1, dataSet2, dataSet3];
</script>

<article>
  <section>
    <Heading tag="h3">Filters</Heading>
    <P>Here you can filter the type of visualisation.</P>
    <Search
      placeholder="Search visualisations..."
      size="md"
      class="mt-2"
      bind:value={$searchStore} />
  </section>
  <Hr />
  <section>
    <Heading tag="h3">Data</Heading>
    <P>Here you will be able to pick a dataset(?)</P>
    <div class="flex flex-col">
      {#each datasets as dataset}
        <Button size="md" pill={true} class="mb-2 mt-2" on:click={() => selectDataset(dataset)}>
          {dataset.name}
        </Button>
      {/each}
    </div>
  </section>
</article>
