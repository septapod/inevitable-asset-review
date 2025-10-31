"use client";

import { Asset } from "@/lib/types";
import AssetCard from "./AssetCard";

interface AssetGridProps {
  assets: Asset[];
  onSelectAsset: (asset: Asset) => void;
}

export default function AssetGrid({ assets, onSelectAsset }: AssetGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {assets.map((asset) => (
        <AssetCard
          key={asset.id}
          asset={asset}
          onSelect={onSelectAsset}
        />
      ))}
    </div>
  );
}
