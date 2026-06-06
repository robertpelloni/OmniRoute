"use client";

import { useState, useEffect } from "react";
<<<<<<< HEAD
import { useTranslations } from "next-intl";
=======
import PropTypes from "prop-types";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
import Modal from "./Modal";
import Button from "./Button";

const ALL_PROXY_TYPES = [
  { value: "http", label: "HTTP" },
  { value: "https", label: "HTTPS" },
  { value: "socks5", label: "SOCKS5" },
];
const SOCKS5_UI_ENABLED = process.env.NEXT_PUBLIC_ENABLE_SOCKS5_PROXY === "true";
const PROXY_TYPES = SOCKS5_UI_ENABLED
  ? ALL_PROXY_TYPES
  : ALL_PROXY_TYPES.filter((type) => type.value !== "socks5");

<<<<<<< HEAD
type ProxyConfigLevel = "global" | "provider" | "combo" | "key";

type ProxyConfigModalProps = {
  isOpen: boolean;
  onClose: () => void;
  level: ProxyConfigLevel;
  levelId?: string;
  levelLabel?: string;
  onSaved?: () => void;
};

=======
const LEVEL_LABELS = {
  global: "Global",
  provider: "Provider",
  combo: "Combo",
  key: "Key",
  direct: "Direct (none)",
};

/**
 * ProxyConfigModal — Reusable proxy configuration modal for all 4 levels
 * @param {Object} props
 * @param {boolean} props.isOpen
 * @param {Function} props.onClose
 * @param {"global"|"provider"|"combo"|"key"} props.level
 * @param {string} [props.levelId] — providerId, comboId, or connectionId
 * @param {string} [props.levelLabel] — display name for the level
 * @param {Function} [props.onSaved] — callback after save
 */
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
export default function ProxyConfigModal({
  isOpen,
  onClose,
  level,
  levelId,
  levelLabel,
  onSaved,
<<<<<<< HEAD
}: ProxyConfigModalProps) {
  const t = useTranslations("proxyConfigModal");
=======
}: {
  isOpen: any;
  onClose: any;
  level: any;
  levelId?: any;
  levelLabel?: any;
  onSaved?: any;
}) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  const [mode, setMode] = useState("saved");
  const [savedProxies, setSavedProxies] = useState([]);
  const [selectedProxyId, setSelectedProxyId] = useState("");
  const [proxyType, setProxyType] = useState(PROXY_TYPES[0]?.value || "http");
  const [host, setHost] = useState("");
  const [port, setPort] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAuth, setShowAuth] = useState(false);
  const [saving, setSaving] = useState(false);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [inheritedFrom, setInheritedFrom] = useState(null);
  const [hasOwnProxy, setHasOwnProxy] = useState(false);
  const [formError, setFormError] = useState(null);

  const getDefaultPort = (type) => {
    if (type === "socks5") return "1080";
    if (type === "https") return "443";
    return "8080";
  };

  // Load existing proxy config when modal opens
  useEffect(() => {
    if (!isOpen) return;
    setTestResult(null);
    setFormError(null);
    setLoading(true);

    const loadProxy = async () => {
      try {
        let hasSavedAssignment = false;
        const registryRes = await fetch("/api/settings/proxies");
        if (registryRes.ok) {
          const registryPayload = await registryRes.json();
          setSavedProxies(Array.isArray(registryPayload?.items) ? registryPayload.items : []);
        } else {
          setSavedProxies([]);
        }

        const scope = level === "key" ? "account" : level;
        const assignmentParams = new URLSearchParams({ scope });
        if (level !== "global" && levelId) {
          assignmentParams.set("scopeId", levelId);
        }
        const assignmentRes = await fetch(`/api/settings/proxies/assignments?${assignmentParams}`);
        if (assignmentRes.ok) {
          const assignmentPayload = await assignmentRes.json();
          const items = Array.isArray(assignmentPayload?.items) ? assignmentPayload.items : [];
          const target = items[0];
          if (target?.proxyId) {
            setMode("saved");
            setSelectedProxyId(target.proxyId);
            setHasOwnProxy(true);
            hasSavedAssignment = true;
          } else {
            setMode("custom");
            setSelectedProxyId("");
          }
        }

        // Load own proxy
        const params = new URLSearchParams({ level });
        if (levelId) params.set("id", levelId);
        const res = await fetch(`/api/settings/proxy?${params}`);
        if (res.ok) {
          const data = await res.json();
          const proxy = data.proxy;
          if (proxy && proxy.host) {
            const normalizedType = String(proxy.type || "http").toLowerCase();
            const hasTypeOption = PROXY_TYPES.some((entry) => entry.value === normalizedType);
            setProxyType(hasTypeOption ? normalizedType : PROXY_TYPES[0]?.value || "http");
            setHost(proxy.host || "");
            setPort(proxy.port || "");
            setUsername(proxy.username || "");
            setPassword(proxy.password || "");
            setShowAuth(!!(proxy.username || proxy.password));
            setHasOwnProxy(true);
            if (normalizedType === "socks5" && !SOCKS5_UI_ENABLED) {
<<<<<<< HEAD
              setFormError(t("errorSocks5Hidden"));
=======
              setFormError(
                "SOCKS5 is configured but hidden because NEXT_PUBLIC_ENABLE_SOCKS5_PROXY=false."
              );
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
            }
            if (!hasSavedAssignment) setMode("custom");
          } else {
            resetFields();
            if (!hasSavedAssignment) {
              setHasOwnProxy(false);
            }
          }
        }

        // Check inherited proxy (for non-global levels)
        if (level !== "global" && levelId) {
          // Try to resolve the effective proxy to show inheritance info
          const fullConfig = await fetch("/api/settings/proxy");
          if (fullConfig.ok) {
            const config = await fullConfig.json();
            // Determine inheritance source
            if (level === "key") {
              // Check combo, provider, global
<<<<<<< HEAD
              if (config.global)
                setInheritedFrom({ level: t("levelGlobal"), proxy: config.global });
              // Provider info requires more context, showing global as fallback
            } else if (level === "combo") {
              if (config.global)
                setInheritedFrom({ level: t("levelGlobal"), proxy: config.global });
            } else if (level === "provider") {
              if (config.global)
                setInheritedFrom({ level: t("levelGlobal"), proxy: config.global });
=======
              if (config.global) setInheritedFrom({ level: "Global", proxy: config.global });
              // Provider info requires more context, showing global as fallback
            } else if (level === "combo") {
              if (config.global) setInheritedFrom({ level: "Global", proxy: config.global });
            } else if (level === "provider") {
              if (config.global) setInheritedFrom({ level: "Global", proxy: config.global });
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
            }
          }
        }
      } catch (error) {
        console.error("Error loading proxy config:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProxy();
  }, [isOpen, level, levelId]);

  const resetFields = () => {
    setProxyType(PROXY_TYPES[0]?.value || "http");
    setHost("");
    setPort("");
    setUsername("");
    setPassword("");
    setShowAuth(false);
    setFormError(null);
  };

  const handleSave = async () => {
    if (mode === "saved" && !selectedProxyId) {
<<<<<<< HEAD
      setFormError(t("errorSelectSavedProxy"));
      return;
    }
    if (mode === "custom" && !String(host || "").trim()) return;
=======
      setFormError("Select a saved proxy before saving.");
      return;
    }
    if (mode === "custom" && !host.trim()) return;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    setFormError(null);
    setSaving(true);
    try {
      const scope = level === "key" ? "account" : level;
      let res;
      if (mode === "saved") {
        res = await fetch("/api/settings/proxies/assignments", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            scope,
            scopeId: level === "global" ? null : levelId,
            proxyId: selectedProxyId,
          }),
        });

        if (res.ok) {
          const clearParams = new URLSearchParams({ level });
          if (levelId) clearParams.set("id", levelId);
          await fetch(`/api/settings/proxy?${clearParams.toString()}`, { method: "DELETE" });
        }
      } else {
        const clearAssignmentRes = await fetch("/api/settings/proxies/assignments", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            scope,
            scopeId: level === "global" ? null : levelId,
            proxyId: null,
          }),
        });
        const clearAssignmentPayload = await clearAssignmentRes.json().catch(() => ({}));
        if (!clearAssignmentRes.ok) {
<<<<<<< HEAD
          setFormError(clearAssignmentPayload?.error?.message || t("errorClearSavedProxy"));
=======
          setFormError(clearAssignmentPayload?.error?.message || "Failed to clear saved proxy");
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
          return;
        }

        const proxy = {
          type: proxyType,
<<<<<<< HEAD
          host: String(host || "").trim(),
          port: String(port || "").trim() || getDefaultPort(proxyType),
          username: String(username || "").trim(),
          password: String(password || "").trim(),
=======
          host: host.trim(),
          port: port.trim() || getDefaultPort(proxyType),
          username: username.trim(),
          password: password.trim(),
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
        };
        res = await fetch("/api/settings/proxy", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ level, id: levelId, proxy }),
        });
      }
      const payload = await res.json().catch(() => ({}));
      if (!res.ok) {
<<<<<<< HEAD
        setFormError(payload?.error?.message || t("errorSaveProxy"));
=======
        setFormError(payload?.error?.message || "Failed to save proxy configuration");
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
        return;
      }
      setHasOwnProxy(true);
      if (mode === "custom") {
        setSelectedProxyId("");
      }
      onSaved?.();
      onClose();
    } catch (error) {
      console.error("Error saving proxy:", error);
<<<<<<< HEAD
      setFormError(error.message || t("errorSaveProxy"));
=======
      setFormError(error.message || "Failed to save proxy configuration");
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    } finally {
      setSaving(false);
    }
  };

  const handleClear = async () => {
    setFormError(null);
    setSaving(true);
    try {
      const scope = level === "key" ? "account" : level;
      await fetch("/api/settings/proxies/assignments", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          scope,
          scopeId: level === "global" ? null : levelId,
          proxyId: null,
        }),
      });

      const params = new URLSearchParams({ level });
      if (levelId) params.set("id", levelId);
      const res = await fetch(`/api/settings/proxy?${params}`, { method: "DELETE" });
      const payload = await res.json().catch(() => ({}));
      if (!res.ok) {
<<<<<<< HEAD
        setFormError(payload?.error?.message || t("errorClearProxy"));
=======
        setFormError(payload?.error?.message || "Failed to clear proxy configuration");
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
        return;
      }
      resetFields();
      setHasOwnProxy(false);
      setSelectedProxyId("");
      setTestResult(null);
      onSaved?.();
      onClose();
    } catch (error) {
      console.error("Error clearing proxy:", error);
<<<<<<< HEAD
      setFormError(error.message || t("errorClearProxy"));
=======
      setFormError(error.message || "Failed to clear proxy configuration");
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    } finally {
      setSaving(false);
    }
  };

  const handleTest = async () => {
    setFormError(null);
    setTesting(true);
    setTestResult(null);
    try {
      let proxy: {
        type: string;
        host: string;
        port: string;
        username?: string;
        password?: string;
      } | null = null;

      if (mode === "saved") {
        if (!selectedProxyId) {
<<<<<<< HEAD
          setFormError(t("errorSelectProxyFirst"));
=======
          setFormError("Select a saved proxy first.");
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
          setTesting(false);
          return;
        }
        const found = (savedProxies as any[]).find((p: any) => p.id === selectedProxyId);
        if (!found) {
<<<<<<< HEAD
          setFormError(t("errorProxyNotFound"));
=======
          setFormError("Selected proxy not found.");
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
          setTesting(false);
          return;
        }
        proxy = {
          type: found.type || "http",
          host: found.host || "",
          port: String(found.port || 8080),
        };
      } else {
<<<<<<< HEAD
        if (!String(host || "").trim()) {
=======
        if (!host.trim()) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
          setTesting(false);
          return;
        }
        proxy = {
          type: proxyType,
<<<<<<< HEAD
          host: String(host || "").trim(),
          port: String(port || "").trim() || getDefaultPort(proxyType),
          username: String(username || "").trim(),
          password: String(password || "").trim(),
=======
          host: host.trim(),
          port: port.trim() || getDefaultPort(proxyType),
          username: username.trim(),
          password: password.trim(),
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
        };
      }

      const res = await fetch("/api/settings/proxy/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ proxy }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
<<<<<<< HEAD
        const message = data?.error?.message || t("connectionFailed");
=======
        const message = data?.error?.message || "Connection failed";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
        setTestResult({ success: false, error: message });
        setFormError(message);
        return;
      }
      setTestResult(data);
    } catch (error) {
      setTestResult({ success: false, error: error.message });
<<<<<<< HEAD
      setFormError(error.message || t("connectionFailed"));
=======
      setFormError(error.message || "Connection failed");
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    } finally {
      setTesting(false);
    }
  };

  const title =
    level === "global"
<<<<<<< HEAD
      ? t("titleGlobal")
      : t("titleLevel", {
          level: t(`level${level.charAt(0).toUpperCase() + level.slice(1)}` as any),
          label: levelLabel || levelId || "",
        });
=======
      ? "Global Proxy Configuration"
      : `${LEVEL_LABELS[level]} Proxy — ${levelLabel || levelId || ""}`;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} maxWidth="lg">
      {loading ? (
<<<<<<< HEAD
        <div className="py-8 text-center text-text-muted animate-pulse">{t("loading")}</div>
=======
        <div className="py-8 text-center text-text-muted animate-pulse">
          Loading proxy configuration...
        </div>
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      ) : (
        <div className="flex flex-col gap-5">
          {/* Inheritance indicator */}
          {level !== "global" && !hasOwnProxy && inheritedFrom && (
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-sm">
              <span className="material-symbols-outlined text-blue-400 text-base">
                subdirectory_arrow_right
              </span>
              <span className="text-blue-300">
<<<<<<< HEAD
                {t("inheritingFrom")} <strong>{inheritedFrom.level}</strong>:{" "}
                {inheritedFrom.proxy?.type}
=======
                Inheriting from <strong>{inheritedFrom.level}</strong>: {inheritedFrom.proxy?.type}
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
                ://{inheritedFrom.proxy?.host}:{inheritedFrom.proxy?.port}
              </span>
            </div>
          )}

          {/* Proxy Type Selector */}
          <div>
            <label className="text-xs text-text-muted mb-1.5 block uppercase tracking-wider font-medium">
<<<<<<< HEAD
              {t("source")}
=======
              Source
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setMode("saved")}
                className={`px-3 py-2 rounded text-sm border transition-colors ${
                  mode === "saved"
                    ? "bg-primary text-white border-primary"
                    : "bg-bg-subtle text-text-muted border-border"
                }`}
              >
<<<<<<< HEAD
                {t("savedProxy")}
=======
                Saved Proxy
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
              </button>
              <button
                onClick={() => setMode("custom")}
                className={`px-3 py-2 rounded text-sm border transition-colors ${
                  mode === "custom"
                    ? "bg-primary text-white border-primary"
                    : "bg-bg-subtle text-text-muted border-border"
                }`}
              >
<<<<<<< HEAD
                {t("custom")}
=======
                Custom
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
              </button>
            </div>
          </div>

          {mode === "saved" && (
            <div>
              <label className="text-xs text-text-muted mb-1.5 block uppercase tracking-wider font-medium">
<<<<<<< HEAD
                {t("savedProxy")}
=======
                Saved Proxy
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
              </label>
              <select
                value={selectedProxyId}
                onChange={(e) => setSelectedProxyId(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg bg-bg-subtle border border-border text-sm text-text-primary"
              >
<<<<<<< HEAD
                <option value="">{t("selectSavedProxyPlaceholder")}</option>
=======
                <option value="">Select saved proxy...</option>
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
                {savedProxies.map((item: any) => (
                  <option key={item.id} value={item.id}>
                    {item.name} ({item.type}://{item.host}:{item.port})
                  </option>
                ))}
              </select>
            </div>
          )}

          {mode === "custom" && (
            <>
              <div>
                <label className="text-xs text-text-muted mb-1.5 block uppercase tracking-wider font-medium">
<<<<<<< HEAD
                  {t("proxyType")}
=======
                  Proxy Type
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
                </label>
                <div className="flex gap-1 bg-bg-subtle rounded-lg p-1 border border-border">
                  {PROXY_TYPES.map((t) => (
                    <button
                      key={t.value}
                      onClick={() => setProxyType(t.value)}
                      className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        proxyType === t.value
                          ? "bg-primary text-white shadow-sm"
                          : "text-text-muted hover:text-text-primary hover:bg-black/5 dark:hover:bg-white/5"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Host + Port */}
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="text-xs text-text-muted mb-1.5 block uppercase tracking-wider font-medium">
<<<<<<< HEAD
                    {t("host")}
=======
                    Host
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
                  </label>
                  <input
                    type="text"
                    value={host}
                    onChange={(e) => setHost(e.target.value)}
<<<<<<< HEAD
                    placeholder={t("hostPlaceholder")}
=======
                    placeholder="1.2.3.4 or proxy.example.com"
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
                    className="w-full px-3 py-2.5 rounded-lg bg-bg-subtle border border-border text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-text-muted mb-1.5 block uppercase tracking-wider font-medium">
<<<<<<< HEAD
                    {t("port")}
=======
                    Port
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
                  </label>
                  <input
                    type="text"
                    value={port}
                    onChange={(e) => setPort(e.target.value)}
                    placeholder={getDefaultPort(proxyType)}
                    className="w-full px-3 py-2.5 rounded-lg bg-bg-subtle border border-border text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Auth Toggle */}
              <div>
                <button
                  onClick={() => setShowAuth(!showAuth)}
                  className="flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-base">
                    {showAuth ? "expand_less" : "expand_more"}
                  </span>
<<<<<<< HEAD
                  {t("authOptional")}
=======
                  Authentication (optional)
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
                </button>
                {showAuth && (
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <div>
                      <label className="text-xs text-text-muted mb-1.5 block uppercase tracking-wider font-medium">
<<<<<<< HEAD
                        {t("username")}
=======
                        Username
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
                      </label>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
<<<<<<< HEAD
                        placeholder={t("usernamePlaceholder")}
=======
                        placeholder="Username"
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
                        className="w-full px-3 py-2.5 rounded-lg bg-bg-subtle border border-border text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-text-muted mb-1.5 block uppercase tracking-wider font-medium">
<<<<<<< HEAD
                        {t("password")}
=======
                        Password
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
<<<<<<< HEAD
                        placeholder={t("passwordPlaceholder")}
=======
                        placeholder="Password"
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
                        className="w-full px-3 py-2.5 rounded-lg bg-bg-subtle border border-border text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Test Result */}
          {formError && (
            <div className="px-4 py-3 rounded-lg border border-red-500/30 bg-red-500/10 text-sm text-red-400">
              {formError}
            </div>
          )}

          {testResult && (
            <div
              className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${
                testResult.success
                  ? "bg-emerald-500/10 border-emerald-500/30"
                  : "bg-red-500/10 border-red-500/30"
              }`}
            >
              <span
                className={`material-symbols-outlined text-xl ${
                  testResult.success ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {testResult.success ? "check_circle" : "error"}
              </span>
              <div className="flex-1">
                {testResult.success ? (
                  <div>
<<<<<<< HEAD
                    <span className="text-sm font-medium text-emerald-400">{t("connected")}</span>
                    <span className="text-text-muted text-xs ml-2">
                      {t("ip")}{" "}
                      <span className="font-mono text-emerald-300">{testResult.publicIp}</span>
=======
                    <span className="text-sm font-medium text-emerald-400">Connected</span>
                    <span className="text-text-muted text-xs ml-2">
                      IP: <span className="font-mono text-emerald-300">{testResult.publicIp}</span>
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
                      {testResult.latencyMs && ` · ${testResult.latencyMs}ms`}
                    </span>
                  </div>
                ) : (
                  <div className="text-sm text-red-400">
<<<<<<< HEAD
                    {testResult.error || t("connectionFailed")}
=======
                    {testResult.error || "Connection failed"}
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
                    {testResult.latencyMs && (
                      <span className="text-text-muted text-xs ml-2">
                        ({testResult.latencyMs}ms)
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="secondary"
                icon="speed"
                onClick={handleTest}
                loading={testing}
<<<<<<< HEAD
                disabled={mode === "saved" ? !selectedProxyId : !String(host || "").trim()}
              >
                {t("testConnection")}
=======
                disabled={mode === "saved" ? !selectedProxyId : !host.trim()}
              >
                Test Connection
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
              </Button>
              {hasOwnProxy && (
                <Button
                  size="sm"
                  variant="ghost"
                  icon="delete"
                  onClick={handleClear}
                  disabled={saving}
                  className="!text-red-400 hover:!bg-red-500/10"
                >
<<<<<<< HEAD
                  {t("clear")}
=======
                  Clear
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
                </Button>
              )}
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="secondary" onClick={onClose}>
<<<<<<< HEAD
                {t("cancel")}
=======
                Cancel
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
              </Button>
              <Button
                size="sm"
                icon="save"
                onClick={handleSave}
                loading={saving}
<<<<<<< HEAD
                disabled={mode === "saved" ? !selectedProxyId : !String(host || "").trim()}
              >
                {t("save")}
=======
                disabled={mode === "saved" ? !selectedProxyId : !host.trim()}
              >
                Save
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
              </Button>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
<<<<<<< HEAD
=======

ProxyConfigModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  level: PropTypes.oneOf(["global", "provider", "combo", "key"]).isRequired,
  levelId: PropTypes.string,
  levelLabel: PropTypes.string,
  onSaved: PropTypes.func,
};
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
