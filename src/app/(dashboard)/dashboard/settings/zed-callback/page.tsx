"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, Button } from "@/shared/components";
import { useNotificationStore } from "@/store/notificationStore";

export default function ZedCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const notify = useNotificationStore();
  const [status, setStatus] = useState("Exchanging authorization code...");

  useEffect(() => {
    const code = searchParams.get("code");
    if (!code) {
      setStatus("Error: No authorization code found in URL.");
      notify.error("Invalid OAuth callback: missing code.");
      return;
    }

    const clientId = sessionStorage.getItem("zed_oauth_client_id");
    const clientSecret = sessionStorage.getItem("zed_oauth_client_secret") || "";

    if (!clientId) {
      setStatus("Error: Client ID lost from session.");
      notify.error("Session expired. Please try connecting again.");
      return;
    }

    const redirectUri = window.location.origin + "/dashboard/settings/zed-callback";

    fetch("/api/zed/callback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, redirectUri, clientId, clientSecret }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStatus("Success! Redirecting...");
          notify.success(data.message || "Successfully authenticated with Zed IDE.");
          sessionStorage.removeItem("zed_oauth_client_id");
          sessionStorage.removeItem("zed_oauth_client_secret");
          setTimeout(() => {
            router.push(`/dashboard/providers/${data.providerId}`);
          }, 1500);
        } else {
          setStatus(`Failed: ${data.error}`);
          notify.error(data.error || "Failed to complete Zed OAuth.");
        }
      })
      .catch((err) => {
        setStatus(`Network Error: ${err.message}`);
        notify.error("Network error during Zed OAuth callback.");
      });
  }, [searchParams, router, notify]);

  return (
    <div className="max-w-2xl mx-auto py-12">
      <Card title="Zed IDE Authentication">
        <div className="flex flex-col items-center justify-center p-8 gap-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="text-text-main text-lg font-medium">{status}</p>
          <Button onClick={() => router.push("/dashboard/settings")} variant="secondary">
            Return to Settings
          </Button>
        </div>
      </Card>
    </div>
  );
}
