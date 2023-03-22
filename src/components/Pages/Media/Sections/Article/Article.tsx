import React, { useState } from 'react'
import Card from '../../../../../common/Cards/Card';
import styles from './Article.module.scss';
import Pagination from '../../../../../common/Pagination/Pagination';
import { MediaData } from '../../../../../interfaces/data'

interface Props {
    data: MediaData[]
}

function ArticleSection({ data }: Props) {
    const [articles, setArticles] = useState(data.slice(0, 6))
    const [range, setRange] = useState([0, 6])

    const handlePagination = (start: number, end: number) => {
        setRange([start, end])
        setArticles(data.slice(start, end))
    }

    return (
        <section>
            <div className={styles.heading}>
                <h2>Article</h2>
                <Pagination callback={handlePagination} range={range} totalCount={data.length} numOfItems={6} />
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
