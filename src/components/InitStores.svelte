<script lang="ts">
  import { onMount } from "svelte";
  import { currentPage, currentTheme } from "../lib/stores";

  export let wallpaper: string | undefined = undefined;
  export let theme: string;

  onMount(() => {
    if (wallpaper !== undefined) {
      currentPage.set(wallpaper);
    }
    currentTheme.set(theme);
  });
</script>
