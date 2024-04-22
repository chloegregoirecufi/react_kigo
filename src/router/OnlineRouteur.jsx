import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../screens/ErrorScreens/ErrorPage";
import Home from "../screens/OnlineScreens/Home";
import Profil from "../screens/OnlineScreens/Profil";
import Projet from "../screens/OnlineScreens/Projet";
// import Account from "../screens/OnlineScreens/Account";

const OnlineRouteur = createBrowserRouter([
    {
        element: (
            <>
            <App />
            </>
        ),
        errorElement: <ErrorPage />,
        //on declare les routes avec leur vue
        children: [
            {
                path:"/",
                element: <Home/>
            },
            
            //route pour navbar 
            {
                 path:"/projet",
                 element: <Projet/>
            },
            {
                 path:"/profil",
                 element: <Profil/>
            },
            
        ]
    }
])

export default OnlineRouteur