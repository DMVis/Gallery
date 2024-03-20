<script lang="ts">
  import { DarkMode, Sidebar, SidebarWrapper, Heading, P, Hr } from 'flowbite-svelte';
</script>

<nav class="col-span-1">
  <Sidebar asideClass="w-100">
    <SidebarWrapper class="h-screen">
      <Heading tag="h2">DMVis</Heading>
      <P>Welcome to the Decision Making Visualisation tool.</P>
      <Hr />
      <slot />
      <Hr />
      <DarkMode class="w-100" />
    </SidebarWrapper>
  </Sidebar>
</nav>
