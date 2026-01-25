"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { authService } from "../../../services/auth.service";

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); // ?token=xxxx

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    if (!token) {
      setMessage("Invalid or expired reset link.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      
    const res = await authService.resetPassword({ token, newPassword: password });
    const data = await res.data;

      if (!data.success) {
        setMessage(data.message || "Password reset failed.");
        return;
      } 

      setMessage("Password reset successfully. Redirecting to login...");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
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
          Reset Password
        </h1>

        <p className="text-sm text-muted mb-6">
          Enter your new password below.
        </p>

        <form onSubmit={submit}>
          <input
            className="input"
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            className="input"
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button className="btn-primary" disabled={loading}>
            {loading ? "Updating..." : "Reset Password"}
          </button>
        </form>

        {message && (
          <p className="text-sm text-center mt-4 text-muted">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
