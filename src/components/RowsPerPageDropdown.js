import styles from "./RowsPerPageDropdown.module.css";
const RowsPerPageDropdown = ({ onClose }) => {
  return (
    <div className={styles.rowsPerPageDropdown}>
      <div className={styles.dropdownOptions}>
        <div className={styles.option}>5</div>
      </div>
      <div className={styles.dropdownOptions}>
        <div className={styles.option}>10</div>
      </div>
    </div>
  );
};

export default RowsPerPageDropdown;
