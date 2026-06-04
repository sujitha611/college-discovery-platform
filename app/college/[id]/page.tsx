"use client";

import { useState } from "react";
import Link from "next/link";

const colleges = [
  {
    id: "1",
    name: "Sri Mittapalli College of Engineering",
    location: "Guntur",
    fees: "₹65,000 / year",
    rating: "4.2 ⭐",
    description:
      "A well-known engineering college in Guntur offering various technical courses.",
  },
  {
    id: "2",
    name: "KL University",
    location: "Vijayawada",
    fees: "₹2,50,000 / year",
    rating: "4.6 ⭐",
    description:
      "One of the top private universities known for engineering and innovation.",
  },
  {
    id: "3",
    name: "Vignan University",
    location: "Guntur",
    fees: "₹1,80,000 / year",
    rating: "4.4 ⭐",
    description:
      "Popular university with strong academics and campus facilities.",
  },
];

export default function CollegeDetails() {
  const [favorite, setFavorite] = useState(false);

  const college = colleges[0];

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-4">
          {college.name}
        </h1>

        <p><strong>Location:</strong> {college.location}</p>
        <p><strong>Fees:</strong> {college.fees}</p>
        <p><strong>Rating:</strong> {college.rating}</p>

        <p className="mt-4 mb-6">
          {college.description}
        </p>

        <button
          onClick={() => setFavorite(!favorite)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          {favorite ? "❤️ Added to Favorites" : "🤍 Add to Favorites"}
        </button>

        <div className="mt-4">
          <Link
            href="/"
            className="bg-gray-600 text-white px-4 py-2 rounded-lg"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}