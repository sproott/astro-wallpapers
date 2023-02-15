<script lang="ts">
  import { onMount } from "svelte";
  import { currentPage, currentTheme } from "../lib/stores";

  export let wallpaper: string;
  export let theme: string;

  onMount(() => {
    currentPage.set(wallpaper);
    currentTheme.set(theme);
  });
</script>
