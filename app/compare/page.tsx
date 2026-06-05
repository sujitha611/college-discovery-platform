export default function ComparePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Compare Colleges
      </h1>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">
        <table className="w-full border">
          <thead>
            <tr>
              <th className="border p-2">Feature</th>
              <th className="border p-2">KL University</th>
              <th className="border p-2">Vignan University</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-2">Location</td>
              <td className="border p-2">Vijayawada</td>
              <td className="border p-2">Guntur</td>
            </tr>

            <tr>
              <td className="border p-2">Fees</td>
              <td className="border p-2">₹2,50,000</td>
              <td className="border p-2">₹1,80,000</td>
            </tr>

            <tr>
              <td className="border p-2">Rating</td>
              <td className="border p-2">4.6 ⭐</td>
              <td className="border p-2">4.4 ⭐</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}