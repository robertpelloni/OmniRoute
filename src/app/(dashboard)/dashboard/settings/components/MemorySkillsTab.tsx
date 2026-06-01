"use client";

import { useState, useEffect, useCallback } from "react";
import { Card } from "@/shared/components";
import { useTranslations } from "next-intl";
import type { SkillsProvider } from "@/lib/skills/providerSettings";
=======
import { useState, useEffect } from "react";
import { Card } from "@/shared/components";
import { useTranslations } from "next-intl";
>>>>>>> Stashed changes

interface MemoryConfig {
  enabled: boolean;
  maxTokens: number;
  retentionDays: number;
  strategy: "recent" | "semantic" | "hybrid";
  skillsEnabled: boolean;
}

const STRATEGIES = [
  { value: "recent", labelKey: "recent", descKey: "recentDesc" },
  { value: "semantic", labelKey: "semantic", descKey: "semanticDesc" },
  { value: "hybrid", labelKey: "hybrid", descKey: "hybridDesc" },
];

export default function MemorySkillsTab() {
  const [config, setConfig] = useState<MemoryConfig>({
    enabled: true,
    maxTokens: 2000,
    retentionDays: 30,
    strategy: "hybrid",
    skillsEnabled: false,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");
  const [skillsmpApiKey, setSkillsmpApiKey] = useState("");
  const [skillsmpSaving, setSkillsmpSaving] = useState(false);
  const [skillsmpStatus, setSkillsmpStatus] = useState("");
  const [skillsProvider, setSkillsProvider] = useState<SkillsProvider>("skillsmp");
  const [skillsProviderSaving, setSkillsProviderSaving] = useState(false);
  const [skillsProviderStatus, setSkillsProviderStatus] = useState("");
  const t = useTranslations("settings");

  useEffect(() => {
    Promise.all([
      fetch("/api/settings/memory").then((res) => (res.ok ? res.json() : null)),
      fetch("/api/settings").then((res) => (res.ok ? res.json() : null)),
    ])
      .then(([memData, settingsData]) => {
        if (memData) setConfig(memData);
        if (settingsData?.skillsmpApiKey) {
          setSkillsmpApiKey(settingsData.skillsmpApiKey);
        }
        if (
          settingsData?.skillsProvider === "skillsmp" ||
          settingsData?.skillsProvider === "skillssh"
        ) {
          setSkillsProvider(settingsData.skillsProvider);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const saveSkillsmpApiKey = useCallback(async () => {
    setSkillsmpSaving(true);
    setSkillsmpStatus("");
    try {
      const res = await fetch("/api/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skillsmpApiKey }),
      });
      if (res.ok) {
        setSkillsmpStatus("saved");
        setTimeout(() => setSkillsmpStatus(""), 2000);
      } else {
        setSkillsmpStatus("error");
      }
    } catch {
      setSkillsmpStatus("error");
    } finally {
      setSkillsmpSaving(false);
    }
  }, [skillsmpApiKey]);

  const saveSkillsProvider = useCallback(async (provider: SkillsProvider) => {
    setSkillsProvider(provider);
    setSkillsProviderSaving(true);
    setSkillsProviderStatus("");
    try {
      const res = await fetch("/api/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skillsProvider: provider }),
      });
      if (res.ok) {
        setSkillsProviderStatus("saved");
        setTimeout(() => setSkillsProviderStatus(""), 2000);
      } else {
        setSkillsProviderStatus("error");
      }
    } catch {
      setSkillsProviderStatus("error");
    } finally {
      setSkillsProviderSaving(false);
    }
  }, []);

  const saveSkillsmpApiKey = useCallback(async () => {
    setSkillsmpSaving(true);
    setSkillsmpStatus("");
    try {
      const res = await fetch("/api/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skillsmpApiKey }),
      });
      if (res.ok) {
        setSkillsmpStatus("saved");
        setTimeout(() => setSkillsmpStatus(""), 2000);
      } else {
        setSkillsmpStatus("error");
      }
    } catch {
      setSkillsmpStatus("error");
    } finally {
      setSkillsmpSaving(false);
    }
  }, [skillsmpApiKey]);

  const save = async (updates: Partial<MemoryConfig>) => {
    const previousConfig = config;
    const newConfig = { ...config, ...updates };
    setConfig(newConfig);
    setSaving(true);
    setStatus("");
    try {
      const res = await fetch("/api/settings/memory", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newConfig),
      });
      if (res.ok) {
        const savedConfig = await res.json().catch(() => newConfig);
        setConfig(savedConfig);
        setStatus("saved");
        setTimeout(() => setStatus(""), 2000);
      } else {
        setConfig(previousConfig);
        setStatus("error");
      }
    } catch {
      setConfig(previousConfig);
      setStatus("error");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Card data-testid="memory-settings-card">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-violet-500/10 text-violet-500">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              psychology
            </span>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{t("memorySkillsTitle")}</h3>
            <p className="text-sm text-text-muted">{t("memorySkillsDesc")}</p>
          </div>
        </div>
        <div className="mt-4 text-sm text-text-muted">{t("loading")}...</div>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Memory Settings */}
      <Card>
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 rounded-lg bg-violet-500/10 text-violet-500">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              memory
            </span>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{t("memoryTitle")}</h3>
            <p className="text-sm text-text-muted">{t("memoryDesc")}</p>
          </div>
          {status === "saved" && (
            <span className="ml-auto text-xs font-medium text-emerald-500 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">check_circle</span>{" "}
              {t("saved")}
            </span>
          )}
        </div>

        {/* Enable toggle */}
        <div className="flex items-center justify-between p-4 rounded-lg bg-surface/30 border border-border/30 mb-4">
          <div>
            <p className="text-sm font-medium">{t("memoryEnabled")}</p>
            <p className="text-xs text-text-muted mt-0.5">{t("memoryEnabledDesc")}</p>
          </div>
          <button
            data-testid="memory-enabled-switch"
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              handyman
            </span>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{t("skillsTitle")}</h3>
            <p className="text-sm text-text-muted">{t("skillsDesc")}</p>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 rounded-lg bg-surface/30 border border-border/30">
          <div>
            <p className="text-sm font-medium">{t("skillsEnabled")}</p>
            <p className="text-xs text-text-muted mt-0.5">{t("skillsEnabledDesc")}</p>
          </div>
          <button
<<<<<<< Updated upstream
            data-testid="skills-enabled-switch"
=======
            onClick={() => save({ skillsEnabled: !config.skillsEnabled })}
            disabled={saving}
            className={`relative w-11 h-6 rounded-full transition-colors ${
              config.skillsEnabled ? "bg-amber-500" : "bg-border"
            }`}
            role="switch"
            aria-checked={config.skillsEnabled}
          >
            <span
              className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                config.skillsEnabled ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </Card>
    </div>
  );
}
