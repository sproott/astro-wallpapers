<script lang="ts">
  import BottomOverlay from "./BottomOverlay.svelte";

  let hidden = false;

  const hide = () => (hidden = true);
  const fullscreen = () => document.documentElement.requestFullscreen();
  const buttonClasses = "color-button-fg bg-button-bg p-2 rounded";
</script>

<BottomOverlay
  class="flex flex-col justify-end items-center gap-4 py-4"
  show={!hidden}
>
  <button class:hidden class={buttonClasses} on:click={fullscreen}
    >Full-screen</button
  >
  <a class:hidden class={buttonClasses} href=".">Back to home</a>
  <button class:hidden class={buttonClasses} on:click={hide}
    >Hide buttons</button
  >
</BottomOverlay>
