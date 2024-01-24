import { useEffect, useState } from "react"
import type { Character } from "../../requests/schemas"
import { getCharacterInfo } from "../../requests/requests"
import InfoTableRow from "../InfoTableRow"
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

    if (!characterInfo) {
        return 'loading...';
    }

    return (<div className="character-page-container">
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
        </div>   </div>);
}