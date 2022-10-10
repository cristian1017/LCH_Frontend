import { useSelector } from 'react-redux';
import { FormNote } from '../components/notes/FormNote';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

/**
 * Funcion para renderizar la pagina nota donde estan el componente de crear nota
 * @returns componente Note
 */
export const Note = () => {
  const {cases} = useSelector(state => state.case);

  if(cases.length === 0){
    Swal.fire("Info", 'Please, first create the case for create one note in relation for case', "info");
    return <Navigate to="/cases" />;
  } 

  return (
    <>
        <FormNote />
    </>
  )
}
