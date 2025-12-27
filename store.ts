import { create } from 'zustand';
import { Brand, AuditModule } from './types';

interface AppState {
  selectedBrand: Brand | null;
  selectedModule: AuditModule | null;
  setSelectedBrand: (brand: Brand) => void;
  setSelectedModule: (module: AuditModule) => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedBrand: null,
  selectedModule: null,
  setSelectedBrand: (brand) => set({ selectedBrand: brand }),
  setSelectedModule: (module) => set({ selectedModule: module }),
}));