"use client";

import { useEffect } from "react";
import { syncPendingSales } from "@/lib/offlineQueue";

export function SyncOnOnline() {
  useEffect(() => {
    const run = () => syncPendingSales();
    window.addEventListener("online", run);
    run();
    return () => window.removeEventListener("online", run);
  }, []);

  return null;
}
