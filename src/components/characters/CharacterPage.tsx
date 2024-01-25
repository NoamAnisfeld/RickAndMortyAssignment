import { useEffect, useState } from "react"
import type { Character, Episode } from "../../requests/schemas"
import { getCharacterInfo, getMultipleEpisodes } from "../../requests/requests"
import InfoTableRow from "../InfoTableRow"
import { Link } from "react-router-dom"
import GroupedEpisodeLinks from "../episodes/GroupedEpisodeLinks"
import './CharacterPage.css'


interface CharacterPageProps {
    characterId: number,
}

export default function CharacterPage({
    characterId,
}: CharacterPageProps) {

    const [characterInfo, setCharacterInfo] = useState<Character>();
    useEffect(() => {
        getCharacterInfo(characterId).then(setCharacterInfo);
    }, [characterId]);

    const [episodes, setEpisodes] = useState<Episode[]>();
    useEffect(() => {
        if (!characterInfo) {
            return;
        }

        const episodeIds = characterInfo.episode.map(url => Number(url.replace(/.*\//, '')));
        getMultipleEpisodes(episodeIds).then(setEpisodes);
    }, [characterInfo]);

    if (!characterInfo) {
        return 'loading...';
    }

    return (<>
        <div className="character-page-container">
            <img className="character-image" src={characterInfo.image} alt={characterInfo.name} />
            <div className="character-info">
                <h1>{characterInfo.name}</h1>
                <table className="character-info-table">
                    <tbody>
                        {
                            ([
                                'status',
                                'species',
                                'type',
                                'gender',
                            ] as const).map(field => (
                                <InfoTableRow
                                    key={field}
                                    field={field}
                                    dataObject={characterInfo}
                                />
                            ))
                        }
                        <tr key="location">
                            <th>Last known location</th>
                            <td>{characterInfo.location.name}</td>
                        </tr>
                        <tr key="first-appearance">
                            <th>First appearance</th>
                            <td>
                                {episodes
                                    ? <Link to={`/episodes/${episodes[0].id}`} className="text-link">
                                        Episode {episodes[0].id}: {episodes[0].name}
                                    </Link>
                                    : ''
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <h2>Participated at the following episodes:</h2>
        {
            episodes
                ? <GroupedEpisodeLinks episodes={episodes} numbering="explicit" />
                : 'loading...'
        }
    </>);
}