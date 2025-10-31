"use client";

import { Asset } from "@/lib/types";
import Image from "next/image";

interface AssetCardProps {
  asset: Asset;
  onSelect: (asset: Asset) => void;
}

export default function AssetCard({ asset, onSelect }: AssetCardProps) {
  const isVideo = asset.type === "video";
  const isImage = asset.type === "image";

  return (
    <button
      onClick={() => onSelect(asset)}
      className="group relative h-64 w-full overflow-hidden rounded-lg bg-dark-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
    >
      <div className="relative w-full h-full">
        {isImage && (
          <Image
            src={asset.filename}
            alt={asset.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}

        {isVideo && (
          <div className="w-full h-full bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center">
            <div className="text-center">
              <svg
                className="w-12 h-12 mx-auto mb-2 text-white group-hover:scale-125 transition-transform"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              <p className="text-sm text-gray-300">Video</p>
            </div>
          </div>
        )}
      </div>

      {/* Overlay info */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex flex-col justify-end p-4">
        <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
            Asset {asset.id}
          </p>
          <p className="text-sm font-medium text-white mt-1 line-clamp-2">
            {asset.title}
          </p>
        </div>
      </div>

      {/* Type badge */}
      <div className="absolute top-2 right-2">
        <span className="inline-block px-2 py-1 text-xs font-semibold uppercase tracking-wider bg-white text-dark-900 rounded">
          {asset.type}
        </span>
      </div>
    </button>
  );
}
