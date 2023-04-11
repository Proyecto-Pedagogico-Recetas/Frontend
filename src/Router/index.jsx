import { createBrowserRouter } from "react-router-dom";
import Root from "../Router/Root";
import Home from '../Pages/Home';
import NotFound from "../Pages/NotFound";
import Menu from "../Pages/Menu";
import ViewMenu from "../Pages/ViewMenu";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <NotFound />,
        children: [
            {
                errorElement: <NotFound />,
                children: [
                    {
                        index: true,
                        element: <Home/>,
                    },
                    {
                        path: '/Menu',
                        element: <Menu/>,
                        
                    },
                    {
                        path: '/ViewMenu',
                        element: <ViewMenu/>,
                        
                    },
                    
                   
                    
                    
                ]
            },

        ]
    },
]);

