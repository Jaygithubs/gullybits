"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "../../../services/auth.service";
import { setToken } from "../../../utils/token";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      const res = await authService.login(form);
      const data = await res.data;
      console.log(data);
      if (!data.success) throw new Error(data.message);
      setToken(data.Token);
      router.push("/dashboard");
    } catch (err) {
      console.log(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-center">
      <div className="card w-full max-w-md">
        <h1 className="text-2xl font-bold text-primary mb-6">
          Login to GullyBits
        </h1>

        <form onSubmit={submit}>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          {/* Forgot Password */}
          <div className="text-right mb-4">
            <span
              className="text-sm text-primary cursor-pointer hover:underline"
              onClick={() => router.push("/forgot-password")}
            >
              Forgot password?
            </span>
          </div>

          <button className="btn-primary" disabled={loading}>
            {loading ? "Please wait..." : "Login"}
          </button>
        </form>

        <p className="text-sm text-muted mt-4 text-center">
          Don’t have an account?{" "}
          <span
            className="text-primary cursor-pointer font-medium"
            onClick={() => router.push("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>

  );
}
