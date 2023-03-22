import React from 'react';
import LargeArticleCard from './Article/Large/LargeArticleCard';
import MediumArticleCard from './Article/Medium/MediumArticleCard';
import SmallArticleCard from './Article/Small/SmallArticleCard';
import AudioCard from './Audio/AudioCard';

interface Card {
    id: string;
    title: string;
    createdAt?: string;
    description?: string;
    featured?: boolean;
    publishedAt?: string;
    source?: string;
    thumbnailUri?: string;
    type?: string;
    updatedAt?: string;
    url?: string;
}

interface Props {
    card: Card;
    type: string;
    separator?: boolean;
}

function Card(props: Props) {
    switch (props.type) {
        case 'large':
            return (<LargeArticleCard separator={props.separator} id={props.card.id} title={props.card.title} description={props.card.description} thumbnailUri={props.card.thumbnailUri} />)
        case 'medium':
            return (<MediumArticleCard separator={props.separator} id={props.card.id} title={props.card.title} description={props.card.description} thumbnailUri={props.card.thumbnailUri} publishedAt={props.card.publishedAt} source={props.card.source} />)
        case 'small':
            return (<SmallArticleCard separator={props.separator} id={props.card.id} title={props.card.title} description={props.card.description} />)
        case 'audio':
            return (<AudioCard separator={props.separator} id={props.card.id} title={props.card.title} thumbnailUri={props.card.thumbnailUri} />)
        default:
            return (<div />)
    }
}

export default Card;
