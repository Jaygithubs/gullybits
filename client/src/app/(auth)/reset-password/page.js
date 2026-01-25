import { Suspense } from "react";
import ResetPasswordClient from "../../../components/auth/ResetPasswordClient";

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="page-center">
          <div className="card">Loading...</div>
        </div>
      }
    >
      <ResetPasswordClient />
    </Suspense>
  );
}
