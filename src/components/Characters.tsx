import { useEffect, useState } from 'react'
import { getCharacters } from '../requests/requests'


export default function Characters() {

    const [data, setData] = useState();

    useEffect(() => {
        (async () => {
            const response = await getCharacters();
            if (response.data) {
                setData(response.data);
            }
        })()
    })

    return (
        <pre style={{ textAlign: 'start' }}>{JSON.stringify(data, undefined, 4) || 'loading...'}</pre>
    )
}