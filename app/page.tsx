"use client";

import { useState, useEffect } from "react";
import { Asset, AssetsData } from "@/lib/types";
import AssetGrid from "@/components/AssetGrid";
import AssetModal from "@/components/AssetModal";

export default function Home() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const response = await fetch("/assets.json");
        if (!response.ok) throw new Error("Failed to load assets");
        const data: AssetsData = await response.json();
        setAssets(data.assets);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchAssets();
  }, []);

  return (
    <main className="min-h-screen bg-dark-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-dark-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">
            Inevitable Spot
          </h1>
          <p className="text-gray-400 mt-2">Asset Review</p>
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              <p className="mt-4 text-gray-400">Loading assets...</p>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-900/20 border border-red-700 rounded-lg p-6">
            <p className="text-red-200">Error: {error}</p>
          </div>
        )}

        {!loading && !error && assets.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No assets found.</p>
          </div>
        )}

        {!loading && !error && assets.length > 0 && (
          <>
            <div className="mb-8">
              <p className="text-gray-400">
                {assets.length} asset{assets.length !== 1 ? "s" : ""} available
              </p>
            </div>
            <AssetGrid assets={assets} onSelectAsset={setSelectedAsset} />
          </>
        )}
      </div>

      {/* Modal */}
      <AssetModal asset={selectedAsset} onClose={() => setSelectedAsset(null)} />
    </main>
  );
}
