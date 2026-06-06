"use client";

import { useState, useEffect } from "react";
<<<<<<< HEAD
import { useTranslations } from "next-intl";
import { getDefaultPricing, formatCost } from "@/shared/constants/pricing";

export default function PricingModal({ isOpen, onClose, onSave }) {
  const t = useTranslations("pricingModal");
=======
import { getDefaultPricing, formatCost } from "@/shared/constants/pricing";

export default function PricingModal({ isOpen, onClose, onSave }) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  const [pricingData, setPricingData] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isOpen) {
      loadPricing();
    }
  }, [isOpen]);

  const loadPricing = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/pricing");
      if (response.ok) {
        const data = await response.json();
        setPricingData(data);
      } else {
        // Fallback to defaults
        const defaults = getDefaultPricing();
        setPricingData(defaults);
      }
    } catch (error) {
      console.error("Failed to load pricing:", error);
      const defaults = getDefaultPricing();
      setPricingData(defaults);
    } finally {
      setLoading(false);
    }
  };

  const handlePricingChange = (provider, model, field, value) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue) || numValue < 0) return;

    setPricingData((prev) => {
      const newData = { ...prev };
      if (!newData[provider]) newData[provider] = {};
      if (!newData[provider][model]) newData[provider][model] = {};
      newData[provider][model][field] = numValue;
      return newData;
    });
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const response = await fetch("/api/pricing", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pricingData),
      });

      if (response.ok) {
        onSave?.();
        onClose();
      } else {
        const error = await response.json();
<<<<<<< HEAD
        alert(`${t("errorSaveFailed")}: ${error.error}`);
      }
    } catch (error) {
      console.error("Failed to save pricing:", error);
      alert(t("errorSaveFailed"));
=======
        alert(`Failed to save pricing: ${error.error}`);
      }
    } catch (error) {
      console.error("Failed to save pricing:", error);
      alert("Failed to save pricing");
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    } finally {
      setSaving(false);
    }
  };

  const handleReset = async () => {
<<<<<<< HEAD
    if (!confirm(t("resetConfirm"))) return;
=======
    if (!confirm("Reset all pricing to defaults? This cannot be undone.")) return;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

    try {
      const response = await fetch("/api/pricing", { method: "DELETE" });
      if (response.ok) {
        const defaults = getDefaultPricing();
        setPricingData(defaults);
      }
    } catch (error) {
      console.error("Failed to reset pricing:", error);
<<<<<<< HEAD
      alert(t("errorResetFailed"));
=======
      alert("Failed to reset pricing");
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    }
  };

  if (!isOpen) return null;

  // Get all unique providers and models for display
  const allProviders = Object.keys(pricingData).sort();
  const pricingFields = ["input", "output", "cached", "reasoning", "cache_creation"];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-bg-base border border-border rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-border flex items-center justify-between">
<<<<<<< HEAD
          <h2 className="text-xl font-semibold">{t("title")}</h2>
=======
          <h2 className="text-xl font-semibold">Pricing Configuration</h2>
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
          <button
            onClick={onClose}
            className="text-text-muted hover:text-text text-2xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-4">
          {loading ? (
<<<<<<< HEAD
            <div className="text-center py-8 text-text-muted">{t("loading")}</div>
=======
            <div className="text-center py-8 text-text-muted">Loading pricing data...</div>
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
          ) : (
            <div className="space-y-6">
              {/* Instructions */}
              <div className="bg-bg-subtle border border-border rounded-lg p-3 text-sm">
<<<<<<< HEAD
                <p className="font-medium mb-1">{t("pricingRatesFormat")}</p>
                <p className="text-text-muted">
                  {t.rich("ratesDescription", {
                    strong: (c) => <strong className="font-semibold">{c}</strong>,
                  })}
=======
                <p className="font-medium mb-1">Pricing Rates Format</p>
                <p className="text-text-muted">
                  All rates are in <strong>dollars per million tokens</strong> ($/1M tokens).
                  Example: Input rate of 2.50 means $2.50 per 1,000,000 input tokens.
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
                </p>
              </div>

              {/* Pricing Tables */}
              {allProviders.map((provider) => {
                const models = Object.keys(pricingData[provider]).sort();
                return (
                  <div key={provider} className="border border-border rounded-lg overflow-hidden">
                    <div className="bg-bg-subtle px-4 py-2 font-semibold text-sm">
                      {provider.toUpperCase()}
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-bg-hover text-text-muted uppercase text-xs">
                          <tr>
<<<<<<< HEAD
                            <th className="px-3 py-2 text-left">{t("model")}</th>
                            <th className="px-3 py-2 text-right">{t("input")}</th>
                            <th className="px-3 py-2 text-right">{t("output")}</th>
                            <th className="px-3 py-2 text-right">{t("cached")}</th>
                            <th className="px-3 py-2 text-right">{t("reasoning")}</th>
                            <th className="px-3 py-2 text-right">{t("cacheCreation")}</th>
=======
                            <th className="px-3 py-2 text-left">Model</th>
                            <th className="px-3 py-2 text-right">Input</th>
                            <th className="px-3 py-2 text-right">Output</th>
                            <th className="px-3 py-2 text-right">Cached</th>
                            <th className="px-3 py-2 text-right">Reasoning</th>
                            <th className="px-3 py-2 text-right">Cache Creation</th>
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          {models.map((model) => (
                            <tr key={model} className="hover:bg-bg-subtle/50">
                              <td className="px-3 py-2 font-medium">{model}</td>
                              {pricingFields.map((field) => (
                                <td key={field} className="px-3 py-2">
                                  <input
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    value={pricingData[provider][model][field] || 0}
                                    onChange={(e) =>
                                      handlePricingChange(provider, model, field, e.target.value)
                                    }
                                    className="w-20 px-2 py-1 text-right bg-bg-base border border-border rounded focus:outline-none focus:border-primary"
                                  />
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })}

              {allProviders.length === 0 && (
<<<<<<< HEAD
                <div className="text-center py-8 text-text-muted">{t("noPricingData")}</div>
=======
                <div className="text-center py-8 text-text-muted">No pricing data available</div>
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border flex items-center justify-between gap-2">
          <button
            onClick={handleReset}
            className="px-4 py-2 text-sm text-red-500 hover:bg-red-500/10 rounded border border-red-500/20 transition-colors"
            disabled={saving}
          >
<<<<<<< HEAD
            {t("resetToDefaults")}
=======
            Reset to Defaults
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
          </button>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm text-text-muted hover:text-text border border-border rounded transition-colors"
              disabled={saving}
            >
<<<<<<< HEAD
              {t("cancel")}
=======
              Cancel
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 text-sm bg-primary text-white rounded hover:bg-primary/90 transition-colors disabled:opacity-50"
              disabled={saving}
            >
<<<<<<< HEAD
              {saving ? t("saving") : t("saveChanges")}
=======
              {saving ? "Saving..." : "Save Changes"}
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
