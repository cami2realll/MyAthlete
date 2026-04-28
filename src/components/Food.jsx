import { useState } from "react";

function FoodCard({ name, emoji, extra, calories, protein }) {
  const [likes, setLikes] = useState(0);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-slate-800 p-4 rounded-xl shadow-md text-center border border-slate-700">

      <h3 className="text-lg font-bold text-white">
        {emoji} {name}
      </h3>

      {calories && (
        <p className="text-teal-400 text-sm mt-1">{calories} cal · {protein}g protein</p>
      )}

      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-2 text-teal-300 hover:text-white text-sm transition"
      >
        {showMore ? "Show Less 🤔" : "Show More 🤓"}
      </button>

      {showMore && (
        <p className="mt-2 text-sm text-slate-300">
          {extra}
        </p>
      )}

      <button
        onClick={() => setLikes(likes + 1)}
        className="mt-3 bg-teal-600 px-3 py-1 rounded-full text-white text-sm hover:bg-teal-500 transition"
      >
        ❤️ {likes}
      </button>

    </div>
  );
}

function Food() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">

        <FoodCard
          name="Grilled Chicken"
          emoji="🍗"
          extra="High protein meal great for muscle recovery after practice."
          calories="320"
          protein="42"
        />

        <FoodCard
          name="Protein Smoothie"
          emoji="🥤"
          extra="Blend with banana, oats, and almond milk for pre-workout energy."
          calories="280"
          protein="25"
        />

        <FoodCard
          name="Brown Rice & Veggies"
          emoji="🍱"
          extra="Complex carbs to fuel long training sessions and maintain energy."
          calories="410"
          protein="12"
        />

        <FoodCard
          name="Salmon"
          emoji="🐟"
          extra="Omega-3 rich fish that reduces inflammation and speeds recovery."
          calories="350"
          protein="38"
        />

        <FoodCard
          name="Greek Yogurt"
          emoji="🥛"
          extra="Great post-workout snack with probiotics and high protein content."
          calories="150"
          protein="17"
        />

      </div>
    </div>
  );
}

export default Food;