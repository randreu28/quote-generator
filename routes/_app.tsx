import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Quote generator</title>
        <meta
          name="description"
          content="A quote generator made with Deno KV"
        />
        <link rel="icon" href="logo.svg" />
      </Head>
      <nav class="flex p-5 justify-between gap-5 bg-gray-200">
        <h1 class="font-bold">Quote generator</h1>

        <span class="gap-5 flex">
          <a href="/">Quotes</a>
          <a href="/add-quote">Add a quote</a>
        </span>
      </nav>

      <Component />
    </>
  );
}
