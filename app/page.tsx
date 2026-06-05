"use client";

import { useState } from "react";
import Link from "next/link";

const colleges = [
  {
    id: 1,
    name: "Sri Mittapalli College of Engineering",
    location: "Guntur",
    fees: "₹65,000 / year",
    rating: "4.2 ⭐",
  },
  {
    id: 2,
    name: "KL University",
    location: "Vijayawada",
    fees: "₹2,50,000 / year",
    rating: "4.6 ⭐",
  },
  {
    id: 3,
    name: "Vignan University",
    location: "Guntur",
    fees: "₹1,80,000 / year",
    rating: "4.4 ⭐",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        College Discovery Platform
      </h1>

      <div className="text-center mb-6 space-x-2">
        <Link
          href="/compare"
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Compare Colleges
        </Link>

        <Link
          href="/predictor"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg"
        >
          Predictor Tool
        </Link>

        <Link
          href="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Login
        </Link>

        <Link
          href="/signup"
          className="bg-orange-600 text-white px-4 py-2 rounded-lg"
        >
          Sign Up
        </Link>
      </div>

      <div className="max-w-4xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search colleges..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border rounded-lg"
        />
      </div>

      <div className="max-w-4xl mx-auto grid gap-6">
        {filteredColleges.map((college) => (
          <Link key={college.id} href={`/college/${college.id}`}>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer">
              <h2 className="text-xl font-semibold">
                {college.name}
              </h2>
              <p>Location: {college.location}</p>
              <p>Fees: {college.fees}</p>
              <p>Rating: {college.rating}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}