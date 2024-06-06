<script lang="ts">
  import { Card, Heading, A, P, Dropzone } from 'flowbite-svelte';

  import { page } from '$app/stores';
  import Sidebar from '$lib/Sidebar.svelte';
  import { dataStore, datasets } from '$lib/stores/dataStore';
  import Visualisation from '$lib/Visualisation.svelte';
  import SidebarVisualisation from '$lib/SidebarVisualisation.svelte';
  import { DataUtils } from '@dmvis/dmvis';
  import { getVisualisations } from '$lib/visualisationMapper';
  import { onMount } from 'svelte';

  const available_vis = getVisualisations().map(({ src }) => src.substring(1));

  let html: HTMLHtmlElement;

  // get body to edit cursor on wait
  onMount(() => {
    html = document.querySelector('html')!;
  });

  async function handleFileUpload(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (!file) return;

    const dataUtil = new DataUtils();
    const dataUtilId = new DataUtils(true);
    html.style.cursor = 'wait';
    await dataUtil.parseData(URL.createObjectURL(file), getFileExtension(file));
    await dataUtilId.parseData(URL.createObjectURL(file), getFileExtension(file));
    html.style.cursor = 'default';
    if ($datasets.find((dataset) => dataset.name === file.name) === undefined) {
      datasets.update((d) => [...d, { name: file.name, dataUtil, dataUtilId }]);
      dataStore.set({ name: file.name, dataUtil, dataUtilId });
    }
  }

  function getFileExtension(file: File): string {
    return file.name.split('.').pop() ?? '';
  }

  const current_page = $page.params.slug.split('/').pop() || '';
</script>

<main class="grid grid-cols-5">
  {#if available_vis.includes(current_page)}
    <Sidebar>
      <SidebarVisualisation />
    </Sidebar>
    <article class="col-span-4 flex h-screen max-h-screen flex-col">
      <a href="/">
        <svg
          class="ml-4 mt-4 h-[24px] w-[24px] text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.7"
            d="M5 12h14M5 12l4-4m-4 4 4 4" />
        </svg>
      </a>
      <section class="flex min-h-0 flex-1 p-4">
        {#if $dataStore.name !== undefined}
          <svelte:component this={Visualisation} data={$dataStore} />
        {:else}
          <Card class="col-span-5 m-auto justify-self-center">
            <Dropzone
              on:drop={handleFileUpload}
              on:dragover={(event) => {
                event.preventDefault();
              }}
              on:change={handleFileUpload}>
              <svg
                aria-hidden="true"
                class="mb-3 h-10 w-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">CSV, JSON</p>
            </Dropzone>
          </Card>
        {/if}
      </section>
    </article>
  {:else}
    <Card class="col-span-5 place-self-center">
      <Heading tag="h2">404</Heading>
      <P
        >This visualisation doesn't exist. Go back to the <A href="/">home page</A> and try again</P>
    </Card>
  {/if}
</main>
