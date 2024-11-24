"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { LoadingButton } from "@/components/ui/loading-button";
import { useNavigate } from "react-router-dom";

// Define the form validation schema
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type FormSchemaType = z.infer<typeof formSchema>;

const LoginForm = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchemaType) => {
    setLoading(true);
    console.log("Logging in...", data);

    // Simulate API call and redirect
    setTimeout(() => {
      setLoading(false);
      console.log("Login successful!");
      navigate("/"); // Redirect to dashboard
    }, 2000); // 2-second delay
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email")}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <PasswordInput
            id="password"
            placeholder="Password"
            {...register("password")}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>
        <LoadingButton
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md"
          loading={loading}
        >
          Login
        </LoadingButton>
      </form>
    </div>
  );
};

export default LoginForm;
