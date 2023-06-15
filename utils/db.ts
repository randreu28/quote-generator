import type { FullQuote } from "./types.ts";

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
