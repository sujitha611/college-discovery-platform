export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Sign Up
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3 rounded"
        />

        <button className="w-full bg-green-600 text-white p-2 rounded">
          Create Account
        </button>
      </div>
    </main>
  );
}