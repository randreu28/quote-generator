import { useState } from "https://esm.sh/preact@10.13.1/hooks";
import { FullQuote } from "../utils/types.ts";

export default function BigQuote(
  { author, category, likes, quote }: FullQuote,
) {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  function toggleLike() {
    /* Todo */
  }
  return (
    <div class="flex px-8 h-screen !max-w-7xl">
      <div class="flex flex-col my-auto gap-y-4">
        <h1
          class={`text-center text-4xl font-bold ${
            quote.length <= 125 && "md:text-7xl "
          }`}
        >
          "{quote}"
        </h1>
        <p class="mx-auto max-w-screen-md text-center text-lg">
          - {author}
        </p>
        <div class="text-center">
          <a
            href="/kindness"
            class="bg-gray-200 hover:bg-black text-black hover:text-white font-semibold px-4 p-2 rounded-full mx-auto max-w-screen-md text-center text-sm capitalize"
          >
            {category} Quote
          </a>
          <button
            onClick={toggleLike}
            class="text-red-500 flex gap-2 items-center ml-auto"
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
            <p>{likes.length}</p>
          </button>
        </div>
      </div>
    </div>
  );
}
