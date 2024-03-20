<script lang="ts">
  import Sidebar from '$lib/Sidebar.svelte';
  import Gallery from '$lib/Gallery.svelte';
  import SidebarGallery from '$lib/SidebarGallery.svelte';
</script>

<main class="grid grid-cols-5">
  <Sidebar>
    <SidebarGallery />
  </Sidebar>
  <Gallery />
</main>
