import { baseApí } from '../../../api/baseApi';
import { startLoadingCases, setCases, createCase } from './caseSlice';
import Swal from 'sweetalert2';

/**
 * Función que consume la API para obtener los casos
 * @returns {object} se trae la información para disparar la accion de guardar en el state, se muestran los mensaje que validación
 */
export const getCases = () => {
  return async(dispatch, getNotes) => {
    dispatch(startLoadingCases());
    const {data} = await baseApí.get('/cases')
    dispatch(setCases({cases: data}));
  }
}

/**
 * Función que consume la API para crear los casos
 * @param {object} values
 * @returns {object} se trae la información para disparar la accion y guardar el estado de la creación, se muestran los mensaje que validación
 */
export const getCreateCases = (values) => {
  return async(dispatch, getCreateCases) => {
    try {
      const { status, data } = await baseApí.post("/case", values, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(status === 200){
        dispatch(createCase({isCreateCase: true, isOpenAcordionCase: true}))
        Swal.fire("Success", data.message, "success");
      }
    } catch (error) {
      if(error.code === 'ERR_NETWORK'){
        Swal.fire("Error", error.message, "error");
      }
      if(error.status !== 200){
        Swal.fire("Error", error.data.msg, "error");
      }
    }
  }
}

/**
 * Función que consume la API para actualizar el caso
 * @param  {number} id
 * @param {object} values
 * @returns {object} se trae la información para disparar la accion y guardar el estado de la creación, se muestran los mensaje que validación
 */
export const getEditCase = (id,values) => {
  return async(dispatch, getState) => {
    try {
      const { status, data } = await baseApí.put(`/case/${id}`, values, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(status === 200){
        Swal.fire("Success", data.message, "success");
        dispatch(getCases());
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
 * Función que consume la API para descargar archivo JSON
 * @returns {object} se descarga el archivo JSON
 */
export const getDowloadJSON = () => {
  return async(getState) => {
    await baseApí
      .get("/casesNotes", {
        responseType: "blob",
      })
      .then((res)=>{
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download',"notes.json");
        document.body.appendChild(link);
        link.click();
      }).catch(err => {
        Swal.fire("Error", err, "error");
      })
    
  }
}