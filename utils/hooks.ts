import { useState } from "https://esm.sh/preact@10.13.1/hooks";
import { FullQuote, User } from "./types.ts";
import axiod from "https://deno.land/x/axiod@0.26.2/mod.ts";

export function useToggleLike(
  { quote, user }: { quote: FullQuote; user: User | null },
) {
  const hasBeenLiked = user ? quote.likes.includes(user.name) : false;
  const [isLiked, setIsLiked] = useState<boolean>(hasBeenLiked);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function toggleLike() {
    if (user === null) {
      alert("You must be registered to like quotes");
      return;
    }

    setIsLoading(true);
    const res = await axiod.post("/api/toggle-like", quote);

    if (res.status === 200) {
      setIsLoading(false);
      setIsLiked(!isLiked);
    } else {
      setIsLoading(false);
      alert("An error occured. Please try again later");
    }
  }

  return { toggleLike, isLiked, isLoading };
}
