import type { FullQuote, User } from "./types.ts";

const kv = await Deno.openKv();

export async function getQuoteLikes(
  quote: string,
): Promise<FullQuote["likes"]> {
  const likes = await kv.get<FullQuote["likes"]>(["likes", quote]);

  if (likes.value === null) {
    return [];
  }

  return likes.value;
}

export function toggleDbLike(quote: FullQuote, user: User) {
  const newValue = quote.likes;

  const index = newValue.indexOf(user.name);

  if (index > -1) {
    newValue.splice(index, 1);
  } else {
    newValue.push(user.name);
  }

  kv.set(["likes", quote.quote], newValue);
}
