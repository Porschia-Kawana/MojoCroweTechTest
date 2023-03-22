import React from 'react';

import styles from './LargeArticleCard.module.scss';

interface Props {
    id: string;
    title: string;
    description?: string;
    thumbnailUri?: string;
    url?: string;
    separator?: boolean;
}

function LargeArticleCard(props: Props) {
    return (
        <div className={styles.wrapper}>
            <a className={styles.card} data-testid={props.id} href={props.url}>
                {props.thumbnailUri && (
                    <img className={styles.image} src={props.thumbnailUri} alt={`${props.title} - Large Article Image`} />
                )}
                <div>
                    {props.title && (
                        <h3>{props.title}</h3>
                    )}
                    {props.description && (
                        <p className={styles.description}>{props.description}</p>
                    )}
                </div>
            </a>
            {props.separator && (
                <span className={styles.separator} />
            )}
        </div>
    );
}

export default LargeArticleCard;
