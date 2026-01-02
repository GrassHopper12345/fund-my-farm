"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { campaignsApi } from "@/lib/api";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function BrowsePage() {
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadCampaigns();
  }, []);

  const loadCampaigns = async () => {
    try {
      setLoading(true);
      const response = await campaignsApi.getAll();
      if (response.data) {
        // Deduplicate campaigns by ID (in case API returns duplicates)
        const uniqueCampaigns = response.data.filter(
          (campaign, index, self) =>
            index === self.findIndex((c) => c.id === campaign.id)
        );
        setCampaigns(uniqueCampaigns);
      }
    } catch (error) {
      console.error("Failed to load campaigns:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCampaigns = campaigns.filter((campaign) =>
    campaign.farm_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    campaign.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Browse Campaigns</h1>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search campaigns..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading campaigns...</p>
          </div>
        )}

        {/* Campaigns Grid */}
        {!loading && (
          <>
            {filteredCampaigns.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">
                  {searchTerm ? "No campaigns match your search." : "No campaigns available."}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCampaigns.map((campaign) => (
                  <Card key={campaign.id} className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {campaign.farm_name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {campaign.description || "No description available."}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {campaign.products?.length || 0} products
                      </span>
                      <Link href={`/campaigns/${campaign.id}`}>
                        <Button size="sm" variant="primary">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
