'use client';

import { Card } from '@/components/ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface DashboardMetric {
  label: string;
  value: number | string;
  change?: number;
  unit?: string;
}

interface MetricCardProps {
  metric: DashboardMetric;
}

export function MetricCard({ metric }: MetricCardProps) {
  const hasPositiveChange = metric.change && metric.change > 0;
  const hasNegativeChange = metric.change && metric.change < 0;

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <p className="text-sm text-muted-foreground mb-2">{metric.label}</p>
      <div className="flex items-baseline gap-2">
        <p className="text-3xl font-bold">
          {metric.value}
          {metric.unit && <span className="text-lg">{metric.unit}</span>}
        </p>
      </div>
      {metric.change !== undefined && (
        <div className="flex items-center gap-1 mt-2">
          {hasPositiveChange && (
            <>
              <ArrowUp className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-600 font-medium">
                +{Math.abs(metric.change)}%
              </span>
            </>
          )}
          {hasNegativeChange && (
            <>
              <ArrowDown className="w-4 h-4 text-red-600" />
              <span className="text-sm text-red-600 font-medium">
                {metric.change}%
              </span>
            </>
          )}
          <span className="text-xs text-muted-foreground ml-1">vs last month</span>
        </div>
      )}
    </Card>
  );
}