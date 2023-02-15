<script lang="ts">
  import { themePickerOpen } from "../../lib/stores";
  import ThemeSwitch from "./ThemeSwitch.svelte";
</script>

{#if $themePickerOpen}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="absolute inset-0 flex justify-center items-center"
    on:click={() => themePickerOpen.set(false)}
  >
    <div class="bg-bg-light flex flex-col gap-2 p-8 rounded">
      <h1 class="text-lg">Choose a theme:</h1>
      <ThemeSwitch themeId="nord" themeName="Nord" />
      <ThemeSwitch
        themeId="catppuccinMacchiato"
        themeName="Catppuccin Macchiato"
      />
    </div>
  </div>
{/if}
