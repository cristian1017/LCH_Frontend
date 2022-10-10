import { baseApí } from '../../../api/baseApi';
import { setNotes, startLoadingNotes, createNote } from './noteSlice';
import Swal from 'sweetalert2';

/**
 * Función que consume la API para obtener las noas
 * @returns {object} se trae la información para disparar la accion de guardar en el state, se muestran los mensaje que validación
 */
export const getNotes = () => {
  return async(dispatch, getState) => {
    dispatch(startLoadingNotes());
    const {data} = await baseApí.get('/notes')
    dispatch(setNotes({notes: data}));
  }
}

/**
 * Función que consume la API para crear las notas
 * @param {object} values
 * @returns {object} se trae la información para disparar la accion y guardar el estado de la creación, se muestran los mensaje que validación
 */
export const getCreateNote = (values) => {
  return async(dispatch, getState) => {
    try {
      const { status, data } = await baseApí.post("/note", values, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(status === 200){
        dispatch(createNote({isCreateNote: true,  isOpenAcordionNote: true}))
        Swal.fire("Success", data.message, "success");
      }
    } catch (error) {
      if(error.code === 'ERR_NETWORK'){
        Swal.fire("Error", error.message, "error");
      }

      if(error.status !== 200){
        Swal.fire("Error", error.data.message, "error");
      }
    }
  }
}

/**
 * Función que consume la API para actualizar la nota
 * @param  {number} id
 * @param {object} values
 * @returns {object} se trae la información para disparar la accion y guardar el estado de la creación, se muestran los mensaje que validación
 */
export const getEditNote = (id,values) => {
  return async(dispatch, getState) => {
    try {
      const { status, data } = await baseApí.put(`/note/${id}`, values, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(status === 200){
        Swal.fire("Success", data.message, "success");
        dispatch(getNotes());
      }
    } catch (error) {
      if(error.code === 'ERR_NETWORK'){
        Swal.fire("Error", error.message, "error");
      }
      if(error.status !== 200){
        Swal.fire("Error", error.data.message, "error");
      }
    }
  }
}

/**
 * Función para eliminar una nota filtrada por el id
 * @param {number} id 
 * @returns se elimina la nota y se muestran los mensaje que validación
 */
export const getDeleteNote = (id) => {
  return async(dispatch, getState) => {
    try {
      const { status, data} = await baseApí.delete(`/note/${id}`);
      if(status === 200){
        Swal.fire("Success", data.message, "success");
        dispatch(getNotes());
      }
    } catch (error) {
      Swal.fire("Error", error.data.message, "error");
    }
  }
}

