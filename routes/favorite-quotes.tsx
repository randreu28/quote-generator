import { Handlers, PageProps } from "$fresh/server.ts";
import NavBar from "../components/NavBar.tsx";
import QuoteGrid from "../components/QuoteGrid.tsx";
import { getAuthenticatedUser } from "../utils/auth.ts";
import { getAuthUserLikedQuotes } from "../utils/db.ts";
import { FullQuote, User } from "../utils/types.ts";

type PageData = {
  user: User | null;
  quotes: FullQuote[];
};

export const handler: Handlers = {
  async GET(req, ctx) {
    const user = await getAuthenticatedUser(req.headers);

    if (!user) {
      const headers = new Headers();
      headers.set("location", "/api/auth/login");
      return new Response(null, { status: 307, headers });
    }

    const quotes = await getAuthUserLikedQuotes(user);

    return ctx.render({ user: user, quotes: quotes } satisfies PageData);
  },
};

export default function LikedPage(
  { data: { user, quotes } }: PageProps<PageData>,
) {
  if (quotes.length === 0) {
    return (
      <>
        <NavBar user={user} showLikedQuotesLink={false} />
        <div class="flex h-[80vh] justify-center items-center flex-col gap-2 text-sm">
          <h1 class="text-gray-500 text-lg">There is no liked quotes yet</h1>
          <a class="text-blue-500 hover:underline" href="/">
            Find quotes that you like
          </a>
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar user={user} showLikedQuotesLink={false} />
      <br />
      <br />
      <QuoteGrid quotes={quotes} user={user} />
    </>
  );
}
