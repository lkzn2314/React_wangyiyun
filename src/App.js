import React from 'react';
import { Provider } from 'react-redux';
import store from '@/store';

import LKMain from './pages/main';

export default function App() {
  return (
    <Provider store={store}>
      <LKMain />
    </Provider>
  )
}

