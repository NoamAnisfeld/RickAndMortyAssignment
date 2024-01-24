import { useEffect, useState } from 'react'
import { getAllEpisodes } from '../../requests/requests'
import type { Episode } from '../../requests/schemas'
import { Link } from 'react-router-dom';


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

    return (<>
        <h1>Episodes</h1>
        <ol className="episodes">
            {episodes.map(episode =>
                <li>
                    <Link to={String(episode.id)}>
                        {episode.name}
                    </Link>
                </li>
            )}
        </ol>
    </>)
}