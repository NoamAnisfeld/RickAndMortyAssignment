import { useEffect, useState } from 'react'
import { getAllEpisodes } from '../../requests/requests'
import type { Episode } from '../../requests/schemas'
import { Link } from 'react-router-dom';
import './AllEpisodesPage.css'


function groupEpisodesIntoSeasons(episodes: Episode[]): Record<string, Episode[]> {

    const results: Record<string, Episode[]> = {};

    for (const episode of episodes) {
        const season = episode.episode.match(/S0*(\d+)E/)?.[1] || '';

        if (Object.hasOwn(results, season)) {
            results[season].push(episode);
        } else {
            results[season] = [episode];
        }
    }

    return results;
}

export default function AllEpisodesPage() {

    const [episodes, setEpisodes] = useState<Episode[]>();

    useEffect(() => {
        (async () => {
            setEpisodes(await getAllEpisodes());
        })()
    }, [])

    if (!episodes) {
        return <>loading...</>
    }

    const groupedEpisodes = groupEpisodesIntoSeasons(episodes);

    return (<>
        <h1>All Rick and Morty Episodes</h1>
        <main className="all-episodes-container">

            {Object.entries(groupedEpisodes).map(([season, episodeList]) =>
                <section key={season} className="season-container">
                    <h2>Season {season}</h2>
                    <ol className="episode-list">
                        {episodeList.map(episode =>
                            <li key={episode.name}>
                                <Link to={`/episodes/${episode.id}`} className="text-link">
                                    {episode.name}
                                </Link>
                                {" "}
                                (aired {episode.air_date})
                            </li>
                        )}
                    </ol>
                </section>
            )}
        </main>
    </>)
}