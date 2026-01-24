"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { authService } from "@/services/auth.service";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");

  const [status, setStatus] = useState("loading"); // loading | success | error
  const [message, setMessage] = useState("Verifying your email...");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage("Invalid or missing verification token.");
      return;
    }

    const verify = async () => {
      try {
        await authService.verifyEmail(token);
        setStatus("success");
        setMessage("Your email has been verified successfully!");
      } catch (err) {
        setStatus("error");
        setMessage(
          err.response?.data?.message || "Verification failed. Token may be expired."
        );
      }
    };

    verify();
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="card max-w-md w-full text-center p-6">
        <h1 className="text-2xl font-semibold text-[#ef9815] mb-4">
          Email Verification
        </h1>

        {status === "loading" && (
          <p className="text-gray-600">{message}</p>
        )}

        {status === "success" && (
          <>
            <p className="text-green-600 mb-4">{message}</p>
            <button
              className="btn-primary w-full"
              onClick={() => router.push("/login")}
            >
              Go to Login
            </button>
          </>
        )}

        {status === "error" && (
          <>
            <p className="text-red-600 mb-4">{message}</p>
            <button
              className="btn-primary w-full"
              onClick={() => router.push("/register")}
            >
              Back to Register
            </button>
          </>
        )}
      </div>
    </div>
  );
}
