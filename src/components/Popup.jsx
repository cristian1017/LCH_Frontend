import {EditNote} from './notes/EditNote';
import {EditCase} from './cases/EditCase';
import Modal from 'react-bootstrap/Modal';

/**
 * Funcion para renderizar el componente popup donde renderizara las acciones de editar un caso o una nota
 * @returns componente Popup
 */
export const Popup = ({data, show, handleClose, title}) => {

  const {note} = data;

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{borderRadius:"15px"}}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {note ? <EditNote data={data} handleClose={handleClose}/> : <EditCase data={data} handleClose={handleClose}/>}
        </Modal.Body>
      </Modal>
    </>
  );
}
