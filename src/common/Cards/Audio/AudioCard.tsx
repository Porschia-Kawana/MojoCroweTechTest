import React from 'react';

import styles from './AudioCard.module.scss';

interface Props {
    id: string;
    title: string;
    thumbnailUri?: string;
    url?: string;
    separator?: boolean;
}

function AudioCard(props: Props) {
    return (
        <div className={styles.wrapper} >
            <a className={styles.card} data-testid={props.id} href={props.url}>
                {props.thumbnailUri && (
                    <img className={styles.image} src={props.thumbnailUri} alt={`${props.title} - Audio Article Image`} />
                )}
                <div>
                    {props.title && (
                        <h5 className={styles.title} >{props.title}</h5>
                    )}
                </div>
            </a>
            {props.separator && (
                <span className={styles.separator} />
            )}
        </div>
    );
}

export default AudioCard;
