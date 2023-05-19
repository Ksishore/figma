import styles from "./FrameComponent.module.css";
const FrameComponent = ({ onClose }) => {
  return (
    <div className={styles.dropdownOptionsParent}>
      <div className={styles.dropdownOptions}>
        <div className={styles.option}>Edit profile</div>
      </div>
      <div className={styles.dropdownOptions}>
        <div className={styles.option}>Remove profile</div>
      </div>
    </div>
  );
};

export default FrameComponent;
