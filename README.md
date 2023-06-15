# Quote generator

This is a Quote generator using the [Deno KV](https://deno.com/kv), as part of
the [Deno KV Hackaton](https://deno.com/blog/deno-kv-hackathon). Feel free to
check it out!

## External API's

This project depends on two external API's:

- The
  [Github's RESTFul API](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-the-authenticated-user)
  for users, as it is used for authentication purposes.
- The [Ninja's Quote API](https://api-ninjas.com/api/quotes), which is used to
  get all the random quotes.

  Both API's require secret API Keys that are not included in the repository. In
  order to develop locally, it is required to have am `.env` file that looks
  like this:

  ```env
  GH_CLIENT_ID="your-secret-github-client-id"
  GH_CLIENT_SECRET="your-secret-github-client-secret"
  API_KEY="your-secret-ninjas-api-key"
  ```

## Usage

To start the project, you'll need installed the
[Deno CLI](https://deno.com/manual@v1.34.2/getting_started/installation), as
project uses the [Fresh](https://fresh.deno.dev/) framework and the
[Deno](https://deno.com/runtime) runtime.

```
deno task start
```

This will watch the project directory and restart as necessary. Notice that this
runs with the `--unstable` flag, which allows us to use the (currently on beta)
KV Deno database.
