import React from 'react'
import Card from '../../../../../common/Cards/Card';
import styles from './Spotlight.module.scss';

function SpotlightSection({ data }) {
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
                    <span className={styles.separator} />
                </div>
                <div className={styles.articles}>
                    {articles.map((article, idx) =>
                        <div key={article.id} className={styles.card}>
                            <Card card={article} type={'small'} separator={!(articles.length - 1 === idx)} />
                        </div>
                    )}
                    <span className={styles.separator} />
                </div>
                <div className={styles.audio}>
                    {audioItems.map((audio, idx) =>
                        <div key={audio.id} className={styles.card}>
                            <Card card={audio} type={'audio'} separator={!(audioItems.length - 1 === idx)} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default SpotlightSection;
