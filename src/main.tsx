import ReactDOM from 'react-dom/client';

import { usersControllerSession } from '@/api';

import { App } from './App';
import { Provider } from './provider';
import { LOCAL_STORAGE_KEYS } from './utils/constants';
import { useStore } from './utils/store';

import './styles/reset.css';
import './styles/typography.css';
import './styles/global.css';

const init = async () => {
  const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);
  if (token) {
    const getUsersSessionResponse = await usersControllerSession();
    useStore.setState({ isLoggedIn: true, user: getUsersSessionResponse.data.user });
  }

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider>
      <App />
    </Provider>
  );
};

init();
