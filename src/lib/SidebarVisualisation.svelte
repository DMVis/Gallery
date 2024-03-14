<script lang="ts">
  import { Heading, P, Hr, A } from 'flowbite-svelte';
  import { type Data } from '../stores/dataStore';
  import DatasetSelector from './DatasetSelector.svelte';

  export let dataset: Data;
</script>

<article>
  <section>
    <Heading tag="h3">Visualisation info</Heading>
    <P>Here you can see the data in your visualisation.</P>
    <P><b>Name</b>: {dataset.name}</P>
  </section>
  <Hr />
  <DatasetSelector />
  <Hr />
  <section>
    <Heading tag="h3">Back to home</Heading>
    <P>Go back <A href="/">home</A>.</P>
  </section>
</article>
