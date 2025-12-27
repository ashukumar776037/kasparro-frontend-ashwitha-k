export interface Brand {
  id: string;
  name: string;
  domain: string;
  lastAuditDate: string;
}

export interface DashboardMetric {
  label: string;
  value: number | string;
  change?: number;
  unit?: string;
}

export interface Issue {
  severity: 'high' | 'medium' | 'low';
  title: string;
  description: string;
}

export interface AuditModule {
  id: string;
  name: string;
  category: string;
  score: number;
  status: 'excellent' | 'good' | 'warning' | 'critical';
  insights: string[];
  issues: Issue[];
  recommendations: string[];
}