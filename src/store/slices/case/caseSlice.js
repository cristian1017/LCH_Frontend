import { createSlice } from '@reduxjs/toolkit';

/**
 * @property {{cases:array, isLoading:boolean, isCreateCase: false}}
 */
const initialState = {
  cases: [],
  isLoading: false,
  isCreateCase: false,
  isOpenAcordionCase: false
}

export const caseSlice = createSlice({
  name: "case",
  initialState,
  reducers: {
    /**
     * Funcion para validar la carga de información
     * @param {*} state 
     * @property {isLoading:boolean}
     * @return {boolean} se le asigna true a la propery isLoading
     */
    startLoadingCases: (state) => {
      state.isLoading = true;
    },
    /**
     * Funcion para setear la información
     * @param {*} state 
     * @param {*} action
     * @property {isLoading:boolean}
     * @return {object} se modifica el state con la información
     */
    setCases: (state, action) => {
      state.isLoading = false;
      state.cases = action.payload.cases;
      state.isCreateCase = false;
    },
    /**
     * Funcion para saber el estado de la creación
     * @param {*} state 
     * @param {*} action
     * @property {isLoading:boolean}
     * @property {isOpenAcordionCase:boolean}
     * @return {boolean} dependiendo del estado de la creación {true / false}
     */
    createCase: (state, action) => {
      state.isCreateCase = action.payload.isCreateCase;
      state.isOpenAcordionCase = action.payload.isOpenAcordionCase
    },
    closeAccordionCase: (state) => {
      state.isOpenAcordionCase = false
    }
  },
});

export const { startLoadingCases, setCases, createCase, closeAccordionCase } = caseSlice.actions;