export default function Categories() {
  // deno-fmt-ignore
  const categories = ["any", "age", "alone", "amazing", "anger", "architecture", "art", "attitude", "beauty", "best", "birthday", "business", "car", "change", "communications", "computers", "cool", "courage", "dad", "dating", "death", "design", "dreams", "education", "environmental", "equality", "experience", "failure", "faith", "family", "famous", "fear", "fitness", "food", "forgiveness", "freedom", "friendship", "funny", "future", "god", "good", "government", "graduation", "great", "happiness", "health", "history", "home", "hope", "humor", "imagination", "inspirational", "intelligence", "jealousy", "knowledge", "leadership", "learning", "legal", "life", "love", "marriage", "medical", "men", "mom", "money", "morning", "movies", "success"];

  return (
    <div class="grid grid-cols-2 text-center lg:grid-cols-8">
      {categories.map((category) => {
        return (
          <a
            href={`/${category === "any" ? "" : category}`}
            class="text-sm text-blue-500 capitalize hover:underline"
          >
            {category}
          </a>
        );
      })}
    </div>
  );
}
