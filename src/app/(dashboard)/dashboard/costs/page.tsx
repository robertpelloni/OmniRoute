"use client";

import { useState } from "react";
import { SegmentedControl } from "@/shared/components";
import BudgetTab from "../usage/components/BudgetTab";
import PricingTab from "../settings/components/PricingTab";
<<<<<<< HEAD
import CostOverviewTab from "./CostOverviewTab";
import { useTranslations } from "next-intl";

export default function CostsPage() {
  const [activeTab, setActiveTab] = useState("overview");
=======
import { useTranslations } from "next-intl";

export default function CostsPage() {
  const [activeTab, setActiveTab] = useState("budget");
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  const t = useTranslations("costs");
  const ts = useTranslations("settings");

  return (
    <div className="flex flex-col gap-6">
<<<<<<< HEAD
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[28px]">payments</span>
          {t("title")}
        </h1>
        <p className="text-sm text-text-muted mt-1">{t("pageDescription")}</p>
      </div>

      <SegmentedControl
        options={[
          { value: "overview", label: t("overview") },
=======
      <SegmentedControl
        options={[
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
          { value: "budget", label: t("budget") },
          { value: "pricing", label: ts("pricing") },
        ]}
        value={activeTab}
        onChange={setActiveTab}
      />

<<<<<<< HEAD
      {activeTab === "overview" && <CostOverviewTab />}
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      {activeTab === "budget" && <BudgetTab />}
      {activeTab === "pricing" && <PricingTab />}
    </div>
  );
}
