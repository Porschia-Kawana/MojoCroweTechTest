import React from 'react';
import styles from './SmallArticleCard.module.scss';

interface Props {
    id: string;
    title: string;
    description?: string;
    separator?: boolean;
}

function SmallArticleCard(props: Props) {
    return (
        <div className={styles.wrapper}>
            <a className={styles.card}>
                <div>
                    {props.title && (
                        <h4>{props.title}</h4>
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

export default SmallArticleCard;
