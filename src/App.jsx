import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomePage from "./pages/HomePage"
import Partecipants from "./pages/Partecipants"
import DefaultLayout from './layout/DefaultLayout';
import SingleTravel from "./pages/SingleTravel";
import { GlobalProvider } from "./context/GlobalContext";


function App() {
    return (
        <>
            <GlobalProvider>
                <BrowserRouter>
                    <Routes>
                        <Route Component={DefaultLayout}>
                            <Route path="/" Component={HomePage} />
                            <Route path="partecipants" Component={Partecipants} />
                            <Route path="travel/:id" Component={SingleTravel} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </GlobalProvider>
        </>
    )
}

export default App