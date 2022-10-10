import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDeleteNote } from '../../store/slices/note/thunk';
import { Popup } from '../Popup';

/**
 * Funcion para renderizar el componente CardNote donde estara la información de las notas
 * @returns componente CardNote
 */
export const CardNote = () => {
  const {notes} = useSelector(state => state.note)
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    id: "",
    note: "",
    case: "",
  });
  const [isHovering, setIsHovering] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = (id, note, c) => {
    setData({
      id,
      note,
      case: c,
    });
    setShow(true);
  }

  const handleDelete = (id) => {
    dispatch(getDeleteNote(id));
  }

  const handleMouseEnter = () => {
    setIsHovering(true);
    console.log('se paso por encima',isHovering)
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

 
  return (
    <>
      {notes.map(({ id, note, case: c, caseId }) => {
        return (
          <div
            className="card overflow-hidden shadow"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ width: "21rem", height: "18rem" }}
            key={id}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: "3",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {c}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Note 🡻 for this case 🡹
              </h6>
              <div
                className="card-text"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: "5",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {note}
              </div>
            </div>
            <div className="d-flex justify-content-evenly" style={{marginBottom: "15px"}}>
              <button
                type="submit"
                className="btn font-weight-bold d-flex justify-content-center"
                style={{ background: "#A0D1CA", border: "#14A24C 3px solid" }}
                onClick={() => handleShow(id, note, c)}
              >
                EDIT
              </button>
              <button
                type="submit"
                className="btn font-weight-bold d-flex justify-content-center"
                style={{ background: "#F39696", border: "#F70A0A 3px solid" }}
                onClick={() => handleDelete(id)}
              >
                DELETE
              </button>
            </div>
          </div>
        );
      })}
      <Popup data={data} show={show} title="Edit note" handleClose={handleClose}/>
      
    </>
  );
}
