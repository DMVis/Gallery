<script lang="ts">
  import { PieChartSolid } from 'flowbite-svelte-icons';
  import {
    DarkMode,
    Sidebar,
    SidebarWrapper,
    Heading,
    P,
    Hr,
    Accordion,
    AccordionItem
  } from 'flowbite-svelte';

  import Icon from '$lib/assets/Logo.png';
  import { getVisualisations } from '$lib/visualisationMapper';

  let visualisations = getVisualisations();
</script>

<nav class="col-span-1">
  <Sidebar asideClass="w-100">
    <SidebarWrapper class="flex h-screen flex-col">
      <a href="/">
        <img class="mx-auto w-24" src={Icon} alt="DMVis Gallery Logo" />
        <Heading class="mx-auto">DMVis Gallery</Heading>
      </a>

      <Hr />
      <slot />
      <Hr />
      <Accordion flush>
        <AccordionItem>
          <span slot="header" class="flex gap-2 text-base">
            <PieChartSolid class="mt-0.5" />
            <span>Visualisations</span>
          </span>
          <ul class="flex max-h-32 flex-col items-center gap-4 overflow-y-auto">
            {#each visualisations as visualisation}
              <li>
                <a href={visualisation.src}>{visualisation.title}</a>
              </li>
            {/each}
          </ul>
        </AccordionItem>
      </Accordion>
      <button
        class="mt-8 flex cursor-pointer gap-2"
        on:click={() => {
          console.log('TODO');
        }}>
        <svg
          class="h-[24px] w-[24px] text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            fill-rule="evenodd"
            d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-6 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z"
            clip-rule="evenodd" />
        </svg>
        <P>Documentation</P>
      </button>
      <DarkMode class="mt-auto w-10" />
    </SidebarWrapper>
  </Sidebar>
</nav>
