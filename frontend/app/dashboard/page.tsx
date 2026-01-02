"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authApi } from "@/lib/api";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Link from "next/link";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [investments, setInvestments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      setLoading(true);
      
      // First check if user is authenticated
      const userResponse = await authApi.getMe();
      
      // Check if user is authenticated
      if (userResponse.message === "Not authenticated" || !userResponse.data) {
        router.push("/login");
        return;
      }

      // If authenticated, load the rest of the data
      setUser(userResponse.data);
      
      const [campaignsResponse, investmentsResponse] = await Promise.all([
        authApi.getMyCampaigns(),
        authApi.getMyInvestments(),
      ]);

      if (campaignsResponse.data) {
        setCampaigns(campaignsResponse.data);
      }
      if (investmentsResponse.data) {
        setInvestments(investmentsResponse.data);
      }
    } catch (error: any) {
      // Only redirect if it's an auth error, not other errors
      if (error.message?.includes("401") || error.message?.includes("Not authenticated")) {
        router.push("/login");
      } else {
        console.error("Failed to load dashboard:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>

        {/* Account Info */}
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Account Information</h2>
          <div className="space-y-2">
            <p className="text-gray-600">
              <span className="font-medium">Name:</span> {user?.name || "N/A"}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Email:</span> {user?.email || "N/A"}
            </p>
          </div>
        </Card>

        {/* My Campaigns */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">My Campaigns</h2>
            <Link href="/browse">
              <Button variant="outline" size="sm">
                Browse All
              </Button>
            </Link>
          </div>
          {campaigns.length === 0 ? (
            <Card className="p-6">
              <p className="text-gray-600">You haven't created any campaigns yet.</p>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campaigns.map((campaign) => (
                <Card key={campaign.id} className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {campaign.farm_name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {campaign.description || "No description."}
                  </p>
                  <Link href={`/campaigns/${campaign.id}`}>
                    <Button size="sm" variant="primary">
                      View Details
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* My Investments */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">My Investments</h2>
          {investments.length === 0 ? (
            <Card className="p-6">
              <p className="text-gray-600">You haven't made any investments yet.</p>
              <Link href="/browse">
                <Button variant="primary" size="sm" className="mt-4">
                  Browse Campaigns
                </Button>
              </Link>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {investments.map((investment) => (
                <Card key={investment.id} className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Investment #{investment.id}
                  </h3>
                  <p className="text-gray-600">Amount: ${investment.amount}</p>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
