<script lang="ts">
  import { currentPage, currentTheme } from "../../lib/stores";

  export let themeId: string;
  export let themeName: string;

  $: selected = $currentTheme === themeId;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click|stopPropagation={() => {
    if (selected) return;
    window.location.href = `/${themeId}/${
      $currentPage === "index" ? "" : $currentPage
    }`;
  }}
  class="p-2 cursor-pointer rounded {selected
    ? 'bg-button-bg color-button-fg'
    : ''} select-none"
>
  {themeName}
</div>
