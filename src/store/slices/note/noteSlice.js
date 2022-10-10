import { createSlice } from '@reduxjs/toolkit';


/**
 * @property {{notes: array, isLoading: boolean, isCreateCase: boolean}}
 */
const initialState = {
  notes: [],
  isLoading: false,
  isCreateNote: false,
  isOpenAcordionNote: false
}


export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    /**
     * Funcion para validar la carga de las notas
     * @param {*} state
     * @param {*} action
     * @property {isLoading:boolean}
     * @return {boolean} se le asigna el boolean {true / false}
     */
    startLoadingNotes: (state) => {
      state.isLoading = true;
    },
    /**
     * Funcion para setear las notas
     * @param {*} state
     * @param {*} action
     * @property {isLoading:boolean}
     * @property {notes:array}
     * @property {isCreateNote:boolean}
     * @return {boolean} se le asigna a cada propiedad los valores definidos
     */
    setNotes: (state, action) => {
      state.isLoading = false;
      state.notes = action.payload.notes;
      state.isCreateNote = false;
    },
    /**
     * Funcion para validar la carga de la creación de las notas
     * @param {*} state
     * @param {*} action
     * @property {isCreateNote:boolean}
     * @property {isOpenAcordionNote:boolean}
     * @return {boolean} se le asigna el boolean {true / false}
     */
    createNote: (state, action) => {
      state.isCreateNote = action.payload.isCreateNote;
      state.isOpenAcordionNote = action.payload.isOpenAcordionNote
    },
    closeAccordionNote: (state) => {
      state.isOpenAcordionNote = false
    }
  },
});

export const { startLoadingNotes, setNotes, createNote, closeAccordionNote } = noteSlice.actions;