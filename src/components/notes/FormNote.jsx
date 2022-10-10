import { getCreateNote } from '../../store/slices/note/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

/**
 * Funcion para renderizar el componente que se encargara de crear la nota
 * @returns componente FormNote
 */
export const FormNote = () => {
  const {cases} = useSelector(state => state.case);
  const {isCreateNote} = useSelector(state => state.note);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      note: "",
      caseId: "",
    },
    validationSchema: Yup.object({
      note: Yup.string().required(),
      caseId: Yup.number().required(),
    }),
    onSubmit: (formValue) => {
      dispatch(getCreateNote(formValue));
    },
  });

  if(isCreateNote){
    return <Navigate to="/" />;
  }
  
  return (
    <>
      <form
        className="h-100 p3 d-flex justify-content-center align-items-center"
        onSubmit={formik.handleSubmit}
      >
        <fieldset
          className="w-50 align-items-center text-white rounded-30"
          style={{
            margin: "10px",
            padding: "50px",
            background: "#8DCAF0",
            border: "#0170B9 4px solid",
          }}
        >
          <legend className="text-center">Create Note</legend>
          <div className="mb-3">
            <label className="form-label">Write Note</label>
            <textarea
              name="note"
              className="form-control"
              rows="3"
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
          <div className="mb-3">
            <label className="form-label">Select case</label>
            <select
              name="caseId"
              className="form-select"
              aria-label="Default select example"
              value={formik.values.caseId}
              onChange={formik.handleChange}
              style={{
                border: formik.errors.caseId ? "#F70A0A 2px solid" : "",
              }}
            >
              <option defaultValue>Choose the case for this note</option>
              {cases.map(({ case: c, id }) => (
                <option key={id} value={id}>
                  {c}
                </option>
              ))}
            </select>
            {formik.errors.caseId ? (
              <div style={{ color: "red" }}>
                <p>Please choose one case*</p>
              </div>
            ) : null}
          </div>
          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn font-weight-bold"
              style={{ background: "#A0D1CA", border: "#14A24C 3px solid" }}
            >
              CREATE
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
