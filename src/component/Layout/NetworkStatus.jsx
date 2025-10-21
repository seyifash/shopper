"use client";
import useNetworkStatus from "@/hooks/useNetworkStatus";

export default function NetworkStatusBanner() {
  const { isOnline, showStatus } = useNetworkStatus();

  if (!showStatus) return null;

  return (
    <div
      className={` w-full flex justify-center items-center text-sm pd fixed top-0 left-1/2 -translate-x-1/2 z-[9999] px-6 py-2 rounded-md text-white shadow-md transition-all duration-1000 ${
        isOnline ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {isOnline ? "You are back online ✅" : "You are offline ⚠️"}
    </div>
  );
}
