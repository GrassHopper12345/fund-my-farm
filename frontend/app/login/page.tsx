"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authApi } from "@/lib/api";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await authApi.login(email, password);
      
      // Check if login was successful (has user data)
      if (response.data && response.data.id) {
        // Verify authentication works before redirecting
        try {
          await new Promise((resolve) => setTimeout(resolve, 300));
          const authCheck = await authApi.getMe();
          if (authCheck.data) {
            window.location.href = "/dashboard";
          } else {
            setError("Login succeeded but session not set. Please try again.");
            setLoading(false);
          }
        } catch (authErr) {
          setError("Login succeeded but authentication failed. Please try again.");
          setLoading(false);
        }
      } else {
        setError("Login succeeded but authentication failed. Please try again.");
        setLoading(false);
      }
    } catch (err: any) {
      setError(err.message || "Login failed. Please check your credentials.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Login</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            id="email"
            autoComplete="email"
          />
          
          <Input
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            id="password"
            autoComplete="current-password"
          />

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <Button type="submit" variant="primary" className="w-full" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-600 hover:text-blue-800">
            Sign up
          </Link>
        </p>
      </Card>
    </div>
  );
}
