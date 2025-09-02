import React, { useState } from "react";
import { motion } from "framer-motion";

interface FormData {
    name: string;
    email: string;
    password: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    password?: string;
}

const FormValidationDemo: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [focusField, setFocusField] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));

        setErrors(prev => {
            const newErrors = { ...prev };

            if (name === "name") {
                if (!value.trim()) newErrors.name = "Name is required";
                else delete newErrors.name;
            }

            if (name === "email") {
                if (!value.includes("@")) newErrors.email = "Invalid email";
                else delete newErrors.email;
            }

            if (name === "password") {
                if (value.length < 6) newErrors.password = "Password too short";
                else delete newErrors.password;
            }

            return newErrors;
        });
    };

    const handleFocus = (field: string) => setFocusField(field);
    const handleBlur = () => setFocusField(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Object.keys(errors).length === 0 && formData.name && formData.email && formData.password) {
            setSubmitted(true);
        } else {
            setSubmitted(false);
            alert("Please fix errors before submitting");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-lg">
            <motion.h1
                className="text-2xl font-bold mb-6 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Form Validation Demo
            </motion.h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                {["name", "email", "password"].map(field => (
                    <div key={field} className="relative">
                        <input
                            type={field === "password" ? "password" : "text"}
                            name={field}
                            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                            value={formData[field as keyof FormData]}
                            onChange={handleChange}
                            onFocus={() => handleFocus(field)}
                            onBlur={handleBlur}
                            className={`w-full p-2 border rounded transition-colors ${focusField === field
                                    ? "border-blue-400 ring-2 ring-blue-200"
                                    : "border-gray-300"
                                }`}
                        />
                        {errors[field as keyof FormErrors] && (
                            <motion.p
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-500 text-sm mt-1"
                            >
                                {errors[field as keyof FormErrors]}
                            </motion.p>
                        )}
                    </div>
                ))}

                <button
                    type="submit"
                    className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
                >
                    Submit
                </button>
            </form>

            {submitted && (
                <motion.p
                    className="mt-4 text-center text-green-600 font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Form submitted successfully!
                </motion.p>
            )}
        </div>
    );
};

export default FormValidationDemo;
