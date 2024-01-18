import {
    createHashRouter as createRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";
import MainPage from "../components/MainPage"
import AllCharactersPage from "../components/AllCharactersPage"

const router = createRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<MainPage />} />
            <Route path="characters" element={<AllCharactersPage />} />
        </Route>
    )
);

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}