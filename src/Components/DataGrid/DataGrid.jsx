import styles from './DataGrid.module.css';

const DataGrid = ({
    rows,
    columns
}) => {
    return (
        <div
            role="grid"
            className={styles.grid}
            aria-rowcount={rows.length}
        >
            <div
                role="row"
                className={styles.headerRow}
                aria-rowindex="1"
            >
                {
                    columns.map((col, index) => (
                        <div
                            key={`col-${index}`}
                            role="columnheader"
                            className={styles.headerCell}
                            aria-colindex={index + 1}
                        >
                            {col.title}
                        </div>
                    ))
                }
            </div>
            {
                rows.length && rows.map((row, index) => (
                    <div
                        role="row"
                        key={row.id ?? index}
                        className={styles.dataRow}
                        aria-rowindex={index + 2}
                    >
                        {
                            columns.map((col, index) => (
                                <div
                                    key={`col-${index}`}
                                    role="gridcell"
                                    className={styles.dataCell}
                                    aria-colindex={index + 1}
                                >
                                    {row[col.field]}
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default DataGrid;
