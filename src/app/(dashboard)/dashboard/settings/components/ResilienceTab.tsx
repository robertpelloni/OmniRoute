"use client";

<<<<<<< HEAD
import { type ReactNode, useEffect, useState } from "react";
import { Button, Card } from "@/shared/components";
import { useNotificationStore } from "@/store/notificationStore";

type RequestQueueSettings = {
  autoEnableApiKeyProviders: boolean;
  requestsPerMinute: number;
  minTimeBetweenRequestsMs: number;
  concurrentRequests: number;
  maxWaitMs: number;
};

type ConnectionCooldownProfileSettings = {
  baseCooldownMs: number;
  useUpstreamRetryHints: boolean;
  maxBackoffSteps: number;
};

type ProviderBreakerProfileSettings = {
  failureThreshold: number;
  resetTimeoutMs: number;
};

type WaitForCooldownSettings = {
  enabled: boolean;
  maxRetries: number;
  maxRetryWaitSec: number;
};

type ResilienceResponse = {
  requestQueue: RequestQueueSettings;
  connectionCooldown: {
    oauth: ConnectionCooldownProfileSettings;
    apikey: ConnectionCooldownProfileSettings;
  };
  providerBreaker: {
    oauth: ProviderBreakerProfileSettings;
    apikey: ProviderBreakerProfileSettings;
  };
  waitForCooldown: WaitForCooldownSettings;
};

function formatMs(value: number | null | undefined) {
  if (typeof value !== "number") return "—";
  return `${value}ms`;
}

function SectionDescription({
  scope,
  trigger,
  effect,
}: {
  scope: string;
  trigger: string;
  effect: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-2 text-xs text-text-muted sm:grid-cols-3">
      <div>
        <span className="font-semibold text-text-main">Scope:</span> {scope}
      </div>
      <div>
        <span className="font-semibold text-text-main">Trigger:</span> {trigger}
      </div>
      <div>
        <span className="font-semibold text-text-main">Effect:</span> {effect}
      </div>
    </div>
  );
}

function NumberField({
  label,
  value,
  suffix,
  min = 0,
  onChange,
}: {
  label: string;
  value: number;
  suffix?: string;
  min?: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs text-text-muted">{label}</span>
      <div className="flex items-center gap-2">
        <input
          type="number"
          min={min}
          value={value}
          onChange={(event) => {
            if (event.target.value === "") return;
            const nextValue = Number(event.target.value);
            if (Number.isFinite(nextValue)) {
              onChange(nextValue);
            }
          }}
          className="w-full rounded-lg border border-border bg-bg-subtle px-3 py-2 text-sm"
        />
        {suffix ? <span className="text-xs text-text-muted">{suffix}</span> : null}
      </div>
    </label>
  );
}

function BooleanField({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <label className="flex items-start justify-between gap-3 rounded-lg border border-border bg-bg-subtle px-3 py-3">
      <div>
        <div className="text-sm font-medium text-text-main">{label}</div>
        <div className="text-xs text-text-muted">{description}</div>
      </div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 size-4 rounded border-border"
      />
    </label>
  );
}

function ProfileColumn({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-bg-subtle p-4">
      <div className="mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-base text-primary">{icon}</span>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-text-main">{title}</h3>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function ActionRow({
  editing,
  saving,
  onEdit,
  onCancel,
  onSave,
}: {
  editing: boolean;
  saving: boolean;
  onEdit: () => void;
  onCancel: () => void;
  onSave: () => void;
}) {
  const tc = useTranslations("common");
  if (editing) {
    return (
      <div className="flex flex-wrap gap-2">
        <Button size="sm" variant="secondary" onClick={onCancel}>
          {tc("cancel")}
        </Button>
        <Button size="sm" variant="primary" icon="save" onClick={onSave} disabled={saving}>
          {tc("save")}
        </Button>
      </div>
=======
import { useState, useEffect, useCallback } from "react";
import { Card, Button } from "@/shared/components";
import { useNotificationStore } from "@/store/notificationStore";
import { useLocale, useTranslations } from "next-intl";
import AutoDisableCard from "./AutoDisableCard";

// ─── State colors and labels ──────────────────────────────────────────────
const STATE_STYLES = {
  CLOSED: {
    bg: "bg-emerald-500/15",
    text: "text-emerald-400",
    border: "border-emerald-500/30",
    icon: "check_circle",
  },
  OPEN: {
    bg: "bg-red-500/15",
    text: "text-red-400",
    border: "border-red-500/30",
    icon: "error",
  },
  HALF_OPEN: {
    bg: "bg-amber-500/15",
    text: "text-amber-400",
    border: "border-amber-500/30",
    icon: "warning",
  },
};

const CB_STATUS = {
  closed: { icon: "check_circle", color: "#22c55e" },
  "half-open": { icon: "pending", color: "#f59e0b" },
  open: { icon: "error", color: "#ef4444" },
};

function getBreakerStateLabel(state, t) {
  const normalized = String(state || "closed")
    .toLowerCase()
    .replaceAll("_", "-");
  if (normalized === "open") return t("breakerStateOpen");
  if (normalized === "half-open") return t("breakerStateHalfOpen");
  return t("breakerStateClosed");
}

function formatMs(ms) {
  if (!ms || ms <= 0) return "—";
  if (ms < 1000) return `${ms}ms`;
  if (ms < 60000) return `${(ms / 1000).toFixed(1)}s`;
  return `${(ms / 60000).toFixed(1)}m`;
}

function getErrorMessage(err, fallback) {
  return err instanceof Error && err.message ? err.message : fallback;
}

// ─── Provider Profiles Card ──────────────────────────────────────────────
function ProviderProfilesCard({ profiles, onSave, saving }) {
  const [editMode, setEditMode] = useState(false);
  const [draft, setDraft] = useState(profiles);
  const t = useTranslations("settings");
  const tc = useTranslations("common");

  useEffect(() => {
    setDraft(profiles);
  }, [profiles]);

  const formatMsRaw = (value) => (value == null ? "—" : `${value}${t("ms")}`);
  const fields = [
    { key: "transientCooldown", label: t("transientCooldown"), format: formatMsRaw },
    { key: "rateLimitCooldown", label: t("rateLimitCooldown"), format: formatMsRaw },
    { key: "maxBackoffLevel", label: t("maxBackoffLevel") },
    {
      key: "circuitBreakerThreshold",
      label: t("cbThreshold"),
      format: (value) => (value == null ? "—" : t("failures", { count: value })),
    },
    { key: "circuitBreakerReset", label: t("cbResetTime"), format: formatMsRaw },
  ];

  const handleSave = () => {
    // Only send 'oauth' and 'apikey' — the API schema rejects any other keys (e.g. 'local')
    const { oauth, apikey } = draft ?? {};
    onSave({ ...(oauth ? { oauth } : {}), ...(apikey ? { apikey } : {}) });
    setEditMode(false);
  };

  return (
    <Card className="p-0 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-xl text-primary" aria-hidden="true">
              tune
            </span>
            <h2 className="text-lg font-bold">{t("providerProfiles")}</h2>
          </div>
          {editMode ? (
            <div className="flex flex-wrap justify-end gap-2">
              <Button size="sm" variant="secondary" onClick={() => setEditMode(false)}>
                {tc("cancel")}
              </Button>
              <Button
                size="sm"
                variant="primary"
                icon="save"
                onClick={handleSave}
                disabled={saving}
              >
                {tc("save")}
              </Button>
            </div>
          ) : (
            <Button size="sm" variant="secondary" icon="edit" onClick={() => setEditMode(true)}>
              {tc("edit")}
            </Button>
          )}
        </div>

        <p className="text-sm text-text-muted mb-4">{t("providerProfilesDesc")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["oauth", "apikey"].map((type) => (
            <div key={type} className="rounded-lg bg-black/5 dark:bg-white/5 p-4">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-base" aria-hidden="true">
                  {type === "oauth" ? "lock" : "key"}
                </span>
                {type === "oauth" ? t("oauthProviders") : t("apiKeyProviders")}
              </h3>
              <div className="space-y-2">
                {fields.map(({ key, label, format }) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-xs text-text-muted">{label}</span>
                    {editMode ? (
                      <input
                        type="number"
                        min="0"
                        value={draft?.[type]?.[key] ?? 0}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            [type]: { ...draft[type], [key]: Number(e.target.value) },
                          })
                        }
                        className="w-24 px-2 py-1 text-xs rounded bg-white/10 border border-white/20 text-right"
                      />
                    ) : (
                      <span className="text-sm font-mono">
                        {format
                          ? format(profiles?.[type]?.[key])
                          : (profiles?.[type]?.[key] ?? "—")}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

// ─── Editable Rate Limit Card ─────────────────────────────────────────────
function RateLimitCard({ rateLimitStatus, defaults, onSaveDefaults, saving }) {
  const [editMode, setEditMode] = useState(false);
  const [draft, setDraft] = useState(defaults || {});
  const t = useTranslations("settings");
  const tc = useTranslations("common");

  // Sync draft when defaults change from parent (standard prop-to-state sync)
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (defaults) setDraft(defaults);
  }, [defaults]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const handleSave = () => {
    onSaveDefaults(draft);
    setEditMode(false);
  };

  return (
    <Card className="p-0 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-xl text-primary" aria-hidden="true">
              speed
            </span>
            <h2 className="text-lg font-bold">{t("rateLimiting")}</h2>
          </div>
          {editMode ? (
            <div className="flex gap-2">
              <Button size="sm" variant="secondary" onClick={() => setEditMode(false)}>
                {tc("cancel")}
              </Button>
              <Button
                size="sm"
                variant="primary"
                icon="save"
                onClick={handleSave}
                disabled={saving}
              >
                {tc("save")}
              </Button>
            </div>
          ) : (
            <Button size="sm" variant="secondary" icon="edit" onClick={() => setEditMode(true)}>
              {tc("edit")}
            </Button>
          )}
        </div>

        <p className="text-sm text-text-muted mb-4">{t("rateLimitingDesc")}</p>

        <div className="rounded-lg bg-black/5 dark:bg-white/5 p-4 mb-4">
          <h3 className="text-xs font-bold uppercase tracking-wider mb-3 text-text-muted">
            {t("defaultSafetyNet")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { key: "requestsPerMinute", label: t("rpm") },
              { key: "minTimeBetweenRequests", label: t("minGap"), format: formatMs },
              { key: "concurrentRequests", label: t("maxConcurrent") },
            ].map(({ key, label, format }) => (
              <div key={key}>
                {editMode ? (
                  <input
                    type="number"
                    min="1"
                    value={draft[key] ?? 0}
                    onChange={(e) =>
                      setDraft((prev) => ({ ...prev, [key]: parseInt(e.target.value) || 0 }))
                    }
                    className="w-full px-2 py-1 text-lg font-bold rounded bg-white/10 border border-white/20"
                  />
                ) : (
                  <div className="text-lg font-bold">
                    {format ? format(defaults?.[key]) : (defaults?.[key] ?? "—")}
                  </div>
                )}
                <div className="text-xs text-text-muted">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {rateLimitStatus && rateLimitStatus.length > 0 ? (
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">
              {t("activeLimiters")}
            </h3>
            {rateLimitStatus.map((rl, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2 px-3 rounded-lg bg-black/5 dark:bg-white/5"
              >
                <span className="text-sm font-medium">{rl.provider || rl.key}</span>
                <div className="flex items-center gap-3 text-xs text-text-muted">
                  {rl.reservoir != null && (
                    <span>
                      {t("reservoir")}: {rl.reservoir}
                    </span>
                  )}
                  {rl.running != null && (
                    <span>
                      {t("running")}: {rl.running}
                    </span>
                  )}
                  {rl.queued != null && (
                    <span>
                      {t("queued")}: {rl.queued}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-text-muted">{t("noActiveLimiters")}</p>
        )}
      </div>
    </Card>
  );
}

// ─── Circuit Breaker Card ────────────────────────────────────────────────
function CircuitBreakerCard({ breakers, onReset, loading }) {
  const activeBreakers = breakers.filter((b) => b.state !== "CLOSED");
  const totalBreakers = breakers.length;
  const t = useTranslations("settings");

  return (
    <Card className="p-0 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-xl text-primary" aria-hidden="true">
              electrical_services
            </span>
            <h2 className="text-lg font-bold">{t("circuitBreakers")}</h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-text-muted">
              {activeBreakers.length > 0
                ? t("tripped", { count: activeBreakers.length })
                : t("healthy", { count: totalBreakers })}
            </span>
            {activeBreakers.length > 0 && (
              <Button
                size="sm"
                variant="danger"
                icon="restart_alt"
                onClick={onReset}
                disabled={loading}
              >
                {t("resetAll")}
              </Button>
            )}
          </div>
        </div>

        {breakers.length === 0 ? (
          <p className="text-sm text-text-muted">{t("noCircuitBreakers")}</p>
        ) : (
          <div className="space-y-2">
            {breakers.map((b) => {
              const style = STATE_STYLES[b.state] || STATE_STYLES.CLOSED;
              return (
                <div
                  key={b.name}
                  className="flex items-center justify-between py-2 px-3 rounded-lg bg-black/5 dark:bg-white/5"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`material-symbols-outlined text-base ${style.text}`}
                      aria-hidden="true"
                    >
                      {style.icon}
                    </span>
                    <span className="text-sm font-medium">{b.name.replace("combo:", "")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {b.failureCount > 0 && (
                      <span className="text-xs text-text-muted">
                        {t("failures", { count: b.failureCount })}
                      </span>
                    )}
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${style.bg} ${style.text} border ${style.border}`}
                    >
                      {getBreakerStateLabel(b.state, t)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Card>
  );
}

// ─── Policies Panel (from Security tab) ──────────────────────────────────
function PoliciesCard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [unlocking, setUnlocking] = useState(null);
  const notify = useNotificationStore();
  const locale = useLocale();
  const t = useTranslations("settings");

  const fetchPolicies = useCallback(async () => {
    try {
      const res = await fetch("/api/policies");
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPolicies();
    const interval = setInterval(fetchPolicies, 15000);
    return () => clearInterval(interval);
  }, [fetchPolicies]);

  const handleUnlock = async (identifier) => {
    setUnlocking(identifier);
    try {
      const res = await fetch("/api/policies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "unlock", identifier }),
      });
      if (res.ok) {
        notify.success(t("unlockedIdentifier", { identifier }));
        await fetchPolicies();
      } else {
        notify.error(t("failedUnlock"));
      }
    } catch {
      notify.error(t("failedUnlock"));
    } finally {
      setUnlocking(null);
    }
  };

  const circuitBreakers = data?.circuitBreakers || [];
  const lockedIds = data?.lockedIdentifiers || [];
  const hasIssues = circuitBreakers.some((cb) => cb.state !== "closed") || lockedIds.length > 0;

  if (loading) {
    return (
      <Card className="p-6">
        <div className="flex items-center gap-2 text-text-muted animate-pulse">
          <span className="material-symbols-outlined text-[20px]">policy</span>
          {t("loadingPolicies")}
        </div>
      </Card>
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    );
  }

  return (
<<<<<<< HEAD
    <Button size="sm" variant="secondary" icon="edit" onClick={onEdit}>
      {tc("edit")}
    </Button>
  );
}

function RequestQueueCard({
  value,
  onSave,
  saving,
}: {
  value: RequestQueueSettings;
  onSave: (next: RequestQueueSettings) => Promise<void>;
  saving: boolean;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  useEffect(() => {
    setDraft(value);
  }, [value]);

  return (
    <Card className="p-6">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-xl text-primary">speed</span>
            <h2 className="text-lg font-bold">Request Queue &amp; Pacing</h2>
          </div>
          <SectionDescription
            scope="Per request bucket"
            trigger="Before a request is sent upstream"
            effect="Queues requests, limits concurrency, and spaces requests out"
          />
        </div>
        <ActionRow
          editing={editing}
          saving={saving}
          onEdit={() => setEditing(true)}
          onCancel={() => {
            setDraft(value);
            setEditing(false);
          }}
          onSave={async () => {
            await onSave(draft);
            setEditing(false);
          }}
        />
      </div>

      <p className="mb-4 text-sm text-text-muted">
        This layer only controls queueing and pacing. It does not write cooldowns or open breakers.
      </p>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        {editing ? (
          <>
            <BooleanField
              label="Auto-enable for API key providers"
              description="Enable queue protection by default for active API key connections."
              checked={draft.autoEnableApiKeyProviders}
              onChange={(autoEnableApiKeyProviders) =>
                setDraft((prev) => ({ ...prev, autoEnableApiKeyProviders }))
              }
            />
            <NumberField
              label="Requests per minute"
              value={draft.requestsPerMinute}
              min={1}
              onChange={(requestsPerMinute) => setDraft((prev) => ({ ...prev, requestsPerMinute }))}
            />
            <NumberField
              label="Min time between requests"
              value={draft.minTimeBetweenRequestsMs}
              suffix="ms"
              onChange={(minTimeBetweenRequestsMs) =>
                setDraft((prev) => ({ ...prev, minTimeBetweenRequestsMs }))
              }
            />
            <NumberField
              label="Concurrent requests"
              value={draft.concurrentRequests}
              min={1}
              onChange={(concurrentRequests) =>
                setDraft((prev) => ({ ...prev, concurrentRequests }))
              }
            />
            <NumberField
              label="Max queue wait"
              value={draft.maxWaitMs}
              min={1}
              suffix="ms"
              onChange={(maxWaitMs) => setDraft((prev) => ({ ...prev, maxWaitMs }))}
            />
          </>
        ) : (
          <>
            <div className="rounded-xl border border-border bg-bg-subtle p-4">
              <div className="text-xs text-text-muted">Auto-enable for API key providers</div>
              <div className="mt-1 text-sm font-semibold text-text-main">
                {value.autoEnableApiKeyProviders ? "Enabled" : "Disabled"}
              </div>
            </div>
            <div className="rounded-xl border border-border bg-bg-subtle p-4">
              <div className="text-xs text-text-muted">Requests per minute</div>
              <div className="mt-1 text-sm font-semibold text-text-main">
                {value.requestsPerMinute}
              </div>
            </div>
            <div className="rounded-xl border border-border bg-bg-subtle p-4">
              <div className="text-xs text-text-muted">Min time between requests</div>
              <div className="mt-1 text-sm font-semibold text-text-main">
                {formatMs(value.minTimeBetweenRequestsMs)}
              </div>
            </div>
            <div className="rounded-xl border border-border bg-bg-subtle p-4">
              <div className="text-xs text-text-muted">Concurrent requests</div>
              <div className="mt-1 text-sm font-semibold text-text-main">
                {value.concurrentRequests}
              </div>
            </div>
            <div className="rounded-xl border border-border bg-bg-subtle p-4">
              <div className="text-xs text-text-muted">Max queue wait</div>
              <div className="mt-1 text-sm font-semibold text-text-main">
                {formatMs(value.maxWaitMs)}
              </div>
            </div>
          </>
        )}
      </div>
    </Card>
  );
}

function ConnectionCooldownCard({
  value,
  onSave,
  saving,
}: {
  value: ResilienceResponse["connectionCooldown"];
  onSave: (next: ResilienceResponse["connectionCooldown"]) => Promise<void>;
  saving: boolean;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  useEffect(() => {
    setDraft(value);
  }, [value]);

  const renderProfile = (key: "oauth" | "apikey", title: string, icon: string) => {
    const current = editing ? draft[key] : value[key];
    return (
      <ProfileColumn title={title} icon={icon}>
        {editing ? (
          <>
            <NumberField
              label="Base cooldown"
              value={current.baseCooldownMs}
              min={0}
              suffix="ms"
              onChange={(baseCooldownMs) =>
                setDraft((prev) => ({ ...prev, [key]: { ...prev[key], baseCooldownMs } }))
              }
            />
            <BooleanField
              label="Use upstream retry hints"
              description="Use upstream retry-after/reset values when they are present."
              checked={current.useUpstreamRetryHints}
              onChange={(useUpstreamRetryHints) =>
                setDraft((prev) => ({
                  ...prev,
                  [key]: { ...prev[key], useUpstreamRetryHints },
                }))
              }
            />
            <NumberField
              label="Max backoff steps"
              value={current.maxBackoffSteps}
              min={0}
              onChange={(maxBackoffSteps) =>
                setDraft((prev) => ({ ...prev, [key]: { ...prev[key], maxBackoffSteps } }))
              }
            />
          </>
        ) : (
          <>
            <div className="flex items-center justify-between text-sm">
              <span className="text-text-muted">Base cooldown</span>
              <span className="font-mono text-text-main">{formatMs(current.baseCooldownMs)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-text-muted">Use upstream retry hints</span>
              <span className="font-mono text-text-main">
                {current.useUpstreamRetryHints ? "Yes" : "No"}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-text-muted">Max backoff steps</span>
              <span className="font-mono text-text-main">{current.maxBackoffSteps}</span>
            </div>
          </>
        )}
      </ProfileColumn>
    );
  };

  return (
    <Card className="p-6">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-xl text-primary">timer_off</span>
            <h2 className="text-lg font-bold">Connection Cooldown</h2>
          </div>
          <SectionDescription
            scope="Single connection"
            trigger="A connection returns a retryable upstream failure"
            effect="Temporarily skips that connection and increases backoff on repeated failures"
          />
        </div>
        <ActionRow
          editing={editing}
          saving={saving}
          onEdit={() => setEditing(true)}
          onCancel={() => {
            setDraft(value);
            setEditing(false);
          }}
          onSave={async () => {
            await onSave(draft);
            setEditing(false);
          }}
        />
      </div>

      <p className="mb-4 text-sm text-text-muted">
        Base cooldown covers retryable connection failures. When upstream retry hints are enabled,
        explicit provider wait windows override the local base cooldown.
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {renderProfile("oauth", "OAuth Providers", "lock")}
        {renderProfile("apikey", "API Key Providers", "key")}
      </div>
    </Card>
  );
}

function ProviderBreakerCard({
  value,
  onSave,
  saving,
}: {
  value: ResilienceResponse["providerBreaker"];
  onSave: (next: ResilienceResponse["providerBreaker"]) => Promise<void>;
  saving: boolean;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  useEffect(() => {
    setDraft(value);
  }, [value]);

  const renderProfile = (key: "oauth" | "apikey", title: string, icon: string) => {
    const current = editing ? draft[key] : value[key];
    return (
      <ProfileColumn title={title} icon={icon}>
        {editing ? (
          <>
            <NumberField
              label="Failure threshold"
              value={current.failureThreshold}
              min={1}
              onChange={(failureThreshold) =>
                setDraft((prev) => ({ ...prev, [key]: { ...prev[key], failureThreshold } }))
              }
            />
            <NumberField
              label="Reset timeout"
              value={current.resetTimeoutMs}
              min={1000}
              suffix="ms"
              onChange={(resetTimeoutMs) =>
                setDraft((prev) => ({ ...prev, [key]: { ...prev[key], resetTimeoutMs } }))
              }
            />
          </>
        ) : (
          <>
            <div className="flex items-center justify-between text-sm">
              <span className="text-text-muted">Failure threshold</span>
              <span className="font-mono text-text-main">{current.failureThreshold}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-text-muted">Reset timeout</span>
              <span className="font-mono text-text-main">{formatMs(current.resetTimeoutMs)}</span>
            </div>
          </>
        )}
      </ProfileColumn>
    );
  };

  return (
    <Card className="p-6">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-xl text-primary">
              electrical_services
            </span>
            <h2 className="text-lg font-bold">Provider Circuit Breaker</h2>
          </div>
          <SectionDescription
            scope="Whole provider"
            trigger="Provider-level final transport/server failures after connection fallback is exhausted"
            effect="Temporarily blocks that provider until the reset timeout elapses"
          />
        </div>
        <ActionRow
          editing={editing}
          saving={saving}
          onEdit={() => setEditing(true)}
          onCancel={() => {
            setDraft(value);
            setEditing(false);
          }}
          onSave={async () => {
            await onSave(draft);
            setEditing(false);
          }}
        />
      </div>

      <p className="mb-4 text-sm text-text-muted">
        Breaker runtime state is shown only on the Health page. Connection-scoped 429 rate limits
        stay in Connection Cooldown and do not trip the provider breaker.
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {renderProfile("oauth", "OAuth Providers", "lock")}
        {renderProfile("apikey", "API Key Providers", "key")}
      </div>
    </Card>
  );
}

function WaitForCooldownCard({
  value,
  onSave,
  saving,
}: {
  value: WaitForCooldownSettings;
  onSave: (next: WaitForCooldownSettings) => Promise<void>;
  saving: boolean;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  useEffect(() => {
    setDraft(value);
  }, [value]);

  return (
    <Card className="p-6">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-xl text-primary">hourglass_top</span>
            <h2 className="text-lg font-bold">Wait For Cooldown</h2>
          </div>
          <SectionDescription
            scope="Current client request"
            trigger="All candidate connections are already cooling down"
            effect="Waits on the server side and retries when the earliest cooldown expires"
          />
        </div>
        <ActionRow
          editing={editing}
          saving={saving}
          onEdit={() => setEditing(true)}
          onCancel={() => {
            setDraft(value);
            setEditing(false);
          }}
          onSave={async () => {
            await onSave(draft);
            setEditing(false);
          }}
        />
      </div>

      <p className="mb-4 text-sm text-text-muted">
        This only affects the current request. It does not write connection or provider state.
      </p>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        {editing ? (
          <>
            <BooleanField
              label="Enable server-side waiting"
              description="When enabled, OmniRoute waits for the earliest cooldown and retries automatically."
              checked={draft.enabled}
              onChange={(enabled) => setDraft((prev) => ({ ...prev, enabled }))}
            />
            <NumberField
              label="Max retries"
              value={draft.maxRetries}
              min={0}
              onChange={(maxRetries) => setDraft((prev) => ({ ...prev, maxRetries }))}
            />
            <NumberField
              label="Max retry wait"
              value={draft.maxRetryWaitSec}
              min={0}
              suffix="sec"
              onChange={(maxRetryWaitSec) => setDraft((prev) => ({ ...prev, maxRetryWaitSec }))}
            />
          </>
        ) : (
          <>
            <div className="rounded-xl border border-border bg-bg-subtle p-4">
              <div className="text-xs text-text-muted">Enable server-side waiting</div>
              <div className="mt-1 text-sm font-semibold text-text-main">
                {value.enabled ? "Enabled" : "Disabled"}
              </div>
            </div>
            <div className="rounded-xl border border-border bg-bg-subtle p-4">
              <div className="text-xs text-text-muted">Max retries</div>
              <div className="mt-1 text-sm font-semibold text-text-main">{value.maxRetries}</div>
            </div>
            <div className="rounded-xl border border-border bg-bg-subtle p-4">
              <div className="text-xs text-text-muted">Max retry wait</div>
              <div className="mt-1 text-sm font-semibold text-text-main">
                {value.maxRetryWaitSec}s
              </div>
            </div>
=======
    <Card className="p-0 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-xl text-primary" aria-hidden="true">
              policy
            </span>
            <h2 className="text-lg font-bold">{t("policiesLocked")}</h2>
          </div>
          {hasIssues && (
            <Button size="sm" variant="ghost" onClick={fetchPolicies}>
              <span className="material-symbols-outlined text-[16px]">refresh</span>
            </Button>
          )}
        </div>

        {!hasIssues ? (
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
              <span className="material-symbols-outlined text-[20px]">verified_user</span>
            </div>
            <div>
              <p className="text-sm text-text-muted">{t("allOperational")}</p>
            </div>
          </div>
        ) : (
          <>
            {/* Circuit Breakers */}
            {circuitBreakers.filter((cb) => cb.state !== "closed").length > 0 && (
              <div className="mb-4">
                <p className="text-sm font-medium text-text-muted mb-2">{t("circuitBreakers")}</p>
                <div className="flex flex-col gap-1.5">
                  {circuitBreakers
                    .filter((cb) => cb.state !== "closed")
                    .map((cb, i) => {
                      const status = CB_STATUS[cb.state] || CB_STATUS.open;
                      return (
                        <div
                          key={cb.name || i}
                          className="flex items-center justify-between px-3 py-2 rounded-lg bg-surface/30 border border-border/20"
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className="material-symbols-outlined text-[16px]"
                              style={{ color: status.color }}
                            >
                              {status.icon}
                            </span>
                            <span className="text-sm text-text-main font-medium">
                              {cb.name || cb.provider || t("unknown")}
                            </span>
                            <span
                              className="text-xs px-1.5 py-0.5 rounded-full"
                              style={{
                                backgroundColor: `${status.color}15`,
                                color: status.color,
                              }}
                            >
                              {getBreakerStateLabel(cb.state, t)}
                            </span>
                            {cb.failures > 0 && (
                              <span className="text-xs text-text-muted">
                                {t("failures", { count: cb.failures })}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}

            {/* Locked Identifiers */}
            {lockedIds.length > 0 && (
              <div>
                <p className="text-sm font-medium text-text-muted mb-2">{t("lockedIdentifiers")}</p>
                <div className="flex flex-col gap-1.5">
                  {lockedIds.map((id, i) => {
                    const identifier = typeof id === "string" ? id : id.identifier || id.id;
                    return (
                      <div
                        key={identifier || i}
                        className="flex items-center justify-between px-3 py-2 rounded-lg bg-surface/30 border border-border/20"
                      >
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[16px] text-red-400">
                            lock
                          </span>
                          <span className="font-mono text-sm text-text-main">{identifier}</span>
                          {typeof id === "object" && id.lockedAt && (
                            <span className="text-xs text-text-muted">
                              {t("sinceDate", {
                                date: new Date(id.lockedAt).toLocaleString(locale),
                              })}
                            </span>
                          )}
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleUnlock(identifier)}
                          disabled={unlocking === identifier}
                          className="text-xs"
                        >
                          {unlocking === identifier ? t("unlocking") : t("forceUnlock")}
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
          </>
        )}
      </div>
    </Card>
  );
}

<<<<<<< HEAD
export default function ResilienceTab() {
  const notify = useNotificationStore();
  const [data, setData] = useState<ResilienceResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [savingSection, setSavingSection] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const response = await fetch("/api/resilience");
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const json = await response.json();
        if (!mounted) return;
        setData({
          requestQueue: json.requestQueue,
          connectionCooldown: json.connectionCooldown,
          providerBreaker: json.providerBreaker,
          waitForCooldown: json.waitForCooldown,
        });
      } catch (error) {
        notify.error(error instanceof Error ? error.message : "Failed to load resilience settings");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    void load();
    return () => {
      mounted = false;
    };
  }, [notify]);

  const savePatch = async (section: string, payload: Record<string, unknown>) => {
    setSavingSection(section);
    try {
      const response = await fetch("/api/resilience", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await response.json();
      if (!response.ok) {
        throw new Error(json?.error?.message || json?.error || `HTTP ${response.status}`);
      }
      setData({
        requestQueue: json.requestQueue,
        connectionCooldown: json.connectionCooldown,
        providerBreaker: json.providerBreaker,
        waitForCooldown: json.waitForCooldown,
      });
      notify.success("Resilience settings updated.");
    } catch (error) {
      notify.error(error instanceof Error ? error.message : "Failed to save resilience settings");
      throw error;
    } finally {
      setSavingSection(null);
=======
// ─── Main Resilience Tab ─────────────────────────────────────────────────
export default function ResilienceTab() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const t = useTranslations("settings");

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/resilience");
      if (!res.ok) throw new Error(t("failedLoadWithStatus", { status: res.status }));
      const json = await res.json();
      setData(json);
      setError(null);
    } catch (err) {
      setError(getErrorMessage(err, t("failedLoadResilience")));
    } finally {
      setLoading(false);
    }
  }, [t]);

  useEffect(() => {
    loadData();
    // Auto-refresh every 10s
    const interval = setInterval(loadData, 10000);
    return () => clearInterval(interval);
  }, [loadData]);

  const handleResetBreakers = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/resilience/reset", { method: "POST" });
      if (!res.ok) throw new Error(t("resetFailed"));
      await loadData();
    } catch (err) {
      setError(getErrorMessage(err, t("resetFailed")));
    } finally {
      setLoading(false);
    }
  };

  const handleSaveProfiles = async (profiles) => {
    try {
      setSaving(true);
      const res = await fetch("/api/resilience", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profiles }),
      });
      if (!res.ok) throw new Error(t("saveFailed"));
      await loadData();
    } catch (err) {
      setError(getErrorMessage(err, t("saveFailed")));
    } finally {
      setSaving(false);
    }
  };

  const handleSaveDefaults = async (defaults) => {
    try {
      setSaving(true);
      const res = await fetch("/api/resilience", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ defaults }),
      });
      if (!res.ok) throw new Error(t("saveFailed"));
      await loadData();
    } catch (err) {
      setError(getErrorMessage(err, t("saveFailed")));
    } finally {
      setSaving(false);
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    }
  };

  if (loading && !data) {
    return (
<<<<<<< HEAD
      <Card className="p-6">
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <span className="material-symbols-outlined animate-spin">progress_activity</span>
          Loading resilience settings...
        </div>
      </Card>
    );
  }

  if (!data) {
    return (
      <Card className="p-6">
        <p className="text-sm text-text-muted">Unable to load resilience settings.</p>
=======
      <div className="flex items-center justify-center py-12 text-text-muted">
        <span className="material-symbols-outlined animate-spin mr-2">hourglass_empty</span>
        {t("loadingResilience")}
      </div>
    );
  }

  if (error && !data) {
    return (
      <Card className="p-6">
        <div className="flex items-center gap-2 text-red-400">
          <span className="material-symbols-outlined">error</span>
          <span className="text-sm">{error}</span>
        </div>
        <Button size="sm" variant="secondary" icon="refresh" onClick={loadData} className="mt-3">
          {t("retry")}
        </Button>
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      </Card>
    );
  }

  return (
<<<<<<< HEAD
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-start gap-3">
          <span className="material-symbols-outlined text-xl text-primary">info</span>
          <div>
            <h2 className="text-lg font-bold text-text-main">Resilience Structure</h2>
            <p className="mt-1 text-sm text-text-muted">
              This page only configures behavior. Live breaker state is shown on the Health page.
              Combo-specific retry and round-robin slot control remain on combo settings.
            </p>
          </div>
        </div>
      </Card>

      <RequestQueueCard
        value={data.requestQueue}
        saving={savingSection === "requestQueue"}
        onSave={(requestQueue) => savePatch("requestQueue", { requestQueue })}
      />
      />
      <ProviderBreakerCard
        value={data.providerBreaker}
        saving={savingSection === "providerBreaker"}
        onSave={(providerBreaker) => savePatch("providerBreaker", { providerBreaker })}
      />
      <WaitForCooldownCard
        value={data.waitForCooldown}
        saving={savingSection === "waitForCooldown"}
        onSave={(waitForCooldown) => savePatch("waitForCooldown", { waitForCooldown })}
      />
=======
    <div className="flex flex-col gap-6">
      {/* 1. Provider Profiles (resilience settings by auth type) */}
      <ProviderProfilesCard
        profiles={data?.profiles || {}}
        onSave={handleSaveProfiles}
        saving={saving}
      />
      {/* 1.5 Auto Disable Banned Accounts */}
      <AutoDisableCard />
      {/* 2. Rate Limiting (editable defaults + active limiters) */}
      <RateLimitCard
        rateLimitStatus={data?.rateLimitStatus || []}
        defaults={data?.defaults || {}}
        onSaveDefaults={handleSaveDefaults}
        saving={saving}
      />
      {/* 3. Circuit Breakers (combo pipeline) */}
      <CircuitBreakerCard
        breakers={data?.circuitBreakers || []}
        onReset={handleResetBreakers}
        loading={loading}
      />
      {/* 4. Policies & Locked Identifiers (from previous Security tab) */}
      <PoliciesCard />
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    </div>
  );
}
