// importacion libreria y estilos
import { FaSpinner } from "react-icons/fa";
import styles from "./Spinner.module.css";
//componente spinner
export function Spinner() {
  return (
    <div className={styles.spinner}>
      <FaSpinner className={styles.spinning} size={60} />
    </div>
  );
}