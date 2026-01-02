"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { campaignsApi } from "@/lib/api";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function CampaignDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [campaign, setCampaign] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadCampaign();
    }
  }, [id]);

  const loadCampaign = async () => {
    try {
      setLoading(true);
      const response = await campaignsApi.getById(id);
      if (response.data) {
        setCampaign(response.data);
      }
    } catch (error) {
      console.error("Failed to load campaign:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">Loading campaign details...</p>
        </div>
      </div>
    );
  }

  if (!campaign) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">Campaign not found.</p>
          <Link href="/browse">
            <Button className="mt-4">Back to Browse</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/browse">
          <Button variant="outline" size="sm" className="mb-6">
            ← Back to Browse
          </Button>
        </Link>

        <Card className="p-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{campaign.farm_name}</h1>
          <p className="text-gray-600 mb-6">{campaign.description || "No description available."}</p>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Products</h2>
            {(() => {
              // Handle both 'products' (plural, array) and 'product' (singular, object or array)
              const products = campaign.products || (campaign.product ? (Array.isArray(campaign.product) ? campaign.product : [campaign.product]) : []);
              return products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {products.map((product: any) => (
                    <div key={product.id} className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900">{product.product_name}</h3>
                      <p className="text-gray-600">${product.price}</p>
                      <p className="text-sm text-gray-500">Stock: {product.stock}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">No products available for this campaign.</p>
              );
            })()}
          </div>

          <div className="mt-6 pt-6 border-t">
            <Button size="lg" variant="primary" className="w-full sm:w-auto">
              Invest in This Campaign
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
