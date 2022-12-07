import ReactDOM from 'react-dom';

import styles from "./Modal.module.css";

const Modal = ({ children, setIsOpen, handleDeleteTask }) => {

  const handleTask = () => {
    setIsOpen(false);
    handleDeleteTask();
  };

  return (
    // * A React portal was integratedn
    ReactDOM.createPortal(
      <>
        <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
        <div className={styles.centered}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h5 className={styles.heading}>Dialog</h5>
            </div>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
              X
            </button>
            <div className={styles.modalContent}>
              {children}
            </div>
            <div className={styles.modalActions}>
              <div className={styles.actionsContainer}>
                <button className={styles.deleteBtn} onClick={() => handleTask()}>
                  Eliminar
                </button>
                <button
                  className={styles.cancelBtn}
                  onClick={() => setIsOpen(false)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </>,
      document.getElementById('modal')
    )
  )
}

export default Modal
