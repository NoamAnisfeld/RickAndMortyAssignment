import { useEffect, useState } from 'react'
import { getAllEpisodes } from '../../requests/requests'
import type { Episode } from '../../requests/schemas'
import GroupedEpisodeLinks from './GroupedEpisodeLinks'


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
        <h1>All Rick and Morty Episodes</h1>
        <main className="all-episodes-container">
            <GroupedEpisodeLinks episodes={episodes} numbering="autolist" showAirDate />
        </main>
    </>)
}