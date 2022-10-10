import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { closeAccordionCase } from '../store/slices/case/caseSlice';
import { closeAccordionNote } from '../store/slices/note/noteSlice';

/**
 * Funcion para renderizar el componente navbar donde estara un menu con opciones de navegación dentrp de la app
 * @returns componente Navbar
 */
export const Navbar = () => {
  const dispatch= useDispatch();

  const handleOnClick = () =>{
    dispatch(closeAccordionCase())
    dispatch(closeAccordionNote())
  }
  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-dark"
        style={{ background: "#0170B9" }}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={"/"} onClick={()=>handleOnClick()}>
            Laboratorio Clinico Hematológico
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link active" to={"/"} onClick={()=>handleOnClick()}>
                Home
              </NavLink>
              <NavLink className="nav-link active" to={"/notes"} onClick={()=>handleOnClick()}>
                Notes
              </NavLink>
              <NavLink className="nav-link active" to={"/cases"} onClick={()=>handleOnClick()}>
                Cases
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
