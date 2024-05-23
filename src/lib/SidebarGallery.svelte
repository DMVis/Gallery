<script lang="ts">
  import { Search } from 'flowbite-svelte';

  import { searchStore } from '$lib/stores/searchStore';
</script>

<article>
  <section>
    <Search
      placeholder="Search visualisations..."
      size="md"
      class="mt-2"
      bind:value={$searchStore} />
  </section>
</article>
