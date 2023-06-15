import SmallQuote from "../islands/SmallQuote.tsx";
import { FullQuote, User } from "../utils/types.ts";

type Props = {
  user: User | null;
  quotes: FullQuote[];
  skipFirst?: boolean;
};

export default function QuoteGrid({ quotes, user, skipFirst = false }: Props) {
  return (
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8 lg:gap-y-12">
      {quotes.map((quote, index) => {
        if (index === 0 && skipFirst) {
          return;
        }

        return <SmallQuote quote={quote} user={user} />;
      })}
    </div>
  );
}
