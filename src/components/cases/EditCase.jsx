import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { getEditCase } from '../../store/slices/case/thunk';

/**
 * Funcion para renderizar el componente EditCase donde servira para la funcionalidad de editar un caso
 * @returns componente EditCase
 */
export const EditCase = ({data, handleClose}) => {
  
  const {id, case:c} = data

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      case: c,
    },
    validationSchema: Yup.object({
      case: Yup.string().required()
    }),
    onSubmit: (formValue) => {
      if(formValue["case"] === c){
        Swal.fire("Info", 'Please edit the text', "info");
      } else {
        dispatch(getEditCase(id, formValue));
      }
    },
  });

  return (
    <>
      <form
        className="p-2 d-flex justify-content-center align-items-center"
        onSubmit={formik.handleSubmit}
      >
        <fieldset style={{ width: "500px" }}>
          <div className="mb-3">
            <label className="form-label">Case</label>
            <textarea
              name="case"
              className="form-control"
              rows="3"
              placeholder="Write the case"
              value={formik.values.case}
              onChange={formik.handleChange}
              style = {{border: formik.errors.case ? "#F70A0A 2px solid" : ""}}
            />
            {formik.errors.case ? (
              <div style={{ color: "red" }}>
                <p>Please enter the case*</p>
              </div>
            ) : null}
          </div>
          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn font-weight-bold"
              style={{ background: "#A0D1CA", border: "#14A24C 3px solid" }}
              onClick={
                formik.values.case === c
                  ? null
                  : formik.values.case === ""
                  ? null
                  : handleClose
              }
            >
              UPDATE
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
