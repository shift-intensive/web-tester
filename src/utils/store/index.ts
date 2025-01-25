import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

import type { User } from '@/api';

interface StoreState {
  isLoggedIn: boolean;
  user: User;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setUser: (user: User) => void;
}

export const useStore = create<StoreState>()(
  devtools((set) => ({
    user: {} as User,
    isLoggedIn: false,
    setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
    setUser: (user) => set({ user })
  }))
);

type Theme = 'dark' | 'light';

interface ThemeState {
  value: Theme;
  set: (value: Theme) => void;
}

export const useTheme = create<ThemeState>()(
  persist(
    (set) => ({
      value: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
      set: (value) => {
        document.documentElement.classList.toggle('dark', value === 'dark');
        set({ value });
      }
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
document.documentElement.classList.toggle('dark', useTheme.getState().value === 'dark');
