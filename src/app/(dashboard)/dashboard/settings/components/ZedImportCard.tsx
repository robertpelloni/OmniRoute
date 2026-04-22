"use client";

import { useState } from "react";
import { Card, Button, Input } from "@/shared/components";
import { useNotificationStore } from "@/store/notificationStore";
import { useRouter } from "next/navigation";

export default function ZedImportCard() {
  const [loading, setLoading] = useState(false);
  const [clientId, setClientId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const notify = useNotificationStore();
  const router = useRouter();

    const handleOAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientId) {
      notify.error("Please enter a Client ID to begin OAuth flow.");
      return;
    }

    // Typical OAuth flow redirect
    // We navigate away to zed authorization endpoint.
    // The redirect URI needs to be handled by a page route, but we will mock it
    // or point it to a callback page which handles the `code` exchange using /api/zed/callback.

    // Storing credentials temporarily (e.g. session storage) to use in the callback page,
    // Note: In real production, the backend should securely manage state and PKCE, but per our scope:
    sessionStorage.setItem("zed_oauth_client_id", clientId);
    if (clientSecret) {
      sessionStorage.setItem("zed_oauth_client_secret", clientSecret);
    }

    const redirectUri = window.location.origin + "/dashboard/settings/zed-callback";
    const authUrl = `https://zed.dev/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code`;

    window.location.href = authUrl;
  };

  const handleKeychainImport = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/providers/zed/import", { method: "POST" });
      const data = await res.json();

      if (res.ok && data.success) {
        if (data.count > 0) {
          notify.success(`Successfully imported ${data.count} credentials from Zed IDE.`);
        } else {
          notify.info("No credentials found in Zed IDE keychain.");
        }
      } else {
        notify.error(data.error || "Failed to import credentials from Zed IDE.");
      }
    } catch (error) {
      notify.error("Network error while trying to import from Zed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card title="Import authentication keys directly from Zed IDE">
      <div className="flex flex-col gap-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-4">
            <div className="p-3 rounded-lg bg-orange-500/10 text-orange-500 h-fit">
              <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
                data_object
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Zed IDE Integration</h3>
              <p className="text-sm text-text-muted max-w-[500px]">
                OmniRoute can securely scan your system keychain to import API keys or initiate an
                OAuth credential exchange directly with Zed IDE.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-border">
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-text-main">Local Keychain Import</h4>
            <p className="text-xs text-text-muted mb-2">
              Import existing tokens securely from your system keychain.
            </p>
            <Button
              onClick={handleKeychainImport}
              disabled={loading}
              icon={loading ? "sync" : "download"}
              className={loading ? "animate-pulse w-max" : "w-max"}
              variant="secondary"
            >
              {loading ? "Scanning..." : "Scan Keychain"}
            </Button>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-text-main">OAuth Integration</h4>
            <p className="text-xs text-text-muted mb-2">
              Enter your Zed IDE credentials to connect.
            </p>
            <form onSubmit={handleOAuthSubmit} className="flex flex-col gap-3">
              <Input
                placeholder="Client ID"
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
                disabled={loading}
                required
              />
              <Input
                type="password"
                placeholder="Client Secret"
                value={clientSecret}
                onChange={(e) => setClientSecret(e.target.value)}
                disabled={loading}
                required
              />
              <Button
                type="submit"
                disabled={loading}
                icon="vpn_key"
                className="w-full justify-center"
              >
                {loading ? "Connecting..." : "Connect Account"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Card>
  );
}
