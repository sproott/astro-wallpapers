<script lang="ts">
  let classes: string = "";
  export { classes as class };
</script>

<button on:click class="color-button-fg bg-button-bg p-2 rounded {classes}"
  ><slot /></button
>
