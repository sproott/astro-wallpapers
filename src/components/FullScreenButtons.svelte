<script lang="ts">
  let hidden = false;

  const hide = () => (hidden = true);
  const fullscreen = () => {
    hide();
    document.documentElement.requestFullscreen();
  };
</script>

<div
  class:hidden
  class="absolute inset-0 pointer-events-none children:pointer-events-initial flex flex-col justify-end items-center gap-4 py-4"
>
  <button
    class:hidden
    class="bg-nord-frost-400 p-2 rounded"
    on:click={fullscreen}>Full-screen</button
  >
  <button class:hidden class="bg-nord-frost-400 p-2 rounded" on:click={hide}
    >Hide buttons</button
  >
</div>
