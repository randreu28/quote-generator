import type { FullQuote, User } from "./types.ts";

const kv = await Deno.openKv();

type LikedQuotes = {
  likes: FullQuote["likes"];
  quote: FullQuote;
};

export async function getQuoteLikes(
  quote: string,
): Promise<FullQuote["likes"]> {
  const likes = await kv.get<LikedQuotes>([
    "likes",
    quote,
  ]);

  if (likes.value === null || likes.value.likes === null) {
    return [];
  }

  return likes.value.likes;
}

export function toggleDbLike(quote: FullQuote, user: User) {
  const newValue = quote.likes;

  const index = newValue.indexOf(user.name);

  if (index > -1) {
    newValue.splice(index, 1);
  } else {
    newValue.push(user.name);
  }

  kv.set(
    ["likes", quote.quote],
    { likes: newValue, quote: quote } satisfies LikedQuotes,
  );
}

export async function getAuthUserLikedQuotes(user: User): Promise<FullQuote[]> {
  const likedQuotes = kv.list<LikedQuotes>({
    prefix: ["likes"],
  });

  const authUserLikedQuotes: FullQuote[] = [];

  for await (const entry of likedQuotes) {
    if (entry.value.likes.includes(user.name)) {
      authUserLikedQuotes.push(entry.value.quote);
    }
  }
  return authUserLikedQuotes;
}
