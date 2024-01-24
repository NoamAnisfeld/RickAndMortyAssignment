import { useEffect, useState } from "react"
import type { Episode } from "../../requests/schemas"
import { getEpisodeInfo } from "../../requests/requests"
import './EpisodePage.css'


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

    return (<div className="episode-page-container">
        <div>
            <h1>{episodeInfo.name}</h1>
            <p className="secondary-header">aired at {episodeInfo.air_date}</p>
        </div>
    </div>);
}