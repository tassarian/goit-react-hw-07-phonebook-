import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistStore,
    persistReducer,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
  
  import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contactsSlice';
  
  const persistConfig = {
    key: 'root',
    storage,
  };
  const persistedReducer = persistReducer(persistConfig, contactsReducer);
  
  export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  export const persistor = persistStore(store);
