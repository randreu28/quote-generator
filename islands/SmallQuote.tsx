import { useToggleLike } from "../utils/hooks.ts";
import { FullQuote, User } from "../utils/types.ts";

type Props = {
  quote: FullQuote;
  user: User | null;
};

export default function SmallQuote({ quote, user }: Props) {
  const { isLiked, isLoading, toggleLike } = useToggleLike({
    quote: quote,
    user: user,
  });

  const numLikes =
    quote.likes.filter((username) => username !== user?.name).length;
  return (
    <div class="flex flex-col gap-y-4 text-sm">
      <div class="h-full">
        <div class="flex quote-container my-auto h-full rounded-xl bg-gray-200 p-12">
          <div class="self-center quote-content flex flex-col gap-y-2">
            <div class="quote font-semibold">
              <p>
                "{quote.quote}"
              </p>
            </div>
            <div class="author">
              <span>- {quote.author}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between">
        <button
          onClick={toggleLike}
          disabled={isLoading}
          class="text-red-500 flex gap-2 items-center"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class={`"w-6 h-6 text-red-500 ${isLiked && "fill-current"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <p>{isLiked ? numLikes + 1 : numLikes}</p>
        </button>

        <a
          href={`/${quote.category}`}
          class="bg-gray-200 hover:bg-black text-black hover:text-white font-semibold px-4 p-2 rounded-full text-sm max-w-screen-md text-center capitalize"
        >
          {quote.category} Quote
        </a>
      </div>
    </div>
  );
}
