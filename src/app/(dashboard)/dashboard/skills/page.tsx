"use client";

import { useState, useEffect, useRef } from "react";
import { Card } from "@/shared/components";
import { useTranslations } from "next-intl";
import type { SkillsProvider } from "@/lib/skills/providerSettings";
=======
import { useState, useEffect } from "react";
import { Card } from "@/shared/components";
import { useTranslations } from "next-intl";
>>>>>>> Stashed changes

interface Skill {
  id: string;
  name: string;
  version: string;
  description: string;
  enabled: boolean;
  mode?: "on" | "off" | "auto";
  sourceProvider?: "skillsmp" | "skillssh" | "local";
  tags?: string[];
  installCount?: number;
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const refreshSkills = async () => {
    setSkillsPage(1);
    await fetchSkills(1);
  };

      </div>

      <div className="flex gap-2 border-b border-border">
        <button
          onClick={() => setActiveTab("skills")}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "skills"
              ? "border-violet-500 text-violet-400"
              : "border-transparent text-text-muted hover:text-text-main"
          }`}
        >
          {t("skillsTab")}
        </button>
        <button
          onClick={() => setActiveTab("executions")}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "executions"
              ? "border-violet-500 text-violet-400"
              : "border-transparent text-text-muted hover:text-text-main"
          }`}
        >
          {t("executionsTab")}
        </button>
        <button
          onClick={() => setActiveTab("sandbox")}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "sandbox"
              ? "border-violet-500 text-violet-400"
              : "border-transparent text-text-muted hover:text-text-main"
          }`}
        >
          {t("sandboxTab")}
        </button>
        <button
          onClick={() => setActiveTab("marketplace")}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "marketplace"
              ? "border-violet-500 text-violet-400"
              : "border-transparent text-text-muted hover:text-text-main"
          }`}
        >
          Marketplace
        </button>
                </div>
              </Card>
            ))
          )}
<<<<<<< Updated upstream
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
            <span className="text-sm text-text-muted">
              Page {skillsPage} of {skillsTotalPages} ({skillsTotal} total)
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  const p = Math.max(1, skillsPage - 1);
                  setSkillsPage(p);
                  fetchSkills(p);
                }}
                disabled={skillsPage === 1}
                className="px-3 py-1 text-sm rounded border border-border text-text-muted hover:text-text-main disabled:opacity-40 transition-colors"
              >
                Prev
              </button>
              <button
                onClick={() => {
                  const p = Math.min(skillsTotalPages, skillsPage + 1);
                  setSkillsPage(p);
                  fetchSkills(p);
                }}
                disabled={skillsPage === skillsTotalPages || skillsTotalPages === 0}
                className="px-3 py-1 text-sm rounded border border-border text-text-muted hover:text-text-main disabled:opacity-40 transition-colors"
              >
                Next
              </button>
            </div>
          </div>
=======
        </div>
      )}

      {activeTab === "executions" && (
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-text-muted border-b border-border">
                  <th className="pb-3 font-medium">{t("skill")}</th>
                  <th className="pb-3 font-medium">{t("status")}</th>
                  <th className="pb-3 font-medium">{t("duration")}</th>
                  <th className="pb-3 font-medium">{t("time")}</th>
                </tr>
              </thead>
              <tbody>
                {executions.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-text-muted">
                      {t("noExecutions")}
                    </td>
                  </tr>
                ) : (
                  executions.map((exec) => (
                    <tr key={exec.id} className="border-b border-border/50">
                      <td className="py-3 font-medium">{exec.skillName}</td>
                      <td className="py-3">
                        <span
                          className={`text-xs px-2 py-1 rounded ${
                            exec.status === "success"
                              ? "bg-emerald-500/10 text-emerald-400"
                              : exec.status === "error"
                                ? "bg-red-500/10 text-red-400"
                                : "bg-amber-500/10 text-amber-400"
                          }`}
                        >
                          {exec.status}
                        </span>
                      </td>
                      <td className="py-3 text-text-muted">{exec.duration}ms</td>
                      <td className="py-3 text-text-muted text-sm">
                        {new Date(exec.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
            <span className="text-sm text-text-muted">
              Page {execPage} of {execTotalPages} ({execTotal} total)
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  const p = Math.max(1, execPage - 1);
                  setExecPage(p);
                  fetchExecutions(p);
                }}
                disabled={execPage === 1}
                className="px-3 py-1 text-sm rounded border border-border text-text-muted hover:text-text-main disabled:opacity-40 transition-colors"
              >
                Prev
              </button>
              <button
                onClick={() => {
                  const p = Math.min(execTotalPages, execPage + 1);
                  setExecPage(p);
                  fetchExecutions(p);
                }}
                disabled={execPage === execTotalPages || execTotalPages === 0}
                className="px-3 py-1 text-sm rounded border border-border text-text-muted hover:text-text-main disabled:opacity-40 transition-colors"
              >
                Next
              </button>
            </div>
          </div>
=======
        </Card>
      )}

      {activeTab === "sandbox" && (
        <div className="grid gap-4">
          <Card>
            <h3 className="font-semibold mb-4">{t("sandboxConfig")}</h3>
            <div className="grid gap-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-surface/30">
                <div>
                  <p className="font-medium">{t("cpuLimit")}</p>
                  <p className="text-xs text-text-muted">{t("cpuLimitDesc")}</p>
                </div>
                <span className="font-mono">100ms</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-surface/30">
                <div>
                  <p className="font-medium">{t("memoryLimit")}</p>
                  <p className="text-xs text-text-muted">{t("memoryLimitDesc")}</p>
                </div>
                <span className="font-mono">256MB</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-surface/30">
                <div>
                  <p className="font-medium">{t("timeout")}</p>
                  <p className="text-xs text-text-muted">{t("timeoutDesc")}</p>
                </div>
                <span className="font-mono">30s</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-surface/30">
                <div>
                  <p className="font-medium">{t("networkAccess")}</p>
                  <p className="text-xs text-text-muted">{t("networkAccessDesc")}</p>
                </div>
                <span className="text-text-muted">{t("disabled")}</span>
              </div>
            </div>
          </Card>
        </div>
      )}

      {activeTab === "marketplace" && (
        <div className="grid gap-4">
          <Card>
            <h3 className="font-semibold mb-2">Skills Marketplace</h3>
            <p className="text-sm text-text-muted mb-4">
              Active provider:{" "}
              <span className="font-medium">
                {skillsProvider === "skillsmp" ? "SkillsMP" : "skills.sh"}
              </span>
              . Change this in Settings → Memory & Skills.
            </p>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={skillsProvider === "skillsmp" ? mpQuery : shQuery}
                onChange={(e) =>
                  skillsProvider === "skillsmp"
                    ? setMpQuery(e.target.value)
                    : setShQuery(e.target.value)
                }
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  (skillsProvider === "skillsmp" ? searchMarketplace() : searchSkillsSh())
                }
                placeholder={
                  skillsProvider === "skillsmp" ? "Search SkillsMP..." : "Search skills.sh..."
                }
                className="flex-1 px-3 py-2 rounded-lg bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-violet-500"
              />
              <button
                onClick={() =>
                  skillsProvider === "skillsmp" ? searchMarketplace() : searchSkillsSh()
                }
                disabled={skillsProvider === "skillsmp" ? mpLoading : shLoading}
                className="px-4 py-2 text-sm font-medium rounded-lg bg-violet-500 text-white hover:bg-violet-600 disabled:opacity-50 transition-colors"
              >
                {skillsProvider === "skillsmp"
                  ? mpLoading
                    ? "Searching..."
                    : "Search SkillsMP"
                  : shLoading
                    ? "Searching..."
                    : "Search skills.sh"}
              </button>
            </div>
            {(skillsProvider === "skillsmp" ? mpError : shError) && (
              <div className="p-3 rounded-lg bg-red-500/10 text-red-400 text-sm mb-4">
                {skillsProvider === "skillsmp" ? mpError : shError}
              </div>
            )}
          </Card>

          {skillsProvider === "skillsmp" && mpResults.length > 0 && (
            <div className="grid gap-3">
              {mpResults.map((skill) => (
                <Card key={skill.name}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">{skill.name}</h4>
                      <p className="text-sm text-text-muted mt-1">{skill.description}</p>
                    </div>
                    <button
                      onClick={() => installFromMarketplace(skill)}
                      disabled={mpInstallingId === skill.name}
                      className="px-4 py-1.5 text-sm font-medium rounded-lg bg-violet-500 text-white hover:bg-violet-600 disabled:opacity-50 transition-colors"
                    >
                      {mpInstallingId === skill.name ? "Installing..." : "Install"}
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {skillsProvider === "skillssh" && shResults.length > 0 && (
            <div className="grid gap-3">
              {shResults.map((skill) => (
                <Card key={skill.id}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">{skill.name}</h4>
                      <p className="text-sm text-text-muted mt-1">
                        {skill.source} · {skill.installs.toLocaleString()} installs
                      </p>
                    </div>
                    <button
                      onClick={() => installFromSkillsSh(skill)}
                      disabled={shInstallingId === skill.id}
                      className="px-4 py-1.5 text-sm font-medium rounded-lg bg-violet-500 text-white hover:bg-violet-600 disabled:opacity-50 transition-colors"
                    >
                      {shInstallingId === skill.id ? "Installing..." : "Install"}
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {skillsProvider === "skillsmp" && !mpLoading && mpResults.length === 0 && !mpError && (
            <Card>
              <div className="text-center py-8 text-text-muted">
                Configure your SkillsMP API key in Settings to browse the marketplace.
              </div>
            </Card>
          )}
          {skillsProvider === "skillssh" && !shLoading && shResults.length === 0 && !shError && (
            <Card>
              <div className="text-center py-8 text-text-muted">
                Search the skills.sh open directory to discover and install agent skills.
              </div>
            </Card>
          )}
        </div>
      )}

      {showInstallModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-surface border border-border rounded-xl p-6 w-full max-w-lg mx-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Install Skill</h2>
              <button
                onClick={() => {
                  setShowInstallModal(false);
                  setInstallStatus(null);
                  setInstallJson("");
                }}
                className="text-text-muted hover:text-text-main"
              >
                X
              </button>
            </div>
            <p className="text-sm text-text-muted mb-4">
              Paste a skill manifest JSON or upload a .json file.
            </p>
            <textarea
              value={installJson}
              onChange={(e) => setInstallJson(e.target.value)}
              placeholder='{"name": "my-skill", "version": "1.0.0", "description": "...", "schema": {"input": {}, "output": {}}, "handlerCode": "..."}'
              className="w-full h-48 p-3 rounded-lg bg-background border border-border text-sm font-mono resize-none focus:outline-none focus:ring-1 focus:ring-violet-500"
            />
            <div className="flex items-center gap-3 mt-3">
              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-3 py-1.5 text-sm rounded-lg border border-border text-text-muted hover:text-text-main transition-colors"
              >
                Upload JSON
              </button>
              <div className="flex-1" />
              <button
                onClick={() => {
                  setShowInstallModal(false);
                  setInstallStatus(null);
                  setInstallJson("");
                }}
                className="px-3 py-1.5 text-sm rounded-lg border border-border text-text-muted hover:text-text-main transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleInstall}
                disabled={installing || !installJson.trim()}
                className="px-4 py-1.5 text-sm font-medium rounded-lg bg-violet-500 text-white hover:bg-violet-600 disabled:opacity-50 transition-colors"
              >
                {installing ? "Installing..." : "Install"}
              </button>
            </div>
            {installStatus && (
              <div
                className={`mt-3 p-3 rounded-lg text-sm ${
                  installStatus.type === "success"
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {installStatus.message}
              </div>
            )}
          </div>
        </div>
      )}
=======
    </div>
  );
}
