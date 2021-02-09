<script>
  import { fade } from 'svelte/transition';

  export let data = undefined;
  let result = '';

  $: if (data) {
    result = JSON.stringify(data, null, 2);

    setTimeout(() => {
      data = undefined;
      result = '';
    }, 3000);
  }
</script>

{#if result}
  <pre transition:fade class="p-4 mt-4 bg-gray-200 text-sm">{result}</pre>
{/if}
