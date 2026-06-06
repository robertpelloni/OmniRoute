"use client";

import { useState, useRef, useEffect } from "react";
<<<<<<< HEAD
import { useSearchParams } from "next/navigation";
import { RequestLoggerV2, ProxyLogger, SegmentedControl } from "@/shared/components";
import ConsoleLogViewer from "@/shared/components/ConsoleLogViewer";
import ActiveRequestsPanel from "@/shared/components/ActiveRequestsPanel";
=======
import { RequestLoggerV2, ProxyLogger, SegmentedControl } from "@/shared/components";
import ConsoleLogViewer from "@/shared/components/ConsoleLogViewer";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
import AuditLogTab from "./AuditLogTab";
import { useTranslations } from "next-intl";

const TIME_RANGES = [
  { label: "1h", hours: 1 },
  { label: "6h", hours: 6 },
  { label: "12h", hours: 12 },
  { label: "24h", hours: 24 },
];

const TAB_TO_LOG_TYPE: Record<string, string> = {
  "request-logs": "request-logs",
  "proxy-logs": "proxy-logs",
  "audit-logs": "call-logs",
  console: "call-logs",
};

export default function LogsPage() {
<<<<<<< HEAD
  const searchParams = useSearchParams();
  const requestedTab = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(
    requestedTab && TAB_TO_LOG_TYPE[requestedTab] ? requestedTab : "request-logs"
  );
=======
  const [activeTab, setActiveTab] = useState("request-logs");
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  const [showExport, setShowExport] = useState(false);
  const [exporting, setExporting] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("logs");

  useEffect(() => {
<<<<<<< HEAD
    if (requestedTab && TAB_TO_LOG_TYPE[requestedTab] && requestedTab !== activeTab) {
      setActiveTab(requestedTab);
    }
  }, [activeTab, requestedTab]);

  useEffect(() => {
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowExport(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleExport(hours: number) {
    setExporting(true);
    setShowExport(false);
    try {
      const logType = TAB_TO_LOG_TYPE[activeTab] || "call-logs";
      const res = await fetch(`/api/logs/export?hours=${hours}&type=${logType}`);
<<<<<<< HEAD
      if (!res.ok) throw new Error(t("exportFailed"));
=======
      if (!res.ok) throw new Error("Export failed");
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `omniroute-${logType}-${hours}h-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
<<<<<<< HEAD
      console.error(t("exportFailed"), err);
=======
      console.error("Export failed:", err);
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    } finally {
      setExporting(false);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <SegmentedControl
          options={[
            { value: "request-logs", label: t("requestLogs") },
            { value: "proxy-logs", label: t("proxyLogs") },
            { value: "audit-logs", label: t("auditLog") },
            { value: "console", label: t("console") },
          ]}
          value={activeTab}
          onChange={setActiveTab}
        />

        <div className="relative" ref={dropdownRef}>
          <button
            id="export-logs-btn"
            onClick={() => setShowExport(!showExport)}
            disabled={exporting}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg
              bg-[var(--card-bg,#1e1e2e)] border border-[var(--border,#333)]
              text-[var(--text-secondary,#aaa)] hover:text-[var(--text-primary,#fff)]
              hover:border-[var(--accent,#7c3aed)] transition-all duration-200
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M8 2v8m0 0l-3-3m3 3l3-3M3 12h10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
<<<<<<< HEAD
            {exporting ? t("exporting") : t("export")}
=======
            {exporting ? "Exporting..." : "Export"}
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
          </button>

          {showExport && (
            <div
              className="absolute right-0 top-full mt-1 z-50 min-w-[140px] rounded-lg
                bg-[var(--card-bg,#1e1e2e)] border border-[var(--border,#333)]
                shadow-xl overflow-hidden animate-in fade-in"
            >
              <div className="px-3 py-2 text-xs text-[var(--text-muted,#666)] border-b border-[var(--border,#333)] font-medium">
<<<<<<< HEAD
                {t("timeRange")}
=======
                Time Range
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
              </div>
              {TIME_RANGES.map((range) => (
                <button
                  key={range.hours}
                  id={`export-${range.hours}h-btn`}
                  onClick={() => handleExport(range.hours)}
                  className="w-full px-3 py-2 text-sm text-left hover:bg-[var(--hover-bg,#2a2a3e)]
                    text-[var(--text-secondary,#aaa)] hover:text-[var(--text-primary,#fff)]
                    transition-colors flex items-center justify-between"
                >
<<<<<<< HEAD
                  <span>{t("lastNHours", { hours: range.label })}</span>
                  <span className="text-xs text-[var(--text-muted,#666)]">
                    {range.hours === 24 ? t("defaultRange") : ""}
=======
                  <span>Last {range.label}</span>
                  <span className="text-xs text-[var(--text-muted,#666)]">
                    {range.hours === 24 ? "default" : ""}
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
<<<<<<< HEAD
      {activeTab === "request-logs" && (
        <div className="flex flex-col gap-6">
          <ActiveRequestsPanel />
          <RequestLoggerV2 />
        </div>
      )}
=======
      {activeTab === "request-logs" && <RequestLoggerV2 />}
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      {activeTab === "proxy-logs" && <ProxyLogger />}
      {activeTab === "audit-logs" && <AuditLogTab />}
      {activeTab === "console" && <ConsoleLogViewer />}
    </div>
  );
}
