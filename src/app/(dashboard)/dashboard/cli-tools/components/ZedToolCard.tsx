import { useState, useEffect } from "react";
import { Button, Input, Toggle } from "@/shared/components";
import { useNotificationStore } from "@/store/notificationStore";

export function ZedToolCard({ tool, isExpanded, onToggle, connections }) {
  const notify = useNotificationStore();
  const [loading, setLoading] = useState(false);
  const [selectedKeyId, setSelectedKeyId] = useState("");

  const handleSave = async () => {
    if (!selectedKeyId) {
      notify.error("Please select an API Key to configure Zed");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`/api/cli-tools/zed/zed-import`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyId: selectedKeyId }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        notify.success("Successfully configured Zed IDE with the selected credential.");
      } else {
        notify.error(data.error || "Failed to configure Zed IDE");
      }
    } catch (err) {
      notify.error("Network error while trying to configure Zed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col border rounded-lg overflow-hidden border-border bg-bg-secondary transition-all">
      <div
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5"
        onClick={onToggle}
      >
        <div className="flex items-center gap-3">
          <div className="size-10 flex items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
            <span className="font-bold text-lg">Z</span>
          </div>
          <div>
            <h3 className="font-semibold text-text-main">{tool.name || "Zed IDE"}</h3>
            <p className="text-xs text-text-muted">
              Export proxy credentials directly to Zed IDE config.
            </p>
          </div>
        </div>
        <span
          className={`material-symbols-outlined text-text-muted transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
        >
          expand_more
        </span>
      </div>

      {isExpanded && (
        <div className="p-4 border-t border-border/50 bg-surface">
          <div className="space-y-4">
            <div className="bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 p-3 rounded-lg text-sm">
              This will write the selected API Key into your local{" "}
              <code>~/.config/zed/settings.json</code> file, mapping it to OmniRoute.
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">Select Proxy Key</label>
              <select
                value={selectedKeyId}
                onChange={(e) => setSelectedKeyId(e.target.value)}
                className="w-full bg-bg border border-border rounded-lg p-2.5 text-sm"
              >
                <option value="">-- Select an API Key --</option>
                {connections.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name || c.provider} ({c.authType})
                  </option>
                ))}
              </select>
            </div>

            <Button
              onClick={handleSave}
              disabled={loading || !selectedKeyId}
              className="w-full justify-center"
            >
              {loading ? "Writing to Zed Config..." : "Configure Zed"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
