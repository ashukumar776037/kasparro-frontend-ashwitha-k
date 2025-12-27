'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, CheckCircle2, Lightbulb } from 'lucide-react';

interface Issue {
  severity: 'high' | 'medium' | 'low';
  title: string;
  description: string;
}

interface AuditModule {
  id: string;
  name: string;
  category: string;
  score: number;
  status: 'excellent' | 'good' | 'warning' | 'critical';
  insights: string[];
  issues: Issue[];
  recommendations: string[];
}

interface ModuleDetailProps {
  module: AuditModule;
}

export function ModuleDetail({ module }: ModuleDetailProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-blue-600';
    if (score >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{module.name}</h1>
        <p className="text-muted-foreground">{module.category}</p>
      </div>

      {/* Score Card */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Overall Score</p>
            <p className={`text-5xl font-bold ${getScoreColor(module.score)}`}>
              {module.score}
            </p>
          </div>
          <Badge
            variant={module.status === 'excellent' || module.status === 'good' ? 'default' : 'destructive'}
            className="text-lg px-4 py-2"
          >
            {module.status.toUpperCase()}
          </Badge>
        </div>
      </Card>

      {/* Key Insights */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
          <h2 className="text-xl font-bold">Key Insights</h2>
        </div>
        <ul className="space-y-2">
          {module.insights.map((insight, index) => (
            <li key={index} className="flex gap-3">
              <span className="text-green-600 mt-1">•</span>
              <span className="text-muted-foreground">{insight}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Issues */}
      {module.issues.length > 0 && (
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <h2 className="text-xl font-bold">Issues Found</h2>
          </div>
          <div className="space-y-3">
            {module.issues.map((issue, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${getSeverityColor(issue.severity)}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold">{issue.title}</h3>
                  <Badge variant="outline" className="text-xs">
                    {issue.severity.toUpperCase()}
                  </Badge>
                </div>
                <p className="text-sm">{issue.description}</p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Recommendations */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="w-5 h-5 text-yellow-600" />
          <h2 className="text-xl font-bold">Recommendations</h2>
        </div>
        <ul className="space-y-3">
          {module.recommendations.map((recommendation, index) => (
            <li key={index} className="flex gap-3">
              <span className="text-yellow-600 font-bold mt-1">{index + 1}.</span>
              <span className="text-muted-foreground">{recommendation}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}