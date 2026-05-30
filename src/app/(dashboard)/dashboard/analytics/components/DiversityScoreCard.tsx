"use client";

import { useEffect, useState } from "react";
import { Card } from "@/shared/components";
  }, []);

  if (loading || !data) {
    return (
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </Card>
    );
  }

  const scorePercentage = Math.round((data.score || 0) * 100);

  let riskColor = "text-green-500";
  let gaugeColor = "bg-green-500";
  let riskLabel = "Healthy Distribution";

  if (scorePercentage < 40) {
    riskColor = "text-red-500";
    gaugeColor = "bg-red-500";
    riskLabel = "High Vendor Lock-in Risk";
  } else if (scorePercentage < 70) {
    riskColor = "text-amber-500";
    gaugeColor = "bg-amber-500";
    riskLabel = "Moderate Distribution";
  }

              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className={riskColor}
              strokeDasharray={`${scorePercentage}, 100`}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
                      style={{ width: `${Math.round(stat.share * 100)}%` }}
                    />
                  </div>
                </div>
              ))}
      </div>
    </Card>
  );
}
