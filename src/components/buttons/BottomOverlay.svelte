<script lang="ts">
  export let show: boolean = true;
  let classes: string = "";
  export { classes as class };
</script>

<div
  class:hidden={!show}
  class="absolute inset-0 pointer-events-none children:pointer-events-initial {classes}"
>
  <slot />
</div>
