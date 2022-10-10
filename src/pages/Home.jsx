import { Accordion } from "../components/Accordion";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getNotes } from "../store/slices/note/thunk";
import { getCases } from "../store/slices/case/thunk";

/**
 * Funcion para renderizar la pagina home donde se encuentra información importante
 * @returns componente Home
 */
export const Home = () => {

  const dispath = useDispatch();

  useEffect(() => {
    dispath(getNotes());
    dispath(getCases());
  }, [dispath])

  return (
    <>
      <div
        className="h-100 d-flex flex-column align-items-center"
        style={{ padding: "30px 30px", margin: "50px auto auto" }}
      >
        <h3>Information</h3>
        <Accordion />
      </div>
      
    </>
  );
}
