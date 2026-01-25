"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white px-4">
      <div className="card w-full max-w-2xl text-center">
        {/* Logo / Brand */}
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-3">
          GullyBits
        </h1>

        <p className="text-sm text-muted mb-6">
          Connecting surplus food to those who need it most
        </p>

        {/* Status Badge */}
        <div className="inline-block mb-6 px-4 py-1 rounded-full bg-orange-100 text-primary text-sm font-medium">
          🚧 In Production
        </div>

        {/* Main Message */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          We’re building something meaningful
        </h2>

        <p className="text-muted max-w-xl mx-auto mb-8">
          GullyBits is currently under active development.
          Our goal is to reduce food waste by connecting food providers
          with people who need it. We’ll be launching very soon.
        </p>

        {/* Actions */}
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          {/* Primary Button */}
          <button
            onClick={() => router.push("/login")}
            className="
      px-8 py-3 rounded-xl font-semibold text-white
      bg-gradient-to-r from-[#ef9815] to-orange-500
      shadow-lg shadow-orange-200
      hover:shadow-xl hover:scale-[1.02]
      transition-all duration-200
      w-full sm:w-auto
    "
          >
            Login
          </button>

          {/* Secondary Button */}
          <button
            onClick={() => router.push("/register")}
            className="
      px-8 py-3 rounded-xl font-semibold
      border-2 border-orange-300 text-primary
      hover:bg-orange-50 hover:border-orange-400
      hover:scale-[1.02]
      transition-all duration-200
      w-full sm:w-auto
    "
          >
            Create Account
          </button>
        </div>


        {/* Footer */}
        <p className="text-xs text-muted mt-10">
          © {new Date().getFullYear()} GullyBits · Built with purpose ❤️
        </p>
      </div>
    </div>
  );
}
