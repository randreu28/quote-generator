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
      <Component />
    </>
  );
}
