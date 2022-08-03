import styles from "./Select.module.css";

const Select = ({
    options,
    value,
    onChange
}) => (
    <select
        className={styles.select}
        value={ value }
        onChange={(event) => onChange(event.target.value)}
    >
        {
            options.map(({label, value}) => (
                <option
                    key={value}
                    value={value}
                >
                    {label}
                </option>
            ))
        }
    </select>
);

export default Select;