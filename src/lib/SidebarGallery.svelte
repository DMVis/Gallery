<script lang="ts">
  import { Heading, P, Search } from 'flowbite-svelte';

  import { searchStore } from '$lib/stores/searchStore';
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
</article>
