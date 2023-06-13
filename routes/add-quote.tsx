export default function AddQuote() {
  return (
    <div class="flex justify-center items-center h-[80vh] text-2xl">
      <form method="post" action="/api/quote" class="gap-2 flex flex-col">
        <label>Quote</label>
        <input
          type="text"
          class="bg-gray-200"
          required
          name="quote"
          value=""
        />
        <label>Author</label>
        <input
          type="text"
          class="bg-gray-200"
          required
          name="author"
          value=""
        />
        <button type="submit" class="bg-blue-300 p-2 mt-5 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
