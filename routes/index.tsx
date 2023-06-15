import { Handlers, PageProps } from "$fresh/server.ts";
import NavBar from "../components/NavBar.tsx";
import BigQuote from "../islands/BigQuote.tsx";
import { getQuotes } from "../utils/api.ts";
import { getAuthenticatedUser } from "../utils/auth.ts";
import { FullQuote, User } from "../utils/types.ts";

type PageData = {
  user: User | null;
  quotes: FullQuote[] | null;
};

export const handler: Handlers = {
  async GET(req, ctx) {
    const user = await getAuthenticatedUser(req.headers);
    const quotes = await getQuotes(undefined, 10);
    return ctx.render({ user: user, quotes: quotes } satisfies PageData);
  },
};

export default function Home({ data: { user, quotes } }: PageProps<PageData>) {
  if (quotes === null) {
    return (
      <>
        <NavBar user={user} />
        <div class="h-screen flex justify-center items-center text-red-500">
          <h1>An error occured loading the quotes. Please try again later</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar user={user} />
      <BigQuote {...quotes[0]} />
      {quotes.map((quote, index) => {
        if (index === 0) {
          return;
        }
        return <p class="p-5">{quote.quote}</p>;
      })}
    </>
  );
}
