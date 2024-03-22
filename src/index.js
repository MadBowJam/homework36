import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client'; // Змінено імпорт
import { Provider } from 'react-redux';
import store from './store';
import ClassCounter from './components/ClassCounter';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <ClassCounter />
  </Provider>
);
