import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { User } from '@/api/instance';

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
