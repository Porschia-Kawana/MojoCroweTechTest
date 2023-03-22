import React from 'react'
import Card from '../../../../../common/Cards/Card';
import styles from './Spotlight.module.scss';
import { MediaData } from '../../../../../interfaces/data'

interface Props {
    data: MediaData[]
}

function SpotlightSection({ data }: Props) {
    const audioItems = data.filter((item) => item.type === 'podcast' || item.type === 'video').slice(0, 5);
    const articles = data.filter((item) => item.type === 'article' && item.featured).slice(0, 4);

    return (
        <section>
            <h2>Spotlight</h2>
            <div className={styles.spotlight}>
                <div className={styles.featured}>
                    {articles.length > 0 && (
                        <Card card={articles[0]} type={'large'} />
                    )}
                    <span className={styles.featureSeparator} />
                </div>
                <div className={styles.articles}>
                    <div>
                        {articles.map((article, idx) =>
                            <Card card={article} type={'small'} separator={!(articles.length - 1 === idx)} />
                        )}
                    </div>
                    <span className={styles.articleSeparator} />
                </div>
                <div className={styles.audio}>
                    {audioItems.map((audio, idx) =>
                        <Card card={audio} type={'audio'} separator={!(audioItems.length - 1 === idx)} />
                    )}
                </div>
            </div>
        </section>
    );
}

export default SpotlightSection;
