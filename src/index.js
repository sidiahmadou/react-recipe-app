import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {store} from './Features/Store';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './Features/Api/apiSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <ApiProvider api={apiSlice}>
          <Provider store={store}>
            <App />
          </Provider>
        </ApiProvider>
      </BrowserRouter>
  </React.StrictMode>
);
