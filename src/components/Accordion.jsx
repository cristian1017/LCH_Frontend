import { useDispatch, useSelector } from "react-redux";
import { getDowloadJSON } from "../store/slices/case/thunk";
import { getUploadFTP } from "../store/slices/ftp/thunk";
import { CardCase } from "./cases/CardCase";
import { CardNote } from "./notes/CardNote";

/**
 * Funcion para renderizar el componente de acordion, donde se renderizara diferentes componentes
 * @returns componente Accordion
 */
export const Accordion = () => {
  const {isLoading} = useSelector(state => state.ftp)
  const {isOpenAcordionNote} = useSelector(state => state.note)
  const {isOpenAcordionCase} = useSelector(state => state.case)
  const {notes} = useSelector(state => state.note)
  const {cases} = useSelector(state => state.case)

  const dispatch = useDispatch();

  const handleDowloadJSON = () => {
    dispatch(getDowloadJSON())
  }

  const handleUploadFTP = () => {
    dispatch(getUploadFTP())
  }

  return (
    <>
      <div
        className="accordion accordion-flush"
        id="accordionFlushExample"
        style={{ width: "80%" }}
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              
              className={isOpenAcordionNote ? "accordion-button" : "accordion-button collapsed"}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded={isOpenAcordionNote}
              aria-controls="flush-collapseOne"
            >
              Notes
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className={isOpenAcordionNote ? "accordion-collapse collapse show" : "accordion-collapse collapse"}
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body d-flex flex-wrap"
              style={{ gap: "20px" }}
            > 
              {notes.length === 0 ? "No hay notas" : <CardNote />}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className={isOpenAcordionCase ? "accordion-button" : "accordion-button collapsed"}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded={isOpenAcordionCase}
              aria-controls="flush-collapseTwo"
            >
              Cases
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className={isOpenAcordionCase ? "accordion-collapse collapse show" : "accordion-collapse collapse"}
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body d-flex flex-wrap"
              style={{ gap: "20px" }}
            >
              {cases.length === 0 ? "No hay casos" : <CardCase />}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Actions
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body d-flex justify-content-evenly">
              <div
                className="card overflow-hidden shadow"
                style={{ width: "22rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title">Dowload JSON</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Note and Case
                  </h6>
                  <p className="card-text">
                    This Action is for dowload the information in format JSON.
                  </p>
                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn font-weight-bold"
                      style={{
                        background: "#A0D1CA",
                        border: "#14A24C 3px solid",
                      }}
                      onClick={() => handleDowloadJSON()}
                    >
                      DOWLOAD JSON
                    </button>
                    
                  </div>
                </div>
              </div>
              <div
                className="card overflow-hidden shadow"
                style={{ width: "22rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title">Upload FTP</h5>
                  <h6 className="card-subtitle mb-2 text-muted">JSON file</h6>
                  <p className="card-text">
                    This Action is for upload the JSON file on the server FTP.
                  </p>
                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn font-weight-bold"
                      style={{
                        background: "#A0D1CA",
                        border: "#14A24C 3px solid",
                      }}
                      onClick={() => handleUploadFTP()}
                    >
                      {
                        isLoading ?  <span className="spinner-border" style={{color: "#0170B9"}}></span>  : "UPLOAD FILE"
                      }
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
