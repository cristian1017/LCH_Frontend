import { createSlice } from '@reduxjs/toolkit'
/**
 * @property {{isLoading:boolean}}
 */
const initialState = {
  isLoading: false,
}

export const ftpSlice = createSlice({
  name: "ftp",
  initialState,
  reducers: {
    /**
     * Funcion para validar la carga de del archivo FTP
     * @param {*} state
     * @param {*} action
     * @property {isLoading:boolean}
     * @return {boolean} se le asigna el boolean {true / false}
     */
    loadingFtp: (state, action) => {
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const { loadingFtp } = ftpSlice.actions
