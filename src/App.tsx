import React, { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ArticleSection from './components/Sections/Article/Article';
import SpotlightSection from './components/Sections/Spotlight/Spotlight';

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

function App() {
	const { data } = useQuery(GetMedia);

	return (
		<div className='app'>
			<Header />
			{data && (
				<main>
					<SpotlightSection data={data.media.items} />
					<ArticleSection data={data.media.items.filter((item) => item.type === 'article')} />
				</main>
			)}
			<Footer />
		</div>
	);
}

export default App;
