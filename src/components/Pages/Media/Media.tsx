import React from 'react'
import { gql, useQuery } from '@apollo/client';

import SpotlightSection from './Sections/Spotlight/Spotlight';
import ArticleSection from './Sections/Article/Article';
import { MediaData } from '../../../interfaces/data';

const GetMedia = gql`
	query GetMedia {
		media {
			items {
				featured
				id
				description
				createdAt
				publishedAt
				source
				thumbnailUri
				title
				type
				updatedAt
				url
			}
		}
	}
`;

function MediaPage() {
	const { data } = useQuery(GetMedia);
	return (
		<main>
			{data && (
				<>
					<SpotlightSection data={data.media.items} />
					<ArticleSection data={data.media.items.filter((item: MediaData) => item.type === 'article')} />
				</>
			)}
		</main>
	);
}

export default MediaPage;
