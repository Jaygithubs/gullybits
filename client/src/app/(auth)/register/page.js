"use client";

import { useState } from "react";
import { authService } from "../../../services/auth.service";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: {
      street: "",
      city: "",
      pincode: "",
    },
    role: "Customer",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (["street", "city", "pincode"].includes(name)) {
      setForm({
        ...form,
        address: { ...form.address, [name]: value },
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      
      const res = await authService.register(form);
      const data = await res.data;
      if (!data.success) throw new Error(data.message);
      alert("Registered successfully! Please verify your email.");
      router.push("/login");
    } catch (err) {
      alert(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-center">
      <div className="card w-full max-w-md">
        <h1 className="text-2xl font-bold text-primary mb-6">
          Create Account
        </h1>

        <form onSubmit={submit}>
          <input className="input" name="name" placeholder="Full Name" onChange={handleChange} required />
          <input className="input" name="email" type="email" placeholder="Email" onChange={handleChange} required />
          <input className="input" name="password" type="password" placeholder="Password" onChange={handleChange} required />
          <input className="input" name="phone" placeholder="Phone" onChange={handleChange} required />

          <input className="input" name="street" placeholder="Street" onChange={handleChange} />
          <input className="input" name="city" placeholder="City" onChange={handleChange} />
          <input className="input" name="pincode" placeholder="Pincode" onChange={handleChange} />

          <select className="input" name="role" onChange={handleChange}>
            <option value="Customer">Customer</option>
            <option value="Vendor">Vendor</option>
            <option value="Delivery">Delivery</option>
          </select>

          <button className="btn-primary" disabled={loading}>
            {loading ? "Please wait..." : "Register"}
          </button>
        </form>

        <p className="text-sm text-muted mt-4 text-center">
          Already have an account?{" "}
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
