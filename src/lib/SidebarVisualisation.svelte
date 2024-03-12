<script lang="ts">
  import { Heading, P, Hr, A } from 'flowbite-svelte';
  import { dataStore } from '../stores/dataStore';
  import { onMount } from 'svelte';

  let datasetName = '';
  let data: { x: number; y: number }[] = [];

  // Subscribe to the data store and update `datasetName` and `data` when it changes
  const unsubscribe = dataStore.subscribe((value) => {
    datasetName = value.name;
    data = value.data;
  });

  onMount(() => {
    return unsubscribe; // Unsubscribe when the component is destroyed
  });
</script>

<article>
  <section>
    <Heading tag="h3">Filters</Heading>
    <P>Here you can filter the data in your visualisation.</P>
    <P>Name: {datasetName}</P>
    <P>Data: {data}</P>
  </section>
  <Hr />
  <section>
    <Heading tag="h3">Back to home</Heading>
    <P>Go back <A href="/">home</A>.</P>
  </section>
</article>
