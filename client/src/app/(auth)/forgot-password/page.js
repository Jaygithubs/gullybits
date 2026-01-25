"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "../../../services/auth.service";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
        const res = await authService.forgotPassword({ email });
        const data = await res.data;
        if (!data.success) throw new Error(data.message);

      setMessage(
        "Check your email! A password reset link is on the way."
      );
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-center">
      <div className="card w-full max-w-md">
        <h1 className="text-2xl font-bold text-primary mb-2">
          Forgot Password
        </h1>

        <p className="text-sm text-muted mb-6">
          Enter your registered email address. We’ll send you a link to reset
          your password.
        </p>

        <form onSubmit={submit}>
          <input
            className="input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button className="btn-primary" disabled={loading}>
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {message && (
          <p className="text-sm text-center mt-4 text-muted text-primary">
            {message}
          </p>
        )}

        <p className="text-sm text-center mt-6">
          Remember your password?{" "}
          <span
            className="text-primary cursor-pointer font-medium"
            onClick={() => router.push("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
