'use client';

import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Brand {
  id: string;
  name: string;
  domain: string;
}

interface BrandSelectorProps {
  brands: Brand[];
}

export function BrandSelector({ brands }: BrandSelectorProps) {
  const [selectedBrand, setSelectedBrand] = useState<string>(brands[0]?.id || '');

  return (
    <Select value={selectedBrand} onValueChange={setSelectedBrand}>
      <SelectTrigger className="w-[300px]">
        <SelectValue placeholder="Select brand..." />
      </SelectTrigger>
      <SelectContent>
        {brands.map((brand) => (
          <SelectItem key={brand.id} value={brand.id}>
            <div className="flex flex-col">
              <span className="font-medium">{brand.name}</span>
              <span className="text-xs text-muted-foreground">{brand.domain}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}