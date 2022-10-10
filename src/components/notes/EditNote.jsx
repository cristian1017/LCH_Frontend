import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { getEditNote } from '../../store/slices/note/thunk';

/**
 * Funcion para renderizar el componente EditNote donde servira para la funcionalidad de editar una nota
 * @returns componente EditNote
 */
export const EditNote = ({data, handleClose}) => {
  const {id, note, case:c} = data

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      note: note,
    },
    validationSchema: Yup.object({
      note: Yup.string().required()
    }),
    onSubmit: (formValue) => {
      if(formValue["note"] === note){
        Swal.fire("Info", 'Please edit the text', "info");
      } else {
        dispatch(getEditNote(id, formValue));
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
            <label className="form-label">Note</label>
            <textarea
              name="note"
              className="form-control"
              rows="4"
              placeholder="Write the note associated with the case"
              value={formik.values.note}
              onChange={formik.handleChange}
              style={{ border: formik.errors.note ? "#F70A0A 2px solid" : "" }}
            />
            {formik.errors.note ? (
              <div style={{ color: "red" }}>
                <p>Please enter your note*</p>
              </div>
            ) : null}
          </div>
          <div className="mb-3" style={{ wordWrap: "break-word" }}>
            <label className="form-label">Case</label>
            {c}
          </div>
          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn font-weight-bold"
              style={{ background: "#A0D1CA", border: "#14A24C 3px solid" }}
              onClick={
                formik.values.note === note
                  ? null
                  : formik.values.note === ""
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
