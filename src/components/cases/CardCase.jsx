import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Popup } from '../Popup';

/**
 * Funcion para renderizar el componente CardCase donde estara la información de los casos
 * @returns componente CardCase
 */
export const CardCase = () => {
  const {cases} = useSelector(state => state.case)
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    id: "",
    case: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = (id, c) => {
    setData({
      id,
      case: c,
    });
    setShow(true);
  }

  return (
    <>
      {cases.map(({id, case: c }) => {
        
        return (
          <div
            className="card overflow-hidden shadow"
            style={{ width: "15rem", height: "12rem" }}
            key={id}
          >
            <div className="card-body">
              <h5 className="card-title">Case</h5>
              <div
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: "3",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {c}
              </div>
            </div>
            <div className="d-flex justify-content-center" style={{marginBottom: "15px"}}>
              <button
                type="submit"
                className="btn font-weight-bold d-flex justify-content-center"
                style={{ background: "#A0D1CA", border: "#14A24C 3px solid" }}
                onClick={() => handleShow(id, c)}
              >
                EDIT
              </button>
            </div>
          </div>
        );
      })}
      <Popup data={data} show={show} title="Edit case" handleClose={handleClose}/> 
    </>
  );
}
