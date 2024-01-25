import { useEffect, useState } from "react"
import type { Character, Episode } from "../../requests/schemas"
import { getCharacterInfo, getMultipleEpisodes } from "../../requests/requests"
import InfoTableRow from "../InfoTableRow"
import './CharacterPage.css'
import GroupedEpisodeLinks from "../episodes/GroupedEpisodeLinks"


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
            <div>
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