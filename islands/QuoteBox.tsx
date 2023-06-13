import { useState } from "https://esm.sh/preact@10.13.1/hooks";
import { Quote } from "../utils/types.ts";

export default function QuoteBox({ author, likes, quote }: Quote) {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <div class="p-5">
      <blockquote class="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
        <svg
          aria-hidden="true"
          class="w-10 h-10 text-gray-400 dark:text-gray-600"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>

        <p class="text-xl italic font-medium leading-relaxed text-gray-500">
          “{quote}“
        </p>
      </blockquote>

      <span class="flex gap-5 justify-between">
        <p class="text-center italic text-gray-500">{author}</p>
        <button
          onClick={() => setIsLiked(!isLiked)}
          class="flex gap-2 text-sm focus:outline-none"
        >
          <p>{isLiked ? likes + 1 : likes} likes</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={5}
            stroke="red"
            className={`w-5 h-5 fill-current text-white ${
              isLiked && "text-red-500"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </span>
    </div>
  );
}
