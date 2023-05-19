import styles from "./MoreDropdown.module.css";
const MoreDropdown = ({ onClose }) => {
  return (
    <div className={styles.moreDropdown}>
      <div className={styles.dropdownOptions}>
        <div className={styles.option}>Edit profile</div>
      </div>
      <div className={styles.dropdownOptions}>
        <div className={styles.option}>Remove profile</div>
      </div>
    </div>
  );
};

export default MoreDropdown;
