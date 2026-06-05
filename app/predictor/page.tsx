"use client";

import { useState } from "react";

export default function PredictorPage() {
  const [rank, setRank] = useState("");
  const [result, setResult] = useState("");

  const predictCollege = () => {
    const r = Number(rank);

    if (r <= 1000) {
      setResult("KL University");
    } else if (r <= 5000) {
      setResult("Vignan University");
    } else {
      setResult("Sri Mittapalli College of Engineering");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-4">
          College Predictor
        </h1>

        <input
          type="number"
          placeholder="Enter Rank"
          value={rank}
          onChange={(e) => setRank(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <button
          onClick={predictCollege}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Predict College
        </button>

        {result && (
          <p className="mt-4 text-green-600">
            Recommended College: {result}
          </p>
        )}
      </div>
    </main>
  );
}