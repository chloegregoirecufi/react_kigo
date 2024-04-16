import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../screens/ErrorScreens/ErrorPage";
import Home from "../screens/OnlineScreens/Home";
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
                path:"/home",
                element: <Home/>
            },
            //route pour navbar {
            //     path:"/search",
            //     element: <Search/>
            // },
            // {
            //     path:"/library",
            //     element: <Library/>
            // },
            // {
            //     path:"/add-playlist",
            //     element: <Playlist/>
            // },
            // {
            //     path:"/wishlist",
            //     element: <Wishlist/>
            // },
            //On déclare la route pour la vu détail avec un paramètre
            // {
            //     path:'/account/:id',
            //     element: <Account />
            // },
        ]
    }
])

export default OnlineRouteur