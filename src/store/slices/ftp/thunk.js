import { baseApí } from '../../../api/baseApi';
import Swal from 'sweetalert2';
import { loadingFtp } from './ftp';

/**
 * Función de consumir API para la subida del archivo JSON al FTP
 * @returns {{message: string}} mensaje de respuesta
 */
export const getUploadFTP = () => {
  return async( dispatch, getState) => {
    try {
      dispatch(loadingFtp({isLoading: true}))
      const {status, data} = await baseApí.post('/uploadJson', null)
      dispatch(loadingFtp({isLoading: false}))
      if(status === 200){
        Swal.fire("Success", data.message, "success");
      }
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
      
  }
}


