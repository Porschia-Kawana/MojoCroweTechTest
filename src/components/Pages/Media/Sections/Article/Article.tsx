import React, { useState } from 'react';

import Card from '../../../../../common/Cards/Card';
import Pagination from '../../../../../common/Pagination/Pagination';
import { MediaData } from '../../../../../interfaces/data';

import styles from './Article.module.scss';

interface Props {
    data: MediaData[];
}

function ArticleSection({ data }: Props) {
    const filteredData = data.filter((item: MediaData) => item.type === 'article')
    const [articles, setArticles] = useState(filteredData.slice(0, 6))
    const [range, setRange] = useState([0, 6])

    const handlePagination = (start: number, end: number) => {
        setRange([start, end])
        setArticles(filteredData.slice(start, end))
    }

    return (
        <section>
            <div className={styles.heading}>
                <h2>Articles</h2>
                <Pagination callback={handlePagination} range={range} totalCount={filteredData.length} numOfItems={6} />
            </div>
            <div className={styles.article}>
                {articles.map((article) => (
                    <Card card={article} type={'medium'} separator={true} />
                ))}
            </div>
        </section>
    );
}

export default ArticleSection;
