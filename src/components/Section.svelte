<script>
  import { Route, router } from 'tinro';

  export let number = '';
  export let title = '';
  export let path = '';

  const query = $router.query;
</script>

<Route {path}>
  <div>
    {#if title && !query.hide}
      <h2>
        {#if number}<strong>{number}</strong>{/if}
        {title || 'title is not set'}
      </h2>
    {/if}

    <!-- TODO: refactor classes -->
    <div class="generic w-2/5">
      <slot />
    </div>
  </div>
</Route>
