<script lang="ts">
  import SidebarGallery from '$lib/SidebarGallery.svelte';
  import Sidebar from '$lib/Sidebar.svelte';
  import Gallery from '$lib/Gallery.svelte';
</script>

<main class="grid grid-cols-5">
  <Sidebar>
    <SidebarGallery />
  </Sidebar>
  <Gallery />
</main>
