import { configureStore } from '@reduxjs/toolkit';
import { caseSlice } from './slices/case/caseSlice';
import { ftpSlice } from './slices/ftp/ftp';
import { noteSlice } from './slices/note/noteSlice';

export const store = configureStore({
  reducer: {
    note: noteSlice.reducer,
    case: caseSlice.reducer,
    ftp: ftpSlice.reducer,
  },
});