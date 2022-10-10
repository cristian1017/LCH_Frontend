
import { getCreateCases } from '../../store/slices/case/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

/**
 * Funcion para renderizar el componente que se encargara de crear el caso
 * @returns componente FormCase
 */
export const FormCase = () => {
  const dispatch = useDispatch();
  const {isCreateCase} = useSelector(state => state.case);

  const formik = useFormik({
    initialValues: {
      case: "",
    },
    validationSchema: Yup.object({
      case: Yup.string().required(),
    }),
    onSubmit: (formValue) => {
      dispatch(getCreateCases(formValue));
    },
  });
  if (isCreateCase){
    return <Navigate to="/" />;
  }

  return (
    <>
      <form
        className="h-100 p-3 d-flex justify-content-center align-items-center"
        onSubmit={formik.handleSubmit}
      >
        <fieldset
          className="w-50 align-items-center text-white rounded-30"
          style={{ margin: "10px", padding: "50px", background: "#8DCAF0", border: "#0170B9 4px solid"}}
        >
          <legend className="text-center">Create case</legend>
          <div className="mb-3">
            <label className="form-label">Write case</label>
            <input
              name="case"
              type="text"
              id="textInput"
              className="form-control"
              placeholder="Write the note associated with the case"
              value={formik.values.case}
              error={formik.errors.case}
              onChange={formik.handleChange}
              style = {{border: formik.errors.case ? "#F70A0A 3px solid" : ""}}

            />
            {formik.errors.case ? <div style={{color: "red"}}><p>Please enter your case*</p></div> : null}
          </div>
          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn font-weight-bold"
              style={{ background: "#A0D1CA",  border: "#14A24C 3px solid"}}
            >
              CREATE
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
