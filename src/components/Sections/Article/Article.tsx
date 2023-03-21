import React, { useState } from 'react'
import Card from '../../../common/Cards/Card';
import styles from './Article.module.scss';
import Pagination from '../../../common/Pagination/Pagination';

function ArticleSection({ data }) {
    const [articles, setArticles] = useState(data.slice(0, 6))
    const [range, setRange] = useState([0, 6])

    const handlePagination = (newRange) => {
        setRange(newRange)
        setArticles(data.slice(newRange[0], newRange[1]))
    }

    return (
        <section>
            <div className={styles.articleHeading}>
                <h2>Article</h2>
                <Pagination callback={handlePagination} range={range} totalCount={data.length} numOfItems={6} />
            </div>
            <div className={styles.grid}>
                {articles.map((article) => (
                    <Card card={article} type={'medium'} separator={true} />
                ))}
            </div>
        </section>
    );
}

export default ArticleSection;
