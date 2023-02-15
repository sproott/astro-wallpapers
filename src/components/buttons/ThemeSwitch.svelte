<script lang="ts">
  import { currentPage, currentTheme } from "../../lib/stores";

  export let themeId: string;
  export let themeName: string;

  $: selected = $currentTheme === themeId;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click|stopPropagation={() =>
    (window.location.href = `/${themeId}/${
      $currentPage === "index" ? "" : $currentPage
    }`)}
  class:bg-accent-yellow={selected}
  class:bg-bg-light={!selected}
  class:border-accent-blue={!selected}
  class="p-2 cursor-pointer rounded"
>
  {themeName}
</div>
