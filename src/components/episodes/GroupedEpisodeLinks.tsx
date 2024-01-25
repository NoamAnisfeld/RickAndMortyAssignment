import { Link } from "react-router-dom"
import { Episode } from "../../requests/schemas"
import './GroupedEpisodeLinks.css'


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

interface GroupedEpisodeLinksProps {
    episodes: Episode[],
    numbering?: 'explicit' | 'autolist' | 'none',
    showAirDate?: boolean,
}

export default function GroupedEpisodeLinks({
    episodes,
    numbering = 'none',
    showAirDate = false,
}: GroupedEpisodeLinksProps) {

    const groupedEpisodes = groupEpisodesIntoSeasons(episodes);

    return (<div className="grouped-episodes-container">
        {Object.entries(groupedEpisodes).map(([season, episodeList]) =>
            <section key={season} className="season-container">
                <h2>Season {season}</h2>
                <ol
                    className={[
                        'episode-list',
                        ...(numbering !== 'autolist'
                            ? ['plain-list']
                            : []
                        )
                    ].join(' ')}
                >
                    {episodeList.map(episode =>
                        <li key={episode.name}>
                            <Link to={`/episodes/${episode.id}`} className="text-link">
                                {numbering === 'explicit'
                                    ? `Episode ${episode.id}: `
                                    : ''
                                }
                                {episode.name}
                            </Link>
                            {showAirDate
                                ? ` (aired ${episode.air_date})`
                                : undefined
                            }
                        </li>
                    )}
                </ol>
            </section>
        )}
    </div>)
}