import { useEffect, useState } from "react"
import type { Episode } from "../../requests/schemas"
import { getEpisodeInfo } from "../../requests/requests"
import CharacterGallery from "../characters/CharacterGallery";


interface EpisodePageProps {
    episodeId: number,
}

export default function EpisodePage({
    episodeId,
}: EpisodePageProps) {

    const [episodeInfo, setEpisodeInfo] = useState<Episode>();

    useEffect(() => {
        getEpisodeInfo(episodeId).then(setEpisodeInfo);
    }, [episodeId]);

    if (!episodeInfo) {
        return 'loading...';
    }

    const characterIds = episodeInfo.characters.map(
        characterUrl =>
            Number(characterUrl.replace(/.*\//, ''))
    );

    return (<div className="episode-page-container">
        <div>
            <h1>Episode {episodeInfo.id}: {episodeInfo.name}</h1>
            <p className="secondary-header">aired at {episodeInfo.air_date}</p>
            <h2>Characters participating:</h2>
            <CharacterGallery characterIds={characterIds} />
        </div>
    </div>);
}