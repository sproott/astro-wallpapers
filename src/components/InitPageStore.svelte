<script lang="ts">
  import { onMount } from "svelte";
  import { currentPage } from "../lib/stores";

  export let wallpaper: string;

  onMount(() => {
    currentPage.set(wallpaper);
  });
</script>
