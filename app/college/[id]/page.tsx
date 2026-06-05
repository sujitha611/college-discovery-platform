"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const colleges = [
  {
    id: "1",
    name: "Sri Mittapalli College of Engineering",
    location: "Guntur",
    fees: "₹65,000 / year",
    rating: "4.2 ⭐",
    description:
      "A well-known engineering college in Guntur offering various technical courses.",
    courses: ["B.Tech CSE", "B.Tech ECE", "MBA"],
    placements: "Highest Package: 12 LPA | Average Package: 4.5 LPA",
    reviews: "⭐ 4.2/5 - Good faculty and placements",
  },
  {
    id: "2",
    name: "KL University",
    location: "Vijayawada",
    fees: "₹2,50,000 / year",
    rating: "4.6 ⭐",
    description:
      "One of the top private universities known for engineering and innovation.",
    courses: ["B.Tech CSE", "B.Tech AI", "MBA"],
    placements: "Highest Package: 25 LPA | Average Package: 7 LPA",
    reviews: "⭐ 4.6/5 - Excellent campus and placements",
  },
  {
    id: "3",
    name: "Vignan University",
    location: "Guntur",
    fees: "₹1,80,000 / year",
    rating: "4.4 ⭐",
    description:
      "Popular university with strong academics and campus facilities.",
    courses: ["B.Tech CSE", "B.Tech EEE", "MBA"],
    placements: "Highest Package: 10 LPA | Average Package: 4 LPA",
    reviews: "⭐ 4.4/5 - Good academics and infrastructure",
  },
];

export default function CollegeDetails() {
  const { id } = useParams();
  const [favorite, setFavorite] = useState(false);

  const college = colleges.find((c) => c.id === id);

  if (!college) {
    return (
      <main className="p-8">
        <h1>College not found</h1>
        <Link href="/">Go back</Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-4">
          {college.name}
        </h1>

        <p><strong>Location:</strong> {college.location}</p>
        <p><strong>Fees:</strong> {college.fees}</p>
        <p><strong>Rating:</strong> {college.rating}</p>

        <h2 className="text-xl font-bold mt-6">
          Overview
        </h2>
        <p className="mt-2">{college.description}</p>

        <h2 className="text-xl font-bold mt-6">
          Courses
        </h2>
        <ul className="list-disc ml-6">
          {college.courses.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>

        <h2 className="text-xl font-bold mt-6">
          Placements
        </h2>
        <p>{college.placements}</p>

        <h2 className="text-xl font-bold mt-6">
          Reviews
        </h2>
        <p>{college.reviews}</p>

        <button
          onClick={() => {
            localStorage.setItem(
              "favoriteCollege",
              college.name
            );
            setFavorite(!favorite);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-6"
        >
          {favorite
            ? "❤️ Added to Favorites"
            : "🤍 Add to Favorites"}
        </button>

        {favorite && (
          <p className="mt-3 text-green-600">
            College saved successfully ❤️
          </p>
        )}

        <div className="mt-6">
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
