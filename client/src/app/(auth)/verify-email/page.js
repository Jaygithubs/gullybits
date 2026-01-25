import { Suspense } from "react";
import VerifyEmailClient from "../../../components/auth/VerifyEmailClient";

export default function VerifyEmailPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="card max-w-md w-full text-center p-6">
            <h1 className="text-2xl font-semibold text-[#ef9815] mb-4">
              Email Verification
            </h1>
            <p className="text-gray-600">Verifying your email...</p>
          </div>
        </div>
      }
    >
      <VerifyEmailClient />
    </Suspense>
  );
}
