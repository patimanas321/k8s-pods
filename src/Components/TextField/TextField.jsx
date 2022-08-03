import styles from "./TextField.module.css";

const TextField = ({
    type = 'text',
    value,
    onChange
}) => (
    <input
        className={styles.textField}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
    />
);

export default TextField;