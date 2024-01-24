import {
    createHashRouter as createRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    useParams,
} from "react-router-dom";
import MainPage from "../components/MainPage"
import AllCharactersPage from "../components/characters/AllCharactersPage"
import CharacterPage from "../components/characters/CharacterPage";


function CharacterRouter() {
    const { characterId } = useParams();
    return <CharacterPage characterId={Number(characterId)} />
}


const router = createRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<MainPage />} />
            <Route path="characters">
                <Route index element={<AllCharactersPage />} />
                <Route path=":characterId" element={<CharacterRouter />} />
            </Route>
        </Route>
    )
);

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}