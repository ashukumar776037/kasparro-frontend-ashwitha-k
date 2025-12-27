'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface AuditModule {
  id: string;
  name: string;
  category: string;
  score: number;
  status: 'excellent' | 'good' | 'warning' | 'critical';
}

interface ModuleListProps {
  modules: AuditModule[];
  selected: AuditModule;
  onSelect: (module: AuditModule) => void;
}

export function ModuleList({ modules, selected, onSelect }: ModuleListProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'bg-green-500';
      case 'good':
        return 'bg-blue-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'critical':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-2">
      <h2 className="font-bold text-lg mb-4">Audit Modules</h2>
      {modules.map((module) => (
        <Card
          key={module.id}
          className={`p-4 cursor-pointer transition-all hover:shadow-md ${
            selected.id === module.id ? 'border-2 border-blue-500 bg-blue-50' : ''
          }`}
          onClick={() => onSelect(module)}
        >
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-sm leading-tight">{module.name}</h3>
            <div className={`w-2 h-2 rounded-full ${getStatusColor(module.status)} flex-shrink-0 mt-1`} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{module.category}</span>
            <Badge variant="secondary" className="text-xs">
              {module.score}
            </Badge>
          </div>
        </Card>
      ))}
    </div>
  );
}