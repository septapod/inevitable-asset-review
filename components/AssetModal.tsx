"use client";

import { Asset } from "@/lib/types";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface AssetModalProps {
  asset: Asset | null;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

export default function AssetModal({
  asset,
  onClose,
  onNext,
  onPrevious,
  hasNext = false,
  hasPrevious = false,
}: AssetModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
      if (e.key === "ArrowRight" && hasNext && onNext) {
        onNext();
      }
      if (e.key === "ArrowLeft" && hasPrevious && onPrevious) {
        onPrevious();
      }
    };

    if (asset) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [asset, onClose, onNext, onPrevious, hasNext, hasPrevious]);

  if (!asset) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    >
      <div className="relative w-full max-w-7xl max-h-[95vh] bg-dark-800 rounded-xl overflow-hidden shadow-2xl">
        {/* Previous button */}
        {hasPrevious && (
          <button
            onClick={onPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors disabled:opacity-50"
            aria-label="Previous asset"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {/* Next button */}
        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors disabled:opacity-50"
            aria-label="Next asset"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          aria-label="Close modal"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row gap-8 p-8 h-full">
          {/* Asset display */}
          <div className="flex-1 flex items-center justify-center bg-black/30 rounded-lg overflow-hidden min-h-[500px]">
            {asset.type === "video" && (
              <video
                ref={videoRef}
                src={asset.filename}
                controls
                autoPlay
                className="w-full h-full max-h-[600px] lg:max-h-full object-contain"
              />
            )}

            {asset.type === "image" && (
              <div className="relative w-full h-full">
                <Image
                  src={asset.filename}
                  alt={asset.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              </div>
            )}
          </div>

          {/* Info panel */}
          <div className="w-full lg:w-96 flex flex-col justify-between">
            {/* Top section */}
            <div>
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                Asset {asset.id}
              </p>
              <h2 className="text-4xl font-bold text-white mt-3 mb-2">
                {asset.title}
              </h2>
              <div className="flex gap-3 mt-5">
                <span className="inline-block px-4 py-2 text-sm font-semibold uppercase tracking-wider bg-white text-dark-900 rounded">
                  {asset.type}
                </span>
              </div>
            </div>

            {/* Comments section */}
            <div className="mt-10 pt-8 border-t border-gray-700">
              <h3 className="text-base font-semibold text-gray-300 uppercase tracking-wider mb-4">
                Comments
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                {asset.comments}
              </p>
            </div>

            {/* File info */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-500">
                File: <span className="text-gray-400 break-all text-xs">{asset.filename.split('/').pop()}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
