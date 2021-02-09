<script>
  import Display from '@app/helpers/Display.svelte';

  const initial = {
    email: 'name@example.com',
    password: ''
  };

  let values = { ...initial };

  let data = undefined;

  const submit = () => {
    console.log(values);
    data = values;
  };

  const reset = () => (values = { ...initial });
</script>

<div class="container mx-auto my-12 text-gray-700 space-y-4">
  <h1 class="text-3xl font-semibold">Svelte Forms Book - Starter Project</h1>
  <h2>This is a base stater project with CSS in place</h2>

  <div class="generic w-2/5">
    <!-- form:start - put your forms into this block -->
    <form on:submit|preventDefault={submit} on:reset|preventDefault={reset}>
      <div>
        <label>
          <span>Email</span>
          <input
            type="text"
            name="email"
            placeholder="name@company.com"
            bind:value={values.email}
          />
        </label>
      </div>
      <div>
        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            placeholder="************"
            bind:value={values.password}
          />
        </label>
      </div>
      <div>
        <button type="submit">Login</button>
        <button type="reset">Reset</button>
      </div>
    </form>

    <Display {data} />

    <!-- form:end -->
  </div>
</div>
