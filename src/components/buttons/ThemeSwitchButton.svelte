<script lang="ts">
  import { themePickerOpen } from "../../lib/stores";
  import Button from "./Button.svelte";

  export let hidden: boolean = false;
</script>

<Button
  class={hidden ? "hidden" : ""}
  on:click={() => themePickerOpen.set(!$themePickerOpen)}>Change theme</Button
>
