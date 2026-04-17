"use client";

import { useState } from "react";
import { Card, Button, Input } from "@/shared/components";
import { useNotificationStore } from "@/store/notificationStore";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function SettingsTab() {
  const { tab } = useParams();
  const notify = useNotificationStore();
  const [loading, setLoading] = useState(false);
  const [clientId, setClientId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const handleZedImport = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/zed/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clientId, clientSecret }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        notify.success("Zed credentials imported successfully");
      } else {
        notify.error(data.error || "Failed to import Zed credentials");
      }
    } catch (err) {
      notify.error("Network error during Zed import");
    } finally {
      setLoading(false);
    }
  };

  if (tab !== "cli-tools") {
    return <div className="p-6">Content for {tab}</div>;
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <Card title="Connect Zed IDE">
        <div className="flex items-center gap-4 mb-4">
          <div className="size-12 rounded-xl bg-slate-800 flex items-center justify-center p-2">
            <span className="text-white font-bold text-xl">Z</span>
          </div>
          <div>
            <h2 className="text-xl font-bold">Zed IDE</h2>
            <p className="text-sm text-text-muted">Import your local Zed IDE OAuth credentials.</p>
          </div>
        </div>

        <div className="space-y-4">
          <Input
            label="Client ID (Optional)"
            placeholder="Enter Zed Client ID"
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
          />
          <Input
            label="Client Secret (Optional)"
            type="password"
            placeholder="Enter Zed Client Secret"
            value={clientSecret}
            onChange={(e) => setClientSecret(e.target.value)}
          />
          <Button onClick={handleZedImport} disabled={loading} icon="download">
            {loading ? "Importing..." : "Connect Zed"}
          </Button>
        </div>
      </Card>
    </div>
  );
}
