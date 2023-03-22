import React from 'react';
import { format } from 'date-fns';

import styles from './MediumArticleCard.module.scss';

interface Props {
    id: string;
    title: string;
    description?: string;
    thumbnailUri?: string;
    publishedAt?: string;
    source?: string;
    url?: string;
    separator?: boolean;
}


function MediumArticleCard(props: Props) {
    let formatedDate
    if (props.publishedAt) {
        formatedDate = format(Date.parse(props.publishedAt), 'dd MMMM yyyy')
    }

    return (
        <div className={styles.wrapper}>
            <a className={styles.card} data-testid={props.id} href={props.url}>
                {props.thumbnailUri && (
                    <img className={styles.image} src={props.thumbnailUri} alt={`${props.title} - Article Image`} />
                )}
                <div className={styles.content}>
                    {props.publishedAt && (
                        <span className={styles.publishedAt}>{formatedDate}</span>
                    )}
                    {props.title && (
                        <h3>{props.title}</h3>
                    )}
                    {props.description && (
                        <p className={styles.description}>{props.description}</p>
                    )}
                    {props.source && (
                        <span className={styles.source}>By {props.source}</span>
                    )}
                </div>
            </a>
            {props.separator && (
                <span className={styles.separator} />
            )}
        </div>

    );
}

export default MediumArticleCard;
