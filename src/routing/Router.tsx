import {
    createHashRouter as createRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    useParams,
} from "react-router-dom";
import MainPage from "../components/MainPage"
import WelcomeMessage from "../components/WelcomeMessage";
import AllEpisodesPage from "../components/episodes/AllEpisodesPage"
import AllCharactersPage from "../components/characters/AllCharactersPage"
import EpisodePage from "../components/episodes/EpisodePage"
import CharacterPage from "../components/characters/CharacterPage"
import FavoritesPage from "../components/FavoritesPage";


function EpisodeRouter() {
    const { episodeId } = useParams();
    return <EpisodePage episodeId={Number(episodeId)} />
}

function CharacterRouter() {
    const { characterId } = useParams();
    return <CharacterPage characterId={Number(characterId)} />
}


const router = createRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainPage />}>
            <Route index element={<WelcomeMessage />} />
            <Route path="episodes">
                <Route index element={<AllEpisodesPage />} />
                <Route path=":episodeId" element={<EpisodeRouter />} />
            </Route>
            <Route path="characters">
                <Route index element={<AllCharactersPage />} />
                <Route path=":characterId" element={<CharacterRouter />} />
            </Route>
            <Route path="favorites" element={<FavoritesPage />} />
        </Route>
    )
);

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}