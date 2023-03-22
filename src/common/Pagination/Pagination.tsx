import React, { useState } from 'react';

import styles from './Pagination.module.scss';

interface Props {
    callback: (a: number, b: number) => void;
    range: Array<number>;
    totalCount: number;
    numOfItems: number,
}

function Pagination({
    callback,
    range,
    totalCount,
    numOfItems,
}: Props): JSX.Element {
    const [disableLeft, setDisableLeft] = useState(range[0] <= 0)
    const [disableRight, setDisableRight] = useState(range[1] >= totalCount)

    const clickLeft = () => {
        if (!disableLeft) {
            if ((range[0] - numOfItems) <= 0) {
                setDisableLeft(true)
            } else {
                setDisableLeft(false)
            }
            setDisableRight(false)
            callback((range[0] - numOfItems), (range[1] - numOfItems))
        }
    }

    const clickRight = () => {
        if (!disableRight) {
            if ((range[1] + numOfItems) >= totalCount) {
                setDisableRight(true)
            } else {
                setDisableRight(false)
            }
            setDisableLeft(false)
            callback((range[0] + numOfItems), (range[1] + numOfItems))
        }

    }

    return (
        <div className={styles.pagination}>
            <div className={disableLeft ? styles.disableLeftArrow : styles.leftArrow} onClick={clickLeft} />
            <div className={disableRight ? styles.disableRightArrow : styles.rightArrow} onClick={clickRight} />
        </div>
    );
}

export default Pagination;
