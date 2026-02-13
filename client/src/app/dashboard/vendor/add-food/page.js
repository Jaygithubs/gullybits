'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { foodService } from "../../../../services/food.service";
import { useAuthStore } from "../../../../store/auth.store";

export default function AddFoodPage() {
    const router = useRouter();
    const vendor = useAuthStore((state) => state.user);

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        isAvailable: true,
    });

    const [imageFile, setImageFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const payload = new FormData();

            payload.append("name", formData.name);
            payload.append("description", formData.description);
            payload.append("price", formData.price);
            payload.append("category", formData.category);
            payload.append("isAvailable", formData.isAvailable);

            if (imageFile) {
                payload.append("image", imageFile);
            }

            await foodService.addNewFood(payload);

            router.push("/dashboard/vendor/foods");
        } catch (error) {
            console.error("Failed to add food:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto">
            <div className="card">
                <h1 className="text-xl font-bold text-[var(--color-primary)] mb-6">
                    Add New Food Item
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Food Name */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Food name"
                        className="input"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    {/* Description */}
                    <textarea
                        name="description"
                        placeholder="Food description"
                        className="input resize-none h-24"
                        value={formData.description}
                        onChange={handleChange}
                    />

                    {/* Price */}
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        className="input"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />

                    {/* Category */}
                    <input
                        type="text"
                        name="category"
                        placeholder="Category (e.g. Fast Food, Veg, Snacks)"
                        className="input"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    />

                    {/* Image Upload */}
                    <div>
                        <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
                            Food Image
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="
                block w-full text-sm text-[var(--color-muted)]
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:text-sm file:font-semibold
                file:bg-[var(--color-primary-light)]
                file:text-[var(--color-primary)]
                hover:file:bg-[var(--color-primary)]
                hover:file:text-white
              "
                        />
                    </div>

                    {/* Availability */}
                    <label className="flex items-center gap-3 text-sm text-[var(--color-text)]">
                        <input
                            type="checkbox"
                            name="isAvailable"
                            checked={formData.isAvailable}
                            onChange={handleChange}
                            className="accent-[var(--color-primary)]"
                        />
                        Available for order
                    </label>

                    {/* Actions */}
                    <div className="flex gap-4 pt-4">
                        <button
                            type="submit"
                            className="btn-primary"
                            disabled={loading}
                        >
                            {loading ? "Saving..." : "Add Food"}
                        </button>

                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="btn-secondary"
                        >
                            Cancel
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
