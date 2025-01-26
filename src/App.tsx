import { MoonIcon, SunIcon } from 'lucide-react';

import { AuthView } from './modules/auth/view';
import { ProfileView } from './modules/profile/view';
import { useStore, useTheme } from './utils/store';

export const App = () => {
  const theme = useTheme((state) => state.value);
  const isLoggedIn = useStore((state) => state.isLoggedIn);

  return (
    <main className='container'>
      <header>
        <div className='theme_switcher' onClick={() => useTheme.getState().set(theme && theme === 'light' ? 'dark' : 'light')}>
          {theme && theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </div>
      </header>

      <div className='content'>
        {!isLoggedIn && <AuthView />}
        {isLoggedIn && <ProfileView />}
      </div>
    </main>
  );
};
