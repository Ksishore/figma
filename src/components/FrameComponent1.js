import styles from "./FrameComponent1.module.css";
const FrameComponent1 = ({ onClose }) => {
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

export default FrameComponent1;
